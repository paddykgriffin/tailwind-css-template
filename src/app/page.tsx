import { Hero } from "@/components/Hero";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <>
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
    </>
  );
}
