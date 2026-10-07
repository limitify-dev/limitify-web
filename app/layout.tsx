import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

const aquire = localFont({
  src: "../assets/fonts/aquire/Aquire.otf",
  variable: "--font-aquire",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Limitify · Software Agency",
  description: "Limitify is a software agency that specializes in building high-quality web applications and digital products. We help businesses and individuals bring their ideas to life by providing expert development, design, and consulting services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${aquire.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg">
        <CustomCursor />
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
