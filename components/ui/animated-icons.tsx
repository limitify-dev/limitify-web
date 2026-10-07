type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function WebIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <g className="icon-float">
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 9h18" />
        <circle className="icon-pulse" cx="6" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="8.2" cy="6.5" r="0.4" fill="currentColor" />
        <path className="icon-draw" pathLength={1} d="M7 13h6" />
        <path className="icon-draw icon-draw-delay" pathLength={1} d="M7 16.5h10" />
      </g>
    </svg>
  );
}

export function MobileIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <g className="icon-buzz">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18.5h2" />
        <circle className="icon-ring" cx="12" cy="8.5" r="1.4" strokeWidth={1} />
        <circle className="icon-pulse" cx="12" cy="8.5" r="1.4" fill="currentColor" stroke="none" />
        <path className="icon-draw" pathLength={1} d="M10 13h4" />
      </g>
    </svg>
  );
}

export function BotIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <g className="icon-float">
        <rect x="4.5" y="8.5" width="15" height="11" rx="3" />
        <path d="M12 8.5V5.5" />
        <circle className="icon-ring" cx="12" cy="4" r="1.1" strokeWidth={1} />
        <circle className="icon-pulse" cx="12" cy="4" r="1.1" fill="currentColor" stroke="none" />
        <circle className="icon-blink" cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
        <circle className="icon-blink" cx="15" cy="14" r="1.2" fill="currentColor" stroke="none" />
        <path className="icon-wiggle" d="M2.5 13v2.5" />
        <path className="icon-wiggle icon-wiggle-alt" d="M21.5 13v2.5" />
      </g>
    </svg>
  );
}