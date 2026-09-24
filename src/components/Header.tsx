"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin, GraduationCap, School, BookOpen, ClipboardList, Users, Images } from "lucide-react";
import { site } from "@/data/site";
import { useLanguage } from "./LanguageProvider";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const t = (hi: string, en: string) => language === "hi" ? hi : en;

  const nav = [
    ["/", "मुख्य पृष्ठ", "Home", School],
    ["/about", "हमारे बारे में", "About Us", Users],
    ["/#academics", "शैक्षणिक व्यवस्था", "Academics", BookOpen],
    ["/pravesh-soochna", "प्रवेश सूचना", "Admission", ClipboardList],
    ["/#student-life", "छात्र जीवन", "Student Life", GraduationCap],
    ["/gallery", "गैलरी", "Gallery", Images],
    ["/contact", "संपर्क करें", "Contact", Phone]
  ] as const;

  return (
    <>
      <div className="topbar">
              <div className="container topbar-inner">
                <div className="top-contact">
        <span className="top-email">
          <Mail size={14} />
          {site.email}
        </span>

        <div className="top-phones">
          {site.phone.split(",").map((phone) => (
            <span key={phone.trim()}>
              <Phone size={14} />
              {phone.trim()}
            </span>
          ))}
        </div>

        <span className="top-location">
          <MapPin size={14} />
          {t(site.locationHi, site.locationEn)}
        </span>
      </div>
          <div className="top-links">
            <Link href="/#students">{t("छात्र/अभिभावक", "Students / Parents")}</Link>
            <Link href="/#staff">{t("शिक्षक/कर्मचारी", "Teachers / Staff")}</Link>
            <Link href="/#alumni">{t("पूर्व छात्र", "Alumni")}</Link>
            <div className="language-switcher">
              <button className="language-button" onClick={() => setLanguage(language === "hi" ? "en" : "hi")}>
                {language === "hi" ? "🇮🇳 हिंदी" : "🇬🇧 English"} <span>▾</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container brand-row">
          <Link href="/" className="brand">
            <img src="/images/logo.png" alt="School logo" />
            <div className="brand-text">
              <h1>{t(site.nameHi, site.nameEn)}</h1>
              <h2>{t(site.locationHi, site.locationEn)}</h2>
              <div className="school-code">{t("विद्यालय कोड", "School Code")} - {site.code}</div>
            </div>
          </Link>
          <Link href="/pravesh-soochna" className="admission-cta">
            <strong><GraduationCap size={21} /> {t("प्रवेश जानकारी", "Admission Information")}</strong>
            <small>{t("उज्ज्वल भविष्य की ओर...", "Towards a bright future...")}</small>
          </Link>
        </div>
      </header>

      <nav className="navbar">
        <div className="container nav-inner">
          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${open ? "open" : ""}`}>
            {nav.map(([href, hi, en, Icon]) => (
              <Link href={href} key={href} onClick={() => setOpen(false)}>
                <Icon size={19} strokeWidth={2.2} />
                <span>{t(hi, en)}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
