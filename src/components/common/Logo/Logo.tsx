import Image from "next/image";
import useCurrentTheme from "@/hooks/useCurrentTheme";
import Link from "next/link";

export default function Logo() {
  const { currentTheme } = useCurrentTheme();
  return (
    <Link href="/">
      {currentTheme === "dark" ? (
        <Image
          src="/images/logo.png"
          height={80}
          width={300}
          alt="Logo Dark"
          priority
          style={{ width: "100%", height: "auto" }}
        />
      ) : (
        <Image
          src="/images/logo.png"
          height={80}
          width={300}
          alt="Logo"
          priority
          style={{ width: "100%", height: "auto" }}
        />
      )}
    </Link>
  );
}
