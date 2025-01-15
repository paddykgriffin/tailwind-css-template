import { Section } from "@/components/layouts/Section/Section";
import Metadata from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Page",
  description: "Homepage SEO content...",
};

export default function AboutPage() {
  return (
    <Section>
      <h1>About Page</h1>
    </Section>
  );
}
