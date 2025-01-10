"use client";

import Link from "next/link";
import { footerMenuLinks } from "./MenuLinks";
import { cn } from "@/lib/utils";

const FooterNav = () => {
  return (
    <ul className="rtl:space-x-reserve mt-4 flex flex-col font-medium">
      {footerMenuLinks.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={cn(
              `flex items-center rounded py-1 text-white hover:text-gray-300`,
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
