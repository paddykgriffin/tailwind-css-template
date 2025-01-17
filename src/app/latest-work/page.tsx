import React from "react";
import { Background, Hero } from "@/components/common/Hero/Hero";
import { Section } from "@/components/layouts/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import { ProjectsData } from "@/components/custom/Home/data/data-work";
import Image from "next/image";
export const metadata = {
  title: "Our Latest Work",
  description: "Check out our latest work.",
};

export default function LatestWorkPage() {
  return (
    <>
      <Hero>
        <Background
          type="img"
          src="/images/subpageheader.png"
          subPageHeight
          hideTransparentLayer
        />
      </Hero>
      <Section>
        <Typography
          variant="h1"
          className="text-center text-black dark:text-white"
        >
          {metadata.title}
        </Typography>

        <div className="grid grid-cols-2 gap-6 py-12">
          {ProjectsData.map((item, i) => (
            <div key={i}>
              <Image
                src={item.image}
                width={264}
                height={100}
                alt={item.title}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography variant="h3" className="pt-4 dark:text-white">
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-500 dark:text-white"
              >
                {item.subtitle}
              </Typography>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
