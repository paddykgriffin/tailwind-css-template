"use client";

import React, { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Typography, TypographyProps } from "../Typography/Typography";
import type { HTMLProps } from "@/types/common.types";
import { Container } from "@/components/layouts/Container/Container";
import { Skeleton } from "@/components/ui/skeleton";

import {
  HeroContextType,
  ContentProps,
  BackgroundProps,
  HeroComposition,
} from "./hero.interfaces";

const HeroContext = React.createContext<HeroContextType | undefined>(undefined);

const useHeroContext = () => {
  const context = React.useContext(HeroContext);
  if (context === undefined) {
    throw new Error("useHeroContext must be used within a Hero Component");
  }
  return context;
};

export interface HeroProps extends HTMLProps<"section"> {
  children: ReactNode;
}

const Hero: React.FC<HeroProps> & HeroComposition = ({
  children,
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <HeroContext.Provider value={{ isLoaded, setIsLoaded }}>
      <section className={cn("relative grid w-full", className)} {...props}>
        {children}
      </section>
    </HeroContext.Provider>
  );
};

const Background = ({
  type,
  src,
  imageAlt = "Hero Banner",
  hideSkeleton = false,
  hideTransparentLayer = false,
}: BackgroundProps) => {
  const { isLoaded, setIsLoaded } = useHeroContext();
  const mediaRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      if (mediaRef.current) {
        setTimeout(() => setIsLoaded(true), 300);
      }
    };

    const currentMediaRef = mediaRef.current;

    if (currentMediaRef) {
      if (type === "img") {
        if ((currentMediaRef as HTMLImageElement).complete) {
          handleLoad();
        } else {
          (currentMediaRef as HTMLImageElement).onload = handleLoad;
        }
      }
    }
  }, [type, setIsLoaded]);

  const mediaClass = cn(
    "col-start-1 row-start-1 h-auto xl:h-[70vh] w-full transition-opacity duration-500",
    {
      "opacity-0": !isLoaded,
      "opacity-100": isLoaded,
    },
  );

  return (
    <>
      {!isLoaded && !hideSkeleton && (
        <Skeleton
          className={cn(
            "inset-0 z-10 col-start-1 row-start-1 h-[40vh] w-full transition-all duration-500 md:h-[60vh] lg:h-[95vh] xl:h-[95vh]",
          )}
        />
      )}{" "}
      {type === "img" ? (
        <img
          src={src}
          ref={mediaRef as React.RefObject<HTMLImageElement>}
          className={mediaClass}
        />
      ) : null}
      {!hideTransparentLayer && (
        <div
          className={cn(
            "inset-0 col-start-1 row-start-1 bg-black/50 transition-opacity duration-500",
            {
              "opacity-0": !isLoaded,
              "opacity-100": isLoaded,
            },
          )}
          aria-hidden="true"
        />
      )}
    </>
  );
};

const Content = ({ children, className }: ContentProps) => {
  const { isLoaded } = useHeroContext();
  if (!isLoaded) return null;
  return (
    <div className={cn("col-start-1 row-start-1 flex items-center", className)}>
      <Container className="py-0">{children}</Container>
    </div>
  );
};

const Title = ({ children, className, ...props }: TypographyProps) => (
  <Typography
    variant="h1"
    {...props}
    className={cn("text-4xl font-bold", className)}
  >
    {children}
  </Typography>
);

const SubTitle = ({ children, className, ...props }: TypographyProps) => (
  <Typography
    variant="body1"
    {...props}
    className={cn("text-2xl font-light", className)}
  >
    {children}
  </Typography>
);

// Assigning Title and Content to Hero component
Hero.Content = Content;
Hero.Content.displayName = "Hero.Content";

Hero.Title = Title;
Hero.Title.displayName = "Hero.Title";

Hero.SubTitle = SubTitle;
Hero.SubTitle.displayName = "Hero.SubTitle";

Hero.Background = Background;
Hero.Background.displayName = "Hero.Background";

Hero.displayName = "Hero";

export { Hero };
