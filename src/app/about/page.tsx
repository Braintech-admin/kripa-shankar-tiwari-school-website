import Image from "next/image";
import Link from "next/link";
import { Building2, GraduationCap, MapPin, School, Users, ArrowRight } from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container">
            <h1>विद्यालय परिचय</h1>
            <p>About Our School</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="section inner-section">
          <div className="container">
            <div className="about-page-intro">
              <div className="about-page-content">
                <div className="section-title">
                  <School size={28} />
                  <h2>कृपा शंकर तिवारी उच्चतर माध्यमिक विद्यालय</h2>
                </div>

                <p>
                  कृपा शंकर तिवारी उच्चतर माध्यमिक विद्यालय, भगवा-प्रतापगढ़,
                  उत्तर प्रदेश में स्थित एक शैक्षणिक संस्थान है। विद्यालय का
                  उद्देश्य विद्यार्थियों को गुणवत्तापूर्ण शिक्षा के साथ-साथ
                  अनुशासन, संस्कार और जिम्मेदारी की भावना से विकसित करना है।
                </p>

                <p>
                  विद्यालय विद्यार्थियों के शैक्षणिक विकास के साथ उनके
                  व्यक्तित्व, नैतिक मूल्यों तथा सामाजिक जिम्मेदारियों के
                  विकास पर भी ध्यान केंद्रित करता है। हमारा प्रयास है कि
                  प्रत्येक विद्यार्थी को सीखने के लिए सकारात्मक एवं
                  प्रेरणादायक वातावरण प्राप्त हो।
                </p>

                <p>
                  वर्ष <strong>{site.establishmentYear}</strong> में स्थापित
                  विद्यालय आज भी विद्यार्थियों के उज्ज्वल भविष्य के निर्माण
                  की दिशा में निरंतर प्रयासरत है।
                </p>
              </div>

              <div className="about-page-image">
                <Image
                  src="/images/school-building.png"
                  alt="कृपा शंकर तिवारी उच्चतर माध्यमिक विद्यालय"
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Basic Information */}
        <section className="section about-basic-info">
          <div className="container">
            <div className="section-title">
              <Building2 size={28} />
              <h2>विद्यालय की मूल जानकारी</h2>
            </div>

            <div className="about-info-grid">
              <div className="about-info-card">
                <School size={26} />
                <div>
                  <h3>विद्यालय कोड</h3>
                  <p>{site.code}</p>
                </div>
              </div>

              <div className="about-info-card">
                <GraduationCap size={26} />
                <div>
                  <h3>स्थापना वर्ष</h3>
                  <p>{site.establishmentYear}</p>
                </div>
              </div>

              <div className="about-info-card">
                <MapPin size={26} />
                <div>
                  <h3>स्थान</h3>
                  <p>{site.locationHi}</p>
                </div>
              </div>

              <div className="about-info-card">
                <Users size={26} />
                <div>
                  <h3>शिक्षा का माध्यम</h3>
                  <p>हिन्दी</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objective */}
        <section className="section about-objective">
          <div className="container">
            <div className="about-objective-box">
              <div className="section-title">
                <GraduationCap size={28} />
                <h2>हमारा उद्देश्य</h2>
              </div>

              <p>
                हमारा उद्देश्य विद्यार्थियों को ऐसा शैक्षणिक वातावरण प्रदान
                करना है जिसमें वे ज्ञान, अनुशासन, आत्मविश्वास और नैतिक मूल्यों
                के साथ अपने भविष्य के लिए तैयार हो सकें।
              </p>

              <p>
                विद्यालय प्रत्येक विद्यार्थी की क्षमता और प्रतिभा को पहचानने
                तथा उसे आगे बढ़ने के लिए प्रोत्साहित करने की दिशा में
                प्रयासरत है।
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section about-features">
          <div className="container">
            <div className="section-title">
              <School size={28} />
              <h2>विद्यालय की प्रमुख विशेषताएँ</h2>
            </div>

            <div className="about-feature-grid">
              <article>
                <GraduationCap size={30} />
                <h3>गुणवत्तापूर्ण शिक्षा</h3>
                <p>
                  विद्यार्थियों के शैक्षणिक विकास के लिए व्यवस्थित एवं
                  गुणवत्तापूर्ण शिक्षा पर ध्यान।
                </p>
              </article>

              <article>
                <Users size={30} />
                <h3>अनुशासन एवं संस्कार</h3>
                <p>
                  विद्यार्थियों में अनुशासन, नैतिक मूल्यों और जिम्मेदारी की
                  भावना विकसित करने का प्रयास।
                </p>
              </article>

              <article>
                <School size={30} />
                <h3>सकारात्मक वातावरण</h3>
                <p>
                  विद्यार्थियों के सीखने और व्यक्तित्व विकास के लिए
                  सुरक्षित एवं प्रेरणादायक वातावरण।
                </p>
              </article>

              <article>
                <Building2 size={30} />
                <h3>सर्वांगीण विकास</h3>
                <p>
                  शिक्षा के साथ विद्यार्थियों के व्यक्तित्व एवं अन्य
                  गतिविधियों के विकास पर ध्यान।
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="container">
            <div>
              <h2>विद्यालय के बारे में और जानें</h2>
              <p>
                प्रवेश, विद्यालय की गतिविधियों और संपर्क संबंधी जानकारी के
                लिए हमारे अन्य पृष्ठ देखें।
              </p>
            </div>

            <div className="about-cta-actions">
              <Link href="/pravesh-soochna">
                प्रवेश सूचना
                <ArrowRight size={17} />
              </Link>

              <Link href="/contact">
                संपर्क करें
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}