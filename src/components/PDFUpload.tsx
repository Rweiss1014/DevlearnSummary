import { useRef, useState } from 'react';
import { Upload, FileText, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { usePDF } from '../context/PDFContext';

export function PDFUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { pdfContent, uploadPDF, isUploading, setPdfContent } = usePDF();
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Please select a PDF file');
      return;
    }

    setError(null);
    try {
      await uploadPDF(file);
    } catch (err) {
      setError('Failed to upload PDF. Please try again.');
    }
  };

  const handleRemovePDF = () => {
    setPdfContent(null);
    localStorage.removeItem('pdfContent');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card className="p-6 border-2 border-dashed border-[#007178]/30 bg-[#ade2e3]/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-[#007178]/10 flex items-center justify-center">
            <FileText className="w-6 h-6 text-[#007178]" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800">Knowledge Base</h3>
            <p className="text-xs text-slate-500">
              {pdfContent
                ? `PDF loaded (${Math.round(pdfContent.length / 1000)}KB)`
                : 'Upload a PDF to enhance chatbot responses'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {pdfContent ? (
            <>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <Check className="w-4 h-4" />
                <span className="text-xs">Loaded</span>
              </div>
              <Button
                onClick={handleRemovePDF}
                variant="outline"
                size="sm"
                className="text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4 mr-1" />
                Remove
              </Button>
            </>
          ) : (
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="bg-[#007178] hover:bg-[#00ae9a]"
                size="sm"
              >
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? 'Uploading...' : 'Upload PDF'}
              </Button>
            </>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-3 text-sm text-red-600 bg-red-50 p-2 rounded">
          {error}
        </div>
      )}
    </Card>
  );
}
