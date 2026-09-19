import type { LucideIcon } from "lucide-react";

export function SectionTitle({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return <div className="section-title"><Icon size={34} /><h2>{title}</h2></div>;
}
