"use client";

interface Props {
  title: string;
}

export function Heading({ title }: Props) {
  return <h2 className="dark:prose-invert m-0">{title}</h2>;
}
