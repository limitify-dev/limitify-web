// components/ui/logo.tsx
import Image from "next/image";
import darkBackgroundLogo from "@/assets/logo_light.png";

export function Logo({ className }: { className?: string }) {
  return <Image src={darkBackgroundLogo} alt="Limitify" priority className={className} />;
}