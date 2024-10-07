import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/app/components/ui/navigation-menu"

export default function Header() {
    return (
        <header className="fixed h-16 flex place-content-center w-full top-[45px]">
            <div className="container mx-auto flex justify-between">

            <div className="flex justify-center">
                <Image  src="/images/logo.svg" height={80} width={300} alt="Your Name" />
            </div>

                <div className="flex text-white items-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink>About Us</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>What We Do</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>Vancancies</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>Contact Us</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <ModeToggle  />
                </div>

            </div>
        </header>
    )
}