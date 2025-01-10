import Image from "next/image";
import { ModeToggle } from "@/components/layouts/Header/ModeToggle";
import PrimaryNav from "@/components/layouts/Header/PrimaryNav";
import useCurrentTheme from "@/hooks/useCurrentTheme";
import Link from "next/link";
import { Container } from "../Container/Container";

export default function Header() {
  const { currentTheme } = useCurrentTheme();

  return (
    <header className="fixed z-50 flex w-full place-content-center py-10">
      <Container
        className="flex flex-wrap justify-between gap-2"
        maxWidth="4xl"
      >
        <div className="max-h-12">
          <Link href="/">
            {currentTheme === "dark" ? (
              <Image
                src="images/LogoDark.svg"
                height={80}
                width={300}
                alt="Logo Dark"
              />
            ) : (
              <Image src="images/Logo.svg" height={80} width={300} alt="Logo" />
            )}
          </Link>
        </div>

        <div className="flex w-full md:w-auto items-center">
          <PrimaryNav />
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
