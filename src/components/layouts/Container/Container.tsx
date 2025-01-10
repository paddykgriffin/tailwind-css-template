import { cn } from "@/lib/utils";
import siteConfig from "@/site-config";
import type { HTMLProps } from "@/types/common.types";
import type { ReactNode } from "react";

export type MaxWidthOption =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

export type ContainerProps = HTMLProps<"div"> & {
  maxWidth?: MaxWidthOption;
  children?: ReactNode;
  className?: string;
};

const maxWidthClasses: Record<MaxWidthOption, string> = {
  sm: "sm:max-w-screen-sm",
  md: "md:max-w-screen-md sm:max-w-screen-sm",
  lg: "lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm",
  xl: "xl:max-w-screen-xl",
  "2xl": "2xl:max-w-screen-xl xl:max-w-screen-xl",
  "3xl": "3xl:max-w-screen-2xl 2xl:max-w-screen-xl xl:max-w-screen-xl",
  "4xl":
    "4xl:max-w-screen-3xl 3xl:max-w-screen-2xl 2xl:max-w-screen-xl xl:max-w-screen-xl",
  "5xl":
    "5xl:max-w-screen-4xl 4xl:max-w-screen-3xl 3xl:max-w-screen-2xl 2xl:max-w-screen-xl xl:max-w-screen-xl",
};

const Container = ({
  children,
  className,
  maxWidth = siteConfig.layout.container || "xl",
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "container mx-auto px-6 md:px-8",
        maxWidthClasses[maxWidth],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Container.displayName = "Container";
export { Container };
