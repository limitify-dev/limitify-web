import { BotIcon, MobileIcon, WebIcon } from "@/components/ui/animated-icons";

const items = [
  {
    icon: WebIcon,
    title: "Web platforms",
    text: "SaaS products and B2B systems built around how your business actually runs.",
  },
  {
    icon: MobileIcon,
    title: "Mobile apps",
    text: "Cross-platform apps your customers and staff will really use.",
  },
  {
    icon: BotIcon,
    title: "AI integration",
    text: "Practical automation added to the tools you already have.",
  },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-3 md:gap-14">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <div className="flex h-11 w-11 items-center justify-center text-accent-text">
              <Icon className="h-20 w-20" />
            </div>
            <h3 className="mt-5 text-lg font-light md:text-xl">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}