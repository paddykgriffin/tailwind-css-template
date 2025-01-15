import { LinkProps } from "next/link";

export type NavItem = LinkProps & {label: string};

export const LinksOne: Array<NavItem> = [
    {
      label: "Web Design & Development",
      href: "#",
    },
    {
      label: "Ecommerce",
      href: "#",
    },
    {
      label: "CMS",
      href: "#",
    },
    {
      label: "Hosting",
      href: "#",
    },
    {
      label: "SEO",
      href: "#",
    }
];

export const LinksTwo: Array<NavItem> = [
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