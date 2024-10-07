import * as React from "react"
import { Button } from "./ui/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils"
import { Slot } from "@radix-ui/react-slot";

const heroVariants = cva(
    "place-content-center w-full text-white",
    {
        variants: {
            variant: {
                default: "text-white bg-violet-900 dark:bg-violet-400 ",
                secondary: "text-purple-900"
            },
            size: {
                default: "px-2 h-96",
                lg: "px-6 h-[700px]"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        },
    }
)

interface HeroProps 
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof heroVariants> {
            title: string;
            subTitle: string;
            btnLabel: string;
            asChild?: boolean;
            backgroundImage: string;
        }

const Hero = React.forwardRef<HTMLElement, HeroProps>(
    ({className, size, variant, asChild = false, title, subTitle, btnLabel, backgroundImage, ...props}, ref) => {
    const Comp = asChild ? Slot: "div"
    return (
        <Comp 
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className={cn(heroVariants({ className, variant, size }))}
        {...props}  >
            <div className="container mx-auto text-center">
                <h1 className="text-[92px] shadow-md">{title}</h1>
                <p className="text-2xl py-2 mb-10">{subTitle}</p>
                <Button variant={'default'} size={'lg'}>{btnLabel}</Button>
            </div>
        </Comp>
        )
    }
)

export {Hero, heroVariants}