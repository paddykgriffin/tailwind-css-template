import Metadata from "next";
import React from "react";
import {
  Hero,
  Background,
  Content,
  Title,
  SubTitle,
  ScrollIcon,
} from "@/components/common/Hero/Hero"; // Importing separately

import About from "@/components/custom/About/About";
import Contact from "@/components/custom/Contact/Contact";
import LatestWork from "@/components/custom/LatestWork/Work";
import What from "@/components/custom/WhatWeDo/What";

// Here we define the metadata for the page
export const metadata: typeof Metadata = {
  title: "Home Page",
  description: "Homepage SEO content...",
};

export default function HomePage() {
  return (
    <>
      <Hero>
        <Background type="img" src="/images/hero.png" />
        <Content className="items-center text-center">
          <Title className="m-5 uppercase text-white">
            Are you a growing company?
          </Title>
          <SubTitle className="m-5 text-white">
            we can provide the right website for you to match your needs
          </SubTitle>
        </Content>
        <ScrollIcon align="center" />
      </Hero>
      <About />
      <What />
      <LatestWork />
      <Contact />
    </>
  );
}
