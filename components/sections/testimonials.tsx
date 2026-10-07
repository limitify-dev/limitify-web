// components/sections/testimonials.tsx
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  { name: "John Smith", role: "CEO of Chatbushape", date: "03 January 2024", quote: "Limitify has been instrumental in transforming our online presence. Their team's expertise in web development and design resulted in a visually stunning and user-friendly platform. Our online sales have skyrocketed, and we couldn't be happier." },
  { name: "Jason Williams", role: "Sales Director at CRM", date: "16 January 2024", quote: "Our website was slow and buggy, costing us sales. They fixed the code, optimized everything, and now it's blazing fast and converting like crazy. We're ecstatic!" },
  { name: "Mark Thompson", role: "CEO of Event Masters", date: "03 January 2024", quote: "They developed a comprehensive booking and reservation system for our event management company. Their attention to detail and commitment to delivering a robust platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences." },
  { name: "Michael Anderson", role: "Founder of Dreams", date: "03 January 2024", quote: "Our website was sluggish and full of glitches, causing us to lose sales. They completely overhauled the code, optimized everything, and now it's lightning-fast and converting exceptionally well. We're absolutely thrilled!" },
  { name: "Mark Thompson", role: "CEO of Event Masters", date: "03 January 2024", quote: "They played a pivotal role in revolutionizing our online presence. Their proficiency in web development and design led to a visually impressive and easy-to-navigate e-commerce platform. Our online sales have surged, and we couldn't be more ecstatic!" },
  { name: "Jason Williams", role: "Sales Director at CRM", date: "16 January 2024", quote: "Our website was slow and buggy, costing us sales. They fixed the code, optimized everything, and now it's blazing fast and converting like crazy. We're ecstatic!" },
];

const portraits: Record<string, string> = {
  "John Smith": "/images/portrait-john.webp",
  "Jason Williams": "/images/portrait-jason.webp",
  "Mark Thompson": "/images/portrait-mark.webp",
  "Michael Anderson": "/images/portrait-michael.webp",
};

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 md:py-28">
      <SectionHeading label="Testimonials">What our clients say about us</SectionHeading>

      <div className="mt-14 gap-5 md:columns-3">
        {items.map((t, i) => (
          <Card key={i} className="mb-5 break-inside-avoid p-6">
            <div className="flex items-center gap-3">
              <Image
                src={portraits[t.name]}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full border-2 border-accent ring-2 ring-glow/50 object-cover"
              />
              <div>
                <p className="text-xs">{t.name}</p>
                <p className="text-[10px] text-muted">{t.role}</p>
              </div>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-muted">{t.quote}</p>
            <p className="mt-4 text-[10px] text-muted">{t.date}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}