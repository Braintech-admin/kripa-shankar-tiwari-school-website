import { Mail, MapPin, Phone, School } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export default function ContactPage() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  return <><Header /><main>
    <section className="page-hero"><div className="container"><h1>संपर्क करें</h1><p>विद्यालय से संपर्क करने के लिए नीचे दी गई जानकारी का उपयोग करें।</p></div></section>
    <section className="section inner-section"><div className="container"><div className="contact-page-grid">
      <div className="contact-card">
        <div className="contact-item"><div><MapPin /></div><section><h3>विद्यालय का पता</h3><p>{site.addressHi}</p></section></div>
        <div className="contact-item"><div><Phone /></div><section><h3>फोन</h3><a href={`tel:${site.phone}`}>{site.phone}</a></section></div>
        <div className="contact-item"><div><Mail /></div><section><h3>ईमेल</h3><a href={`mailto:${site.email}`}>{site.email}</a></section></div>
        <div className="contact-item"><div><School /></div><section><h3>विद्यालय कोड</h3><p>{site.code}</p></section></div>
      </div>
      <div className="map-card"><iframe src={map} title="School location" loading="lazy" allowFullScreen /></div>
    </div></div></section>
  </main><Footer /></>;
}
