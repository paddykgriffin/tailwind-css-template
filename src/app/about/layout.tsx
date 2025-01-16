import React from "react";
import Metadata from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: typeof Metadata = {
  title: "About Page",
  description: "About SEO content...",
};

export default function Layout({ children }: Props) {
  return <div className="about-page pt-28">{children}</div>;
}
