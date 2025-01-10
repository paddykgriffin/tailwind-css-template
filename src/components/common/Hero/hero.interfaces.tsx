import React, { type ReactNode } from "react";
import { TypographyProps } from "../Typography/Typography";

interface HeroContextType {
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeroComposition {
  Content: React.FC<ContentProps>;
  Title: React.FC<TypographyProps>;
  SubTitle: React.FC<TypographyProps>;
  Background: React.FC<BackgroundProps>;
}

interface ContentProps {
  children: ReactNode;
  className?: string;
}

interface BackgroundProps {
  type: "img";
  src: string;
  imageAlt?: string;
  hideTransparentLayer?: boolean;
  hideSkeleton?: boolean;
}

export type { HeroContextType, HeroComposition, ContentProps, BackgroundProps };
