import React from "react";
import { Background, Hero } from "@/components/common/Hero/Hero";
import { Section } from "@/components/layouts/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { PanelData } from "@/components/custom/About/data";

export const metadata = {
  title: "About Us",
  description: "We are a team of talented developers and designers.",
};

export default function AboutPage() {
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

      <Section>
        <div className="flex flex-col gap-4 border-b border-gray-300 pb-12 lg:grid lg:items-center">
          <Typography
            variant="h1"
            className="pb-6 text-center text-black sm:text-left md:pb-0 dark:text-white"
          >
            {metadata.title}
          </Typography>
          <Typography
            variant={"body1"}
            className="col-start-1 col-end-3 text-center leading-[2.5rem] md:text-left dark:text-white"
          >
            Amet ad tempor fugiat amet dolor id enim sint ut occaecat cillum
            sint commodo deserunt. Sunt cupidatat duis ut ex esse incididunt
            deserunt est ipsum labore pariatur. Enim ea in eiusmod incididunt
            nostrud qui nisi exercitation. Est aute mollit nulla cupidatat elit
            qui nostrud reprehenderit labore cupidatat. Nulla enim quis
            reprehenderit mollit sit ipsum voluptate excepteur enim pariatur
            esse. Excepteur cillum velit aliqua et eiusmod dolore officia
            pariatur nulla laboris fugiat. Dolore Lorem adipisicing aliquip
            dolore cillum qui incididunt eu.
          </Typography>
          <Image
            className="col-start-8 col-end-12"
            src="/images/img_sample.jpg"
            alt="sample image"
            width={500}
            height={100}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 xl:px-24">
          {PanelData.map((item, i) => (
            <div className="panel shadow-lg drop-shadow-xl" key={i}>
              <Image
                className=""
                src={item.image}
                alt="sample image"
                width={500}
                height={100}
              />
              <div className="bg-black/80 p-4 dark:bg-white/20">
                <Typography
                  variant="h4"
                  className="pb-2 text-2xl text-white md:text-xl"
                >
                  {item.title}
                </Typography>
                <Link
                  href={item.linkHref}
                  className="block text-lg text-white transition-all duration-500 hover:translate-x-5 md:text-base"
                >
                  {item.linkLabel}
                  <FaAngleRight className="inline-block" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
