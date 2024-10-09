"use client";
import Link from "next/link";

interface Props {
  title: string;
  path: string;
}

export function NavItem({ title, path }: Props) {
  return (
    <>
      <Link
        href={path}
        className="after:ml-4 after:content-['/'] last:after:hidden"
      >
        {title}
      </Link>
    </>
  );
}
