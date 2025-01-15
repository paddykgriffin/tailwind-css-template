import { Typography } from "@/components/common/Typography/Typography";
import { Container } from "../Container/Container";
import FooterNav from "./FooterNav";
import Logo from "@/components/common/Logo/Logo";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LinksOne, LinksTwo } from "./MenuLinks";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#333366] py-10 dark:bg-[#121212]">
      <Container maxWidth="3xl">
        <div className="mb-4 grid gap-4">
          <div className="col-start-1 col-end-4 flex items-center">
            <Logo />
          </div>
          <div className="col-start-10 col-end-12">
            <div className="grid">
              <div className="col-start-1 col-end-1">
                <Typography variant="h4" className="text-[18px] text-gray-300">
                  What We Do
                </Typography>
                <FooterNav data={LinksOne} />
              </div>
              <div className="col-start-2 col-end-2">
                <Typography variant="h4" className="text-[18px] text-gray-300">
                  About Us
                </Typography>
                <FooterNav data={LinksTwo} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid items-center gap-4 border-t-[1px] border-t-[#26264B] pt-12 dark:border-t-white/20">
          <div className="col-start-1 col-end-9 flex">
            <Typography
              variant="body1"
              align={"left"}
              className="mb-0 text-xs text-gray-300"
            >
              &copy; Company Name {year}
            </Typography>
            <div className="div ml-6">
              <ul className="flex gap-6 text-xs">
                <li>
                  t:{" "}
                  <a href="tel:011235690" className="hover:text-white">
                    01 123 5690
                  </a>
                </li>
                <li>
                  e:{" "}
                  <a
                    href="mailto:info@companyname.com"
                    className="hover:text-white"
                  >
                    info@companyname.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-start-9 col-end-12 flex justify-end">
            <ul className="flex flex-row gap-4">
              <li>
                <a href="">
                  <FaFacebook size={"32px"} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter size={"32px"} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin size={"32px"} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGooglePlus size={"32px"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
