"use client";

import { Button } from "@/components/common/Button/Button";
import { Hero } from "@/components/common/Hero/Hero";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home Page",
//   description: "Homepage SEO content...",
// };

function Home() {
  return (
    <Hero id="hero">
      <Hero.Background type="img" src="https://picsum.photos/1920/960" />
      <Hero.Content className="items-center text-center">
        <Hero.Title className="m-5 uppercase text-white">
          Are you a growing company?
        </Hero.Title>
        <Hero.SubTitle className="m-5 text-white">
          we can provide the right website for you to match your needs
        </Hero.SubTitle>
        <div className="mt-6 flex justify-center gap-4">
          <Button size={"large"} href="https://www.google.com" target="_blank" className="rounded-[6px]">
            Learn more
          </Button>

          {/* <Button
            size={"large"}
            href="https://www.google.com"
            target="_blank"
            className="bg-secondary hover:bg-secondary/80 text-white"
          >
            Secondary
          </Button> */}
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default Home;
