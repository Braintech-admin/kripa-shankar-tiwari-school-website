"use client";

import Image from "next/image";
import Link from "next/link";
import { site, features, messages, stats, galleryItems } from "@/data/site";
import { useLanguage } from "./LanguageProvider";
import { SectionTitle } from "./SectionTitle";
import { MessageCard } from "./MessageCard";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  MapPin,
  School,
  Star,
  Users,
  BookOpen,
  FlaskConical,
  Trophy,
  UserRound,
  GraduationCap,
  Images
} from "lucide-react";

const featureIcons = { book: BookOpen, flask: FlaskConical, users: Users, trophy: Trophy };

export function HomePage() {
  const { language } = useLanguage();
  const t = (hi: string, en: string) => language === "hi" ? hi : en;

  return (
    <>
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-copy">
            <SectionTitle icon={School} title={t("हमारे विद्यालय के बारे में", "About Our School")} />
            <p>{t("कृपा शंकर तिवारी उच्चतर माध्यमिक विद्यालय, भगवा-प्रतापगढ़ क्षेत्र के विद्यार्थियों को गुणवत्तापूर्ण, अनुशासित एवं संस्कारयुक्त शिक्षा प्रदान करने के उद्देश्य से निरंतर कार्यरत है। हमारा लक्ष्य केवल शैक्षणिक उत्कृष्टता ही नहीं, बल्कि विद्यार्थियों के सर्वांगीण विकास, नैतिक मूल्यों और उज्ज्वल भविष्य का निर्माण करना है।", "Kripa Shankar Tiwari Higher Secondary School is committed to providing quality, disciplined and values-based education to students in the Bhagwa-Pratapgarh region. Our goal is not only academic excellence but also all-round development, strong values and a bright future for every student.")}</p>
            <Link href="/about" className="read-more">{t("और पढ़ें", "Read More")} <ArrowRight size={17} /></Link>
          </div>
          <div className="about-photo"><Image src="/images/school-building.png" alt="School building" width={800} height={450} /></div>
          <div className="info-card">
            <div><School /><b>{t("विद्यालय कोड", "School Code")}</b><span>{site.code}</span></div>
            <div><Building2 /><b>{t("स्थापना वर्ष", "Established")}</b><span>{site.establishmentYear}</span></div>
            <div><MapPin /><b>{t("स्थान", "Location")}</b><span>{t(site.locationHi, site.locationEn)}</span></div>
            <div><Users /><b>{t("प्रबंध प्रकार", "Management")}</b><span>{t("उच्चतर माध्यमिक विद्यालय", "Higher Secondary School")}</span></div>
            <div><CalendarDays /><b>{t("शिक्षा का माध्यम", "Medium")}</b><span>{t("हिन्दी", "Hindi")}</span></div>
            <div><BookOpen /><b>{t("संचालन", "Management Status")}</b><span>{t("शासन द्वारा मान्यता प्राप्त", "Government Recognized")}</span></div>
          </div>
        </div>
      </section>

      <section className="section messages" id="messages">
        <div className="container messages-grid">
          <MessageCard data={messages.principal} language={language} tone="principal" />
          <MessageCard data={messages.manager} language={language} tone="manager" />
        </div>
      </section>

      <section className="section features-section" id="academics">
        <div className="container">
          <div className="section-title-row">
            <SectionTitle icon={Star} title={t("हमारी विशेषताएँ", "Our Features")} />
            <p>{t("हम विद्यार्थियों को बेहतर शिक्षा, आधुनिक सुविधाएँ और सुरक्षित वातावरण प्रदान करने के लिए प्रतिबद्ध हैं।", "We are committed to providing better education, modern facilities and a safe environment.")}</p>
          </div>
          <div className="features-grid">
            {features.map(feature => {
              const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
              return <article className={`feature ${feature.tone}`} key={feature.titleHi}>
                <div className="feature-icon"><Icon /></div>
                <h3>{t(feature.titleHi, feature.titleEn)}</h3>
                <p>{t(feature.textHi, feature.textEn)}</p>
              </article>
            })}
          </div>
        </div>
      </section>

      <section className="stats"><div className="container stats-grid">
        {stats.map(stat => {
          const Icon = stat.icon === "users" ? Users : stat.icon === "user" ? UserRound : stat.icon === "graduation" ? GraduationCap : Trophy;
          return <div key={stat.value}><Icon /><strong>{stat.value}</strong><small>{t(stat.labelHi, stat.labelEn)}</small></div>
        })}
      </div></section>

      <section className="section gallery-strip">
        <div className="container">
          <div className="gallery-heading"><SectionTitle
  icon={Images}
  title={t("विद्यालय की झलकियाँ", "School Gallery")}/><Link href="/gallery">{t("सभी देखें", "View All")} <ArrowRight size={16} /></Link></div>
          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map(item => <Link href="/gallery" className="gallery-thumb" key={item.id}><Image src={item.image} alt={t(item.titleHi, item.titleEn)} width={360} height={220} /></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
