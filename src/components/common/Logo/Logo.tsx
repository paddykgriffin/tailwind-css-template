import Image from "next/image";
import useCurrentTheme from "@/hooks/useCurrentTheme";
import Link from "next/link";

export default function Logo() {
  const { currentTheme } = useCurrentTheme();
  return (
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
  );
}
