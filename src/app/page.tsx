import { Hero } from "@/components/Hero";
import Welcome from "@/components/home/Welcome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Homepage SEO content...",
};

export default async function Home() {
  return (
    <main className="h-auto w-full flex-1">
      <Hero
        className="hero"
        variant="default"
        size="lg"
        title="Are you in Need?"
        subTitle="Lorem ipsum"
        btnLabel="Learn More"
        backgroundImage="/images/hero.png"
      />
      <Welcome />
    </main>
  );
}
