import { Typography } from "@/components/common/Typography/Typography";
import { Container } from "../Container/Container";
import FooterNav from "./FooterNav";
import Logo from "@/components/common/Logo/Logo";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#333366] py-10 dark:bg-[#121212]">
      <Container maxWidth="3xl">
        <div className="mb-4 grid gap-4">
          <div className="col-start-1 col-end-7 flex items-center">
            <Logo />
          </div>
          <div className="b col-start-7 col-end-12">
            <div className="grid grid-cols-2">
              <div className="col-start-1 col-end-1">
                <Typography variant="h4">What We Do</Typography>
                <FooterNav />
              </div>
              <div className="col-start-2 col-end-2">
                <Typography variant="h4">About Us</Typography>
                <FooterNav />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[1px] grid gap-4 border-t-gray-500 pt-8">
          <div className="col-start-1 col-end-9">
            <Typography variant="body1" align={"left"} className="mb-0">
              &copy; Company Name {year}
            </Typography>
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
