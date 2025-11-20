
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { PDFProvider } from "./context/PDFContext.tsx";

  createRoot(document.getElementById("root")!).render(
    <PDFProvider>
      <App />
    </PDFProvider>
  );
  