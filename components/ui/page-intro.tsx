import { SectionLabel } from "@/components/ui/section-heading";

type PageIntroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageIntro({ label, title, description }: PageIntroProps) {
  return (
    <section className="px-4 pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}