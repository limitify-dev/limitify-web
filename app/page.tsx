import { Cta } from "@/components/sections/cta";
// import { CustomerStory } from "@/components/sections/customer-story";
import { Faq } from "@/components/sections/faqs";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-we-work";
import { Intro } from "@/components/sections/intro-statement";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Features } from "@/components/sections/projects";
import { Stats } from "@/components/sections/stats";
// import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
     <Hero />
      <LogoMarquee />
      <Intro />
      <Features />
      <HowItWorks />
      {/* <CustomerStory /> */}
      <Stats />
      {/* <Testimonials /> */}
      <Faq />
      <Cta />
    </main>
  );
}
