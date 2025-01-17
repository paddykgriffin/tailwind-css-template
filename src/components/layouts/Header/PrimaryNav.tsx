"use client";
import React from "react";
import Link from "next/link";
import { primaryMenuLinks } from "./MenuLinks";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const PrimaryNav = () => {
  const pathname = usePathname();
  const isActive = (itemHref: string) => pathname === itemHref;

  return (
    <ul className="rtl:space-x-reserve mr-20 mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
      {primaryMenuLinks.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={cn(
              `flex items-center rounded px-3 py-2 uppercase text-gray-400 hover:font-bold hover:text-white md:border-0 md:p-0`,
              isActive(item.href) ? "text-white" : "",
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PrimaryNav;
