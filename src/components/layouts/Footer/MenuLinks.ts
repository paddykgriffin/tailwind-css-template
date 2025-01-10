import { LinkProps } from "next/link";

export type NavItem = LinkProps & {label: string};

export const footerMenuLinks: Array<NavItem> = [
    {
      label: "Company Information",
      href: "#",
    },
    {
      label: "What We've Done",
      href: "#",
    },
    {
      label: "Vacancies",
      href: "#",
    }
];