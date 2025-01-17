import React from "react";
import { Background, Hero } from "@/components/common/Hero/Hero";
import { Section } from "@/components/layouts/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
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
          subPageHero
          hideTransparentLayer
        />
      </Hero>

      <Section>
        <div className="grid items-center gap-4 border-b border-gray-300 pb-12">
          <Typography
            variant="h1"
            className="text-center text-black dark:text-white"
          >
            {metadata.title}
          </Typography>
          <Typography
            variant={"body1"}
            className="col-start-1 col-end-3 leading-[2.5rem] dark:text-white"
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

        <div className="mt-12 grid grid-cols-3 gap-12 lg:px-24">
          <div className="panel shadow-lg drop-shadow-xl">
            <Image
              className=""
              src="/images/img_cta_whatwedone.jpg"
              alt="sample image"
              width={500}
              height={100}
            />
            <div className="bg-black/80 p-4 dark:bg-white/20">
              <Typography variant="h4" className="text-white">
                What We&lsquo;ve Done
              </Typography>
              <Link
                href="/what-weve-done"
                className="block text-white transition-all duration-500 hover:translate-x-5"
              >
                Check out our past work
                <FaAngleRight className="inline-block" />
              </Link>
            </div>
          </div>
          <div className="panel shadow-lg drop-shadow-xl">
            <Image
              className=""
              src="/images/img_cta_contact.jpg"
              alt="sample image"
              width={500}
              height={100}
            />
            <div className="bg-black/80 p-4 dark:bg-white/20">
              <Typography variant="h4" className="text-white">
                Contact Us
              </Typography>
              <Link
                href="/what-weve-done"
                className="block text-white transition-all duration-500 hover:translate-x-5"
              >
                Call Us Today for a quote
                <FaAngleRight className="inline-block" />
              </Link>
            </div>
          </div>
          <div className="panel shadow-lg drop-shadow-xl">
            <Image
              className=""
              src="/images/img_cta_vacancies.jpg"
              alt="sample image"
              width={500}
              height={100}
            />
            <div className="bg-black/80 p-4 dark:bg-white/20">
              <Typography variant="h4" className="text-white">
                Vacancies
              </Typography>
              <Link
                href="/what-weve-done"
                className="block text-white transition-all duration-500 hover:translate-x-5"
              >
                See what jobs are available
                <FaAngleRight className="inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
