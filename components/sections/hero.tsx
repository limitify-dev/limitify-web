// components/sections/hero.tsx

import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { EmailForm } from "@/components/ui/email-form";
import kigaliCity from "@/assets/kigali-city.png";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-190 overflow-hidden bg-[#07111d] md:min-h-225">
      <Image
        src={kigaliCity}
        alt="Kigali's modern skyline at dusk"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[64%_center] md:object-center"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,8,14,1)_0%,rgba(3,8,14,0.95)_34%,rgba(3,8,14,0.64)_68%,rgba(3,8,14,0.46)_100%)] md:bg-[linear-gradient(90deg,rgba(3,8,14,0.99)_0%,rgba(3,8,14,0.91)_32%,rgba(3,8,14,0.54)_67%,rgba(3,8,14,0.38)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,10,18,0.88)_0%,rgba(4,10,18,0.16)_30%,rgba(4,9,15,0.22)_55%,rgba(10,10,10,0.72)_82%,var(--bg)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,black,transparent_62%)]"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col justify-end px-5 pb-10 pt-32 sm:px-8 md:pb-14 md:pt-40 lg:px-4">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
            <MapPin
              aria-hidden="true"
              className="size-3.5 shrink-0 text-[#ffca79] drop-shadow-[0_0_6px_rgba(255,202,121,0.7)]"
            />
            Kigali, Rwanda
          </div>

          <h1 className="max-w-3xl text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.91] tracking-[-0.055em] text-white text-balance">
            <span data-cursor-line className="block">Build software,</span>
            <span data-cursor-line className="block opacity-[0.68]">
              the efficient way.
            </span>
          </h1>

          <div className="mt-8 flex max-w-2xl flex-col gap-7 md:mt-10">
            <p className="max-w-xl text-sm leading-7 text-white/68 sm:text-base">
              Focused design and engineering for startups and growing teams
              that value clarity, momentum, and software built to last.
            </p>
            <EmailForm />
          </div>
        </div>

        <div className="mt-14 flex items-end justify-between gap-6 pt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50 md:mt-20">
          <a
            href="#intro"
            className="hidden items-center gap-2 text-white/70 transition-colors hover:text-white sm:flex"
          >
            Explore our approach
            <ArrowDownRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
