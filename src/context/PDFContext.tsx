import { createContext, useContext, useState, ReactNode } from 'react';

interface PDFContextType {
  pdfContent: string | null;
  setPdfContent: (content: string | null) => void;
  uploadPDF: (file: File) => Promise<void>;
  isUploading: boolean;
}

const PDFContext = createContext<PDFContextType | undefined>(undefined);

export function PDFProvider({ children }: { children: ReactNode }) {
  const [pdfContent, setPdfContent] = useState<string | null>(
    () => localStorage.getItem('pdfContent')
  );
  const [isUploading, setIsUploading] = useState(false);

  const uploadPDF = async (file: File) => {
    setIsUploading(true);
    try {
      // Convert file to base64
      const reader = new FileReader();
      const base64Data = await new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          const result = reader.result as string;
          const base64 = result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      // Call Netlify function to parse PDF
      const response = await fetch('/.netlify/functions/upload-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pdfData: base64Data }),
      });

      if (!response.ok) {
        throw new Error('Failed to parse PDF');
      }

      const data = await response.json();

      // Store the extracted text
      setPdfContent(data.text);
      localStorage.setItem('pdfContent', data.text);
    } catch (error) {
      console.error('Error uploading PDF:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <PDFContext.Provider value={{ pdfContent, setPdfContent, uploadPDF, isUploading }}>
      {children}
    </PDFContext.Provider>
  );
}

export function usePDF() {
  const context = useContext(PDFContext);
  if (context === undefined) {
    throw new Error('usePDF must be used within a PDFProvider');
  }
  return context;
}
