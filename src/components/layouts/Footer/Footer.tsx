import { Typography } from "@/components/common/Typography/Typography";
import { Container } from "../Container/Container";
//import FooterNav from "./FooterNav";
//import Logo from "@/components/common/Logo/Logo";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
//import { LinksOne, LinksTwo } from "./MenuLinks";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#333366] py-10 dark:bg-[#121212]">
      <Container maxWidth="3xl">
        {/* <div className="mb-4 grid gap-4">
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
        </div> */}

        <div className="grid items-center gap-4 md:mt-6">
          <div className="flex flex-col justify-center pb-6 md:col-start-1 md:flex-row md:justify-start md:pb-0 md:first:col-end-9">
            <Typography
              variant="body1"
              className="mb-0 pb-4 text-center text-lg text-gray-300 md:pb-0 md:text-left md:text-sm"
            >
              &copy; Company Name {year}
            </Typography>
            <div className="text-center md:ml-6 md:text-left">
              <ul className="flex flex-col justify-center text-lg md:flex-row md:justify-start md:gap-6 md:text-sm">
                <li className="py-4 md:py-0">
                  <a href="tel:011235690" className="hover:text-white">
                    01 123 5690
                  </a>
                </li>
                <li className="py-4 md:py-0">
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

          <div className="flex justify-center md:col-start-9 md:col-end-12 md:justify-end">
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
