import { cn } from "@/lib/utils";
import type { HTMLProps } from "@/types/common.types";
import type React from "react";
import { Container, type ContainerProps } from "../Container/Container";

type SectionProps = HTMLProps<"section"> & {
  children?: React.ReactNode;
  fullWidth?: boolean;
  containerProps?: ContainerProps;
};

const Section = ({
  children,
  fullWidth = false,
  className,
  containerProps,
  ...props
}: SectionProps) => {
  return (
    <section className={cn("m-0 py-16 md:py-24", className)} {...props}>
      {fullWidth ? (
        children
      ) : (
        <Container {...containerProps}>{children}</Container>
      )}
    </section>
  );
};

Section.displayName = "Section";
export { Section };
