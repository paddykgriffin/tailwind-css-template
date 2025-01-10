import { LinkProps } from "next/link";

export type NavItem = LinkProps & {label: string};

export const primaryMenuLinks: Array<NavItem> = [
    {
        label: "About Us",
        href: "/about-us",
      },
      {
        label: "What We Do",
        href: "/what-we-do",
      },
      {
        label: "Vacancies",
        href: "/vacancies",
      },
      {
        label: "Contact us",
        href: "/contact",
      },
];