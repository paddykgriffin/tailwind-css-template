import { ModeToggle } from "@/components/layouts/Header/ModeToggle";
import PrimaryNav from "@/components/layouts/Header/PrimaryNav";
import { Container } from "../Container/Container";
import Logo from "@/components/common/Logo/Logo";

export default function Header() {
  return (
    <header className="fixed z-50 flex w-full place-content-center py-10">
      <Container
        className="flex flex-wrap justify-between gap-2"
        maxWidth="4xl"
      >
        <div className="max-h-12">
          <Logo />
        </div>

        <div className="flex w-full items-center md:w-auto">
          <PrimaryNav />
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
