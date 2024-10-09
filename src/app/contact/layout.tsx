interface Props {
  children: React.ReactNode;
}

export default function ContactLayout({ children }: Props) {
  return (
    <>
      <div className="container mx-auto">{children}</div>
    </>
  );
}
