"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";

export type MenuDataType = {
  label: string;
  href: Url;
};

type FooterLinkProps = {
  data: MenuDataType[];
};

const FooterNav = ({ data }: FooterLinkProps) => {
  return (
    <ul className="rtl:space-x-reserve mt-4 flex flex-col font-medium">
      {data.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={cn(
              `flex items-center rounded py-1 font-normal text-gray-400 hover:text-gray-300 text-sm`,
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
