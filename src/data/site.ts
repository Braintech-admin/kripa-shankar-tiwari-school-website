export const site = {
  nameHi: "कृपा शंकर तिवारी उच्चतर माध्यमिक विद्यालय",
  nameEn: "Kripa Shankar Tiwari Higher Secondary School",
  locationHi: "भगवा-प्रतापगढ़ (उ.प्र.)",
  locationEn: "Bhagwa-Pratapgarh (U.P.)",
  code: "1304",
  establishmentYear: "2009",
  email: "abhishektiwari1018@gmail.com",
  phone: "+91 9196109206, +91 9935827476",
  addressHi: "भगवा-प्रतापगढ़, उत्तर प्रदेश - 230001",
  addressEn: "Bhagwa-Pratapgarh, Uttar Pradesh",
  mapQuery: "Kripa Shankar Tiwari Higher Secondary School, Bhagwa, Pratapgarh, Uttar Pradesh"
};

export const heroSlides = [
  {
    id: 1,
    image: "/images/hero/hero-1.png",
    kickerHi: "गुणवत्तापूर्ण शिक्षा",
    kickerEn: "Quality Education",
    titleHi: "उज्ज्वल भविष्य की नींव",
    titleEn: "Building a Bright Future",
    textHi: "अनुशासन, संस्कार और उत्कृष्ट शिक्षा के साथ विद्यार्थियों के सर्वांगीण विकास के लिए समर्पित",
    textEn: "Dedicated to the all-round development of students through discipline, values and quality education"
  },
  {
    id: 2,
    image: "/images/hero/hero-2.png",
    kickerHi: "हमारा विद्यालय",
    kickerEn: "Our School",
    titleHi: "सीखने के लिए बेहतर वातावरण",
    titleEn: "A Better Environment to Learn",
    textHi: "आधुनिक सुविधाओं और संस्कारयुक्त वातावरण के साथ गुणवत्तापूर्ण शिक्षा",
    textEn: "Quality education supported by modern facilities and a values-based environment"
  },
  {
    id: 3,
    image: "/images/hero/hero-3.png",
    kickerHi: "शिक्षा और संस्कार",
    kickerEn: "Education & Values",
    titleHi: "ज्ञान से आत्मविश्वास तक",
    titleEn: "From Knowledge to Confidence",
    textHi: "हर विद्यार्थी की प्रतिभा को पहचानकर उसके उज्ज्वल भविष्य की दिशा में प्रयास",
    textEn: "Nurturing every student's potential and guiding them toward a bright future"
  }
];

export const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,

  // Image priority: PNG → JPG → JPEG → SVG
  image: `/images/gallery/gallery-${i + 1}.png`,

  titleHi: [
    "विद्यालय प्रवेश द्वार",
    "विद्यालय भवन",
    "विशेष कार्यक्रम",
    "सांस्कृतिक कार्यक्रम",
    "कक्षा कक्ष",
    "खेलकूद गतिविधि",
    "विज्ञान प्रयोगशाला",
    "विद्यार्थी गतिविधि",
    "विद्यालय परिसर",
    "शैक्षणिक गतिविधि",
    "विद्यालय समारोह",
    "प्रार्थना सभा",
  ][i],

  titleEn: [
    "School Entrance",
    "School Building",
    "Classroom",
    "Science Laboratory",
    "Student Activity",
    "School Campus",
    "Academic Activity",
    "Cultural Programme",
    "Sports Activity",
    "School Event",
    "Morning Assembly",
    "Special Programme",
  ][i],
}));

export const features = [
  { icon: "book", titleHi: "गुणवत्तापूर्ण शिक्षा", titleEn: "Quality Education", textHi: "अनुभवी एवं समर्पित शिक्षकों द्वारा अध्यापन", textEn: "Learning guided by experienced and dedicated teachers", tone: "red" },
  { icon: "flask", titleHi: "विज्ञान एवं कंप्यूटर शिक्षा", titleEn: "Science & Computer Education", textHi: "आधुनिक प्रयोगशालाएँ एवं डिजिटल सुविधाएँ", textEn: "Modern laboratories and digital facilities", tone: "blue" },
  { icon: "users", titleHi: "अनुशासन एवं संस्कार", titleEn: "Discipline & Values", textHi: "नैतिक मूल्यों पर आधारित शिक्षा व्यवस्था", textEn: "Education rooted in discipline and values", tone: "yellow" },
  { icon: "trophy", titleHi: "खेलकूद एवं सांस्कृतिक गतिविधियाँ", titleEn: "Sports & Cultural Activities", textHi: "शारीरिक और मानसिक विकास के लिए विविध अवसर", textEn: "Opportunities for physical and mental development", tone: "green" }
];

export const stats = [
  { value: "500+", labelHi: "वर्तमान छात्र", labelEn: "Current Students", icon: "users" },
  { value: "20+", labelHi: "अनुभवी शिक्षक", labelEn: "Experienced Teachers", icon: "user" },
  { value: "100%", labelHi: "परीक्षा परिणाम (गत वर्ष)", labelEn: "Exam Result (Last Year)", icon: "graduation" },
  { value: "25+", labelHi: "वार्षिक गतिविधियाँ", labelEn: "Annual Activities", icon: "trophy" }
];

export const messages = {
  principal: {
    nameHi: "निवेदिता तिवारी",
    nameEn: "Nivedita Tiwari",
    roleHi: "प्रधानाचार्य",
    roleEn: "Principal",
    image: "/images/principal.png",
    hi: "प्रिय विद्यार्थियों, शिक्षा केवल ज्ञान अर्जित करने का माध्यम नहीं, बल्कि जीवन निर्माण की आधारशिला है। हमारा प्रयास है कि विद्यालय में सुरक्षित, अनुशासित और प्रेरणादायक वातावरण में आप सभी के सर्वांगीण विकास हेतु समर्पित शिक्षा और संस्कार प्रदान किए जाएँ। आप सपने देखें, मेहनत करें और अपने लक्ष्यों को प्राप्त करने के लिए सदैव सकारात्मक रहें। विद्यालय परिवार सदैव आपके साथ है।",
    en: "Dear students, education is not merely a means of acquiring knowledge; it is the foundation of building a meaningful life. Our endeavour is to provide education and values in a safe, disciplined and inspiring environment for your all-round development. Dream, work hard and stay positive as you pursue your goals. The school family is always with you."
  },
  manager: {
    nameHi: "ज्ञानेश तिवारी",
    nameEn: "Gyanesh Tiwari",
    roleHi: "प्रबंधक",
    roleEn: "Manager",
    image: "/images/manager.png",
    hi: "प्रिय विद्यार्थियों, अभिभावकों एवं सम्मानित अतिथिगण, शिक्षा ही वह शक्ति है जो समाज और राष्ट्र के विकास का मार्ग प्रशस्त करती है। हमारा संकल्प है कि विद्यालय में बेहतर शैक्षणिक सुविधाएँ, अनुशासन, संस्कार और सकारात्मक वातावरण उपलब्ध कराया जाए, ताकि प्रत्येक विद्यार्थी अपने लक्ष्य तक पहुँचे और समाज व देश का जिम्मेदार नागरिक बने। आप सभी का सहयोग और विश्वास हमारे लिए प्रेरणा है।",
    en: "Dear students, parents and respected guests, education is the force that opens the path to the development of society and the nation. Our commitment is to provide better academic facilities, discipline, values and a positive environment so that every student can reach their goals and become a responsible citizen. Your support and trust inspire us."
  }
};
