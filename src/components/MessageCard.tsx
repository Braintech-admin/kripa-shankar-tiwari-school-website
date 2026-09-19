import Image from "next/image";
import { Quote, UserRound } from "lucide-react";
import type { messages } from "@/data/site";

type Message = typeof messages.principal;

export function MessageCard({ data, language, tone }: { data: Message; language: "hi" | "en"; tone: "principal" | "manager" }) {
  return (
    <article className={`message-card ${tone}`}>
      <div className="message-heading">
        <UserRound size={30} />
        <h2>{language === "hi" ? data.roleHi : data.roleEn}</h2>
      </div>
      <div className="message-body">
        <div className="person">
          <div className="person-image"><Image src={data.image} alt={language === "hi" ? data.nameHi : data.nameEn} width={160} height={175} /></div>
          <h3>{language === "hi" ? data.nameHi : data.nameEn}</h3>
          <small>({language === "hi" ? data.roleHi : data.roleEn})</small>
        </div>
        <div className="quote">
          <Quote className="quote-icon" size={45} />
          <p>{language === "hi" ? data.hi : data.en}</p>
          <strong>— {language === "hi" ? data.nameHi : data.nameEn}</strong>
          <small>{language === "hi" ? data.roleHi : data.roleEn}</small>
        </div>
      </div>
    </article>
  );
}
