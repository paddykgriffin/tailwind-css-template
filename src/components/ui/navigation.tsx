"use client";
import React from "react";
import { NavItem } from "./nav-item";

const data = [
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "What We Do",
    path: "/what-we-do",
  },
  {
    title: "Vacancies",
    path: "/vacancies",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
];

export function Navigation() {
  return (
    <nav className="flex flex-row gap-x-4">
      {data.map((item, index) => (
        <NavItem {...item} key={index} />
      ))}
    </nav>
  );
}
