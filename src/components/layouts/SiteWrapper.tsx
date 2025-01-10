import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";

interface Props {
  children: React.ReactNode;
}

export default function SiteWrapper({ children }: Props) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
