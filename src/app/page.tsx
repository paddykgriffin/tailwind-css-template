import React from "react";
import {
  Hero,
  Background,
  Content,
  Title,
  SubTitle,
  ScrollIcon,
} from "@/components/common/Hero/Hero";

import About from "@/components/custom/Home/About";
import Contact from "@/components/custom/Home/Contact";
import LatestWork from "@/components/custom/Home/Work";
import What from "@/components/custom/Home/What";

export const metadata = {
  title: "Home Page",
  description:
    "We are talented agency that can provide the right website for you to match your needs",
};

export default function HomePage() {
  return (
    <>
      <Hero>
        <Background
          type="img"
          src="/images/hero.png"
          srcMobile="/images/hero-mobile.png"
        />
        <Content className="items-center text-center">
          <Title className="leading-18 m-5 uppercase text-white">
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
