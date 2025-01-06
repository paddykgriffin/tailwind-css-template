import Header from "./header";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
}

export default function SiteWrapper({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
