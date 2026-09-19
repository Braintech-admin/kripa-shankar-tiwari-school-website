import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "कृपा शंकर तिवारी उच्चतर माध्यमिक विद्यालय",
  description: "कृपा शंकर तिवारी उच्चतर माध्यमिक विद्यालय, भगवा-प्रतापगढ़ (उ.प्र.)"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
