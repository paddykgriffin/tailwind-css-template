import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Navigation } from "../ui/navigation";

export default function Header() {
  return (
    <header className="fixed flex w-full place-content-center py-10">
      <div className="container mx-auto flex justify-between">
        <div className="not-prose flex justify-center">
          <Image
            src="/images/logo.svg"
            height={80}
            width={300}
            alt="Your Name"
          />
        </div>

        <div className="not-prose flex items-center font-medium uppercase text-gray-400">
          <Navigation />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
