import React from "react";
import {
  Background,
  Hero,
  Content,
  Title,
} from "@/components/common/Hero/Hero";
import { Section } from "@/components/layouts/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";

export const metadata = {
  title: "Contact Us",
  description: "Contact us for all your needs",
};

export default function ContactPage() {
  return (
    <>
      <Hero>
        <Background type="img" src="/images/subpageheader.png" subPageHeight />
      </Hero>
      <Section>
        <Typography
          variant="h1"
          className="text-center text-black dark:text-white"
        >
          {metadata.title}
        </Typography>
      </Section>
    </>
  );
}
