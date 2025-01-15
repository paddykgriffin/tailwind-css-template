import { Typography } from "@/components/common/Typography/Typography";
import { Section } from "@/components/layouts/Section/Section";
import Image from "next/image";
import { Button } from "@/components/common/Button/Button";

export default function About() {
  return (
    <Section className="dark:bg-black" id="about">
      <div className="text-center">
        <Typography
          variant="h2"
          className="mb-6 inline-block border-b-2 border-b-[#DFDFDF] pb-4 uppercase tracking-wide text-[#333333] dark:text-white"
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          className="dark:text-secondary text-3xl text-primary"
        >
          We are an innventive company priding ourselves on quaility solutions.
        </Typography>
        <Typography
          variant="body1"
          className="text-3xl text-gray-500 dark:text-white"
        >
          We excel in web/mobile design &amp; development.
        </Typography>

        <div className="flex justify-center py-10">
          <Image
            src="/images/img_aboutus.png"
            alt="About Us"
            width={992}
            height={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <Button
          size={"large"}
          href="/about"
          target="_blank"
          className="rounded-[8px] px-6 uppercase hover:shadow-lg dark:bg-primary"
        >
          Find out more
        </Button>
      </div>
    </Section>
  );
}
