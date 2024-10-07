import Image from "next/image";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero className="hero" variant="default" size="lg" title="Are you in Need?" subTitle="Lorem ipsum" btnLabel="Learn More" backgroundImage="/images/hero.png"  />
      main page...
    </div>
  );
}
