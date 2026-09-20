import Link from "next/link";
import { Download, FileText } from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PraveshSoochnaPage() {
  return (
    <>
      <Header />

      <main className="admission-notice-page">
        <div className="container">

          {/* Page Header */}
          <div className="admission-notice-header">
            <div className="admission-notice-title">
              <FileText size={28} />

              <div>
                <h1>प्रवेश सूचना</h1>
                <p>Admission Notice</p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/documents/pravesh-soochna.pdf"
              download
              className="notice-btn primary"
            >
              <Download size={17} />
              PDF डाउनलोड करें
            </a>
          </div>

          {/* PDF Viewer — Same Page */}
          <div className="pdf-viewer-card">
            <iframe
              src="/documents/pravesh-soochna.pdf"
              title="प्रवेश सूचना"
              className="pdf-viewer"
            />
          </div>

          {/* Back */}
          <div className="notice-back">
            <Link href="/">
              ← मुख्य पृष्ठ पर वापस जाएँ
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}