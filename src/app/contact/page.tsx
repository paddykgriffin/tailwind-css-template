import React from "react";
import { Background, Hero } from "@/components/common/Hero/Hero";
import { Section } from "@/components/layouts/Section/Section";
import { Typography } from "@/components/common/Typography/Typography";
import MapComponent from "@/components/custom/Map";
import Link from "next/link";
import { Button } from "@/components/common/Button/Button";

export const metadata = {
  title: "Contact Us",
  description: "Contact us for all your needs",
};

export default function ContactPage() {
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
        <Typography
          variant="h1"
          className="pb-12 text-center text-black dark:text-white"
        >
          {metadata.title}
        </Typography>
        <Typography
          variant="body1"
          className="leading-12 tracking-loose text-center text-3xl font-extralight"
        >
          Why not get in touch!{" "}
          <span className="font-semibold text-secondary dark:text-primary">
            You are only
          </span>{" "}
          a few clicks away.
        </Typography>

        <div className="grid grid-cols-1 gap-6 pt-16 lg:grid-cols-2">
          <div className="block px-4 xl:px-8">
            <div className="mb-12 rounded-md bg-yellow-500 p-2 text-gray-700">
              This form is not functional. It is for demonstration purposes
              only.
            </div>

            <form role="form" className="">
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputEmail1"
                  className="block pb-2 tracking-normal text-gray-500 dark:text-white"
                >
                  Name:
                </label>
                <input
                  type="text"
                  className="w-full rounded-sm border border-gray-300 bg-gray-100 px-2 py-2 md:w-8/12"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputEmail1"
                  className="block pb-2 tracking-normal text-gray-500 dark:text-white"
                >
                  Email:
                </label>
                <input
                  type="email"
                  className="w-full rounded-sm border border-gray-300 bg-gray-100 px-2 py-2 md:w-8/12"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="exampleInputEmail1"
                  className="block pb-2 tracking-normal text-gray-500 dark:text-white"
                >
                  Phone Number:
                </label>
                <input
                  type="phone"
                  className="w-full rounded-sm border border-gray-300 bg-gray-100 px-2 py-2 md:w-8/12"
                  id="phone"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="form-group mb-12">
                <label
                  htmlFor="exampleInputEmail1"
                  className="block pb-2 tracking-normal text-gray-500 dark:text-white"
                >
                  Comment:
                </label>
                <textarea
                  className="w-full rounded-sm border border-gray-300 bg-gray-100 px-2 py-2 md:w-8/12"
                  rows={10}
                ></textarea>
              </div>
              <Button type="submit" className="w-full md:w-[250px] rounded-lg" size="large">
                Send Form
              </Button>
            </form>
          </div>
          <div className="block">
            <div className="pb-6 pt-12 md:pb-12">
              <Typography variant={"h2"} className="text-primary">
                Our Office
              </Typography>
              <Typography variant={"body1"}>
                23 Pixel Gardens, Block 14
                <br />
                Outside City, Berlin, Germany
              </Typography>
              <ul className="font-lg pb-4 text-black dark:text-white">
                <li className="font-lg">
                  <span className="pr-2 font-semibold">Tel:</span>01 456 4568
                </li>
                <li className="font-lg">
                  <span className="pr-2 font-semibold">Fax:</span>01 456 4568
                </li>
              </ul>
              <ul className="font-lg pb-4 text-black dark:text-white">
                <li>
                  <span className="pr-2 font-semibold">Sales:</span>
                  <Link href="mailto:sales@easyweb.com">
                    sales@companyname.com
                  </Link>
                </li>
                <li>
                  <span className="pr-2 font-semibold">Support:</span>
                  <Link href="mailto:support@easyweb.com">
                    support@companyname.com
                  </Link>
                </li>
              </ul>
            </div>

            <MapComponent />
          </div>
        </div>
      </Section>
    </>
  );
}
