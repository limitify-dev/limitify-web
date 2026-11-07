import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolio, portfolios } from "@/data/portfolio";
import { PortfolioView } from "@/components/portfolio/portfolio-view";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolios.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = getPortfolio(slug);
  if (!portfolio) return {};
  return {
    title: `${portfolio.name} · Portfolio · Limitify`,
    description: portfolio.tagline,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { slug } = await params;
  const portfolio = getPortfolio(slug);
  if (!portfolio) notFound();
  return <PortfolioView portfolio={portfolio} />;
}
