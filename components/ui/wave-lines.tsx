import { cn } from "@/lib/utils";

const LINES = 18;      // number of lines
const WIDTH = 1200;    // viewBox width
const STEP = 100;      // horizontal length of each half-wave

function wavePath(i: number) {
  const y = 30 + i * 14;       // vertical spacing between lines
  const amp = 14 + i * 1.6;    // amplitude grows slightly for each line

  // Q + T chains give a smooth, continuous zigzag (alternating up/down curves)
  let d = `M0 ${y} Q ${STEP / 2} ${y - amp} ${STEP} ${y}`;
  for (let x = STEP * 2; x <= WIDTH; x += STEP) d += ` T ${x} ${y}`;
  return d;
}

export function WaveLines({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 w-300 max-w-none -translate-x-1/2",
        "mask-[radial-gradient(ellipse_at_50%_0%,black_20%,transparent_70%)]",
        className
      )}
    >
      <svg
        viewBox={`0 0 ${WIDTH} 300`}
        className="h-auto w-full text-glow"
        fill="none"
      >
        {Array.from({ length: LINES }, (_, i) => (
          <path
            key={i}
            d={wavePath(i)}
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="0 7"
            vectorEffect="non-scaling-stroke"
            opacity={0.15 + (i / LINES) * 0.35}
            />
        ))}
      </svg>
    </div>
  );
}