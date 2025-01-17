import Image from "next/image";
import useCurrentTheme from "@/hooks/useCurrentTheme";
import Link from "next/link";
import React from "react";

export default function Logo() {
  const { currentTheme } = useCurrentTheme();
  return (
    <Link href="/">
      {currentTheme === "dark" ? (
        <Image
          src="/images/logo.png"
          height={80}
          width={275}
          alt="Logo Dark"
          priority
        />
      ) : (
        <Image
          src="/images/logo.png"
          height={80}
          width={275}
          alt="Logo"
          priority
        />
      )}
    </Link>
  );
}
