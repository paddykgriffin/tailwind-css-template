import Link from "next/link";

export type NavItem = {label: string, href: string};

export const primaryMenuLinks: Array<NavItem> = [
    {
        label: "About Us",
        href: "/about",
      },
      {
        label: "What We Do",
        href: "/what-we-do",
      },
      {
        label: "Latest Work",
        href: "/latest-work",
      },
    
      {
        label: "Contact us",
        href: "/contact",
      },
];