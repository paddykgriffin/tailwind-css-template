import React from "react";
import { Background, Hero } from "@/components/common/Hero/Hero";
import { Section } from "@/components/layouts/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import { ServicesData } from "@/components/custom/WhatWeDo/data-services";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "What we do",
  description: "We have a wide range of services.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Hero>
        <Background
          type="img"
          src="/images/subpageheader.png"
          srcMobile="/images/hero-subpage-mobile.png"
          subPageHero
        />
      </Hero>
      <Section className="pb-0">
        <Typography variant="h1" className="pb-12 text-center">
          {metadata.title}
        </Typography>
        <Typography
          variant="body1"
          className="leading-12 text-center text-3xl font-extralight tracking-wide"
        >
          We provide a wide{" "}
          <span className="font-semibold text-secondary dark:text-secondary">
            range of services,
          </span>{" "}
          see below some of the
          <br />
          main areas we provide in.
        </Typography>
        <div className="py-12">
          {ServicesData.map((item, i) => (
            <div
              key={i}
              className="border-b border-gray-300 py-12 last:border-0"
            >
              <div
                className={cn("grid md:auto-cols-auto md:grid-flow-col items-center")}
              >
                <div
                  className={cn(
                    "",
                    item.alignClass === true ? "md:order-2" : "md:order-1",
                  )}
                >
                  <Typography
                    variant={"h2"}
                    className="text-primary dark:text-white"
                  >
                    {item.title}
                  </Typography>
                  {item.content.map((content, i) => (
                    <Typography
                      variant={"body1"}
                      key={i}
                      className="mb-4 leading-loose"
                    >
                      {content}
                    </Typography>
                  ))}
                </div>

                <div
                  className={cn(
                    "",
                    item.alignClass === true
                      ? "md:order-1 md:pr-[60px]"
                      : "md:order-2 flex justify-end md:pl-[60px]",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={466}
                    height={100}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
