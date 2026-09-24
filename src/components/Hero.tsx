"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Users, ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "@/data/site";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(v => (v + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="hero">
      {heroSlides.map((item, index) => (
        <div key={item.id} className={`hero-slide ${index === current ? "active" : ""}`}>
          <Image src={item.image} alt="" fill priority={index === 0} sizes="100vw" />
        </div>
      ))}
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-kicker">{language === "hi" ? slide.kickerHi : slide.kickerEn}</p>
        <h2>{language === "hi" ? slide.titleHi : slide.titleEn}</h2>
        <p>{language === "hi" ? slide.textHi : slide.textEn}</p>
        <div className="hero-actions">
          <Link href="/pravesh-soochna" className="btn btn-red"><ClipboardList size={18} /> {language === "hi" ? "प्रवेश सूचना" : "Admission"}</Link>
          <Link href="/about" className="btn btn-white"><Users size={18} /> {language === "hi" ? "हमारे बारे में" : "About Us"}</Link>
        </div>
      </div>
      <button className="hero-arrow prev" onClick={() => setCurrent((current - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous"><ChevronLeft /></button>
      <button className="hero-arrow next" onClick={() => setCurrent((current + 1) % heroSlides.length)} aria-label="Next"><ChevronRight /></button>
      <div className="dots">
        {heroSlides.map((item, index) => <button key={item.id} className={index === current ? "active" : ""} onClick={() => setCurrent(index)} aria-label={`Slide ${index + 1}`} />)}
      </div>
    </section>
  );
}
