 "use client";

import Image from "next/image";
import Link from "next/link";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { galleryItems } from "@/data/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function GalleryPage() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const item = selected === null ? null : galleryItems[selected];

  return <><Header /><main>
    <section className="page-hero"><div className="container"><h1>{language === "hi" ? "विद्यालय गैलरी" : "School Gallery"}</h1><p>{language === "hi" ? "विद्यालय की गतिविधियों, परिसर और यादगार पलों की झलकियाँ" : "A glimpse of school activities, campus and memorable moments"}</p></div></section>
    <section className="section inner-section"><div className="container">
      <div className="section-title"><Images /><h2>{language === "hi" ? "सभी तस्वीरें" : "All Photos"}</h2></div>
      <div className="gallery-page-grid">{galleryItems.map((g,i)=><button className="gallery-card" key={g.id} onClick={()=>setSelected(i)}><Image src={g.image} alt={language==="hi"?g.titleHi:g.titleEn} width={600} height={400}/><span>{language==="hi"?g.titleHi:g.titleEn}</span></button>)}</div>
    </div></section>
  </main>
  {item && <div className="lightbox" onClick={()=>setSelected(null)}><button onClick={e=>{e.stopPropagation();setSelected((selected! - 1 + galleryItems.length)%galleryItems.length)}}><ChevronLeft /></button><div className="lightbox-image" onClick={e=>e.stopPropagation()}><Image src={item.image} alt="" width={1400} height={900}/></div><button onClick={e=>{e.stopPropagation();setSelected((selected! + 1)%galleryItems.length)}}><ChevronRight /></button><button className="lightbox-close" onClick={()=>setSelected(null)}><X /></button></div>}
  <Footer /></>;
}
