import React from "react";
import { Button } from "@/components/common/Button/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { LuHouse, LuMenu } from "react-icons/lu";
import { ModeToggle } from "./ModeToggle";
import { primaryMenuLinks } from "./MenuLinks";
import Link from "next/link";

export default function SidebarNav() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"icon"}
          size={"icon"}
          disableElevation
          className={cn("size-7 transition-all")}
        >
          <LuMenu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className={cn("w-screen p-0 sm:w-[450px]")}>
        <SheetHeader className="hidden px-6 py-6">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>use links to navigate</SheetDescription>
        </SheetHeader>
        <div className="mt-14">
          <div className="flex items-center justify-between border-t px-6 py-3">
            <Button
              variant={"icon"}
              size={"icon"}
              disableElevation
              className={cn("size-7 transition-all")}
            >
              <LuHouse className="h-12 w-12" />
            </Button>
            <ModeToggle />
          </div>
          <nav>
            <ul>
              {primaryMenuLinks.map((item) => (
                <li key={item.label} className={cn("border-b")}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        `flex-grow px-6 py-4 font-bold transition-colors hover:bg-gray-100 aria-[current=page]:text-primary dark:hover:bg-gray-700`,
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
