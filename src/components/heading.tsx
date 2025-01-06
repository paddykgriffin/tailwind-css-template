"use client";

interface Props {
  title: string;
}

export function Heading({ title }: Props) {
  return <h2 className="bg-primary m-0 dark:prose-invert">{title}</h2>;
}
