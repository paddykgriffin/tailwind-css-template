import React,{FC, HTMLAttributes} from "react";
import { Button } from "./ui/button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils"


const heroVariants = cva(
    "place-content-center w-full text-white",
    {
        variants: {
            variant: {
                default: "text-red-400 bg-violet-900",
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
    extends HTMLAttributes<HTMLElement>,
        VariantProps<typeof heroVariants> {
            title: string;
            subTitle: string;
            btnLabel: string;
            backgroundImage: string;
        }


const Hero: FC<HeroProps> = (
    {className, size, variant, backgroundImage, title, subTitle, btnLabel, ...props}) => {
    return (
        <div 
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                
        className={cn(heroVariants({ variant, size, className,  }))}
        {...props}  >
            <div className="container mx-auto text-center">
                <h1 className="text-9xl">{title}</h1>
                <p className="text-2xl">{subTitle}</p>
                <Button variant={'default'} size={'lg'}>{btnLabel}</Button>
            </div>
        </div>
    )
}

export {Hero, heroVariants}