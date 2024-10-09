"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  //https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch

  return (
    <>
      {theme === "dark" ? (
        <div className="flex items-center space-x-6 text-white ml-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme("light")}>
            <FaSun className="h-[1.2rem] w-[1.2rem] text-white" />
          </Button>
        </div>
      ) : (
        <div className="flex items-center space-x-6 text-black ml-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme("dark")}>
            <FaMoon className="h-[1.2rem] w-[1.2rem] text-white" />
          </Button>
        </div>
      )}
    </>
  );
}
