"use client";

import useCurrentTheme from "@/hooks/useCurrentTheme";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import siteConfig from "@/site-config";

export function ModeToggle() {
  const { currentTheme, toogleTheme } = useCurrentTheme();

  if (siteConfig.darkMode === false) {
    return null;
  }

  return (
    <Button onClick={toogleTheme} variant="icon" size="icon" disableElevation>
      <Icon
        icon="line-md:moon"
        className={`size-7 transition-all ${currentTheme === "dark" ? "-rotate-90 scale-0" : "-rotate-0 scale-100"}`}
      />
      <Icon
        icon="line-md:sunny-filled-loop"
        className={`absolute size-7 transition-all ${currentTheme === "dark" ? "-rotate-90 scale-100" : "-rotate-0 scale-0"}`}
      />
      <span className="sr-only">
        {currentTheme === "dark" ? "Turn on light" : "Turn off light"}
      </span>
    </Button>
  );
}
