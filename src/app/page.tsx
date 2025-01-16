import React from "react";
import {
  Hero,
  Background,
  Content,
  Title,
  SubTitle,
  ScrollIcon,
} from "@/components/common/Hero/Hero";

import About from "@/components/custom/About/About";
import Contact from "@/components/custom/Contact/Contact";
import LatestWork from "@/components/custom/LatestWork/Work";
import What from "@/components/custom/WhatWeDo/What";

export const metadata = {
  title: "Home Page",
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
