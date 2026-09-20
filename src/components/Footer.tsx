import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <img
            className="footer-logo"
            src="/images/logo.png"
            alt="School logo"
          />

          <div>
            <strong>{site.nameHi}</strong>
            <span>{site.locationHi}</span>
            <span>विद्यालय कोड - {site.code}</span>
            <span>ज्ञान • संस्कार • अनुशासन</span>
          </div>
        </div>

        <div>
          <h3>त्वरित लिंक</h3>
          <Link href="/">मुख्य पृष्ठ</Link>
          <Link href="/#about">हमारे बारे में</Link>
          <Link href="/#academics">शैक्षणिक व्यवस्था</Link>
          <Link href="/pravesh-soochna">प्रवेश सूचना</Link>
          <Link href="/gallery">गैलरी</Link>
        </div>

        <div>
          <h3>अन्य लिंक</h3>
          <Link href="/#student-life">छात्र जीवन</Link>
          <Link href="/#staff">शिक्षक/कर्मचारी</Link>
          <Link href="/#alumni">पूर्व छात्र</Link>
        </div>

        <div>
          <h3>संपर्क जानकारी</h3>
          <span>
            <MapPin /> {site.addressHi}
          </span>
          <a href={`tel:${site.phone}`}>
            <Phone /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail /> {site.email}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>
            © 2026 {site.nameHi} • सर्वाधिकार सुरक्षित
          </span>

          <span className="braintech-credit">
            Designed with ❤️ for Education By{" "}
            <a
              href="https://itsbraintech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="braintech-link"
            >
              Braintech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}