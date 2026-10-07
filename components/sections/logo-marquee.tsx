import Image from "next/image";
import { startups } from "@/data/startups";
const MARQUEE_MIN = 5;

const logos = startups.flatMap((startup) =>
  startup.logo === null
    ? []
    : [{ name: startup.name, src: startup.logo }],
);

const logoClass =
  "h-7 w-auto grayscale transition-[filter] duration-300 hover:grayscale-0 md:h-10";

export function LogoMarquee() {
  const animated = logos.length >= MARQUEE_MIN;
  if (startups.length === 0) {
    return null; // Return null if there are no startups to display
  }
  return (
    <section className="px-4 py-16 md:py-24">
      <h2 className="text-center text-lg font-light tracking-tight text-muted md:text-lg">
        Trusted by startups and growing businesses
      </h2>

      {animated ? (
        <div className="group relative mx-auto mt-10 max-w-6xl overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-16 pr-16"
              >
                {logos.map((logo) => (
                  <li key={logo.name} className="shrink-0">
                    <Image
                      src={logo.src}
                      alt={copy === 0 ? logo.name : ""}
                      width={200}
                      height={40}
                      style={{ width: "auto" }}
                      className={logoClass}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ) : (
        <ul className="group mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {logos.map((logo) => (
            <li key={logo.name}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={40}
                style={{ width: "auto" }}
                className={logoClass}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
