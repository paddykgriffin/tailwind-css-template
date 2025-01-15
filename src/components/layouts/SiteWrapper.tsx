import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import { HeaderProvider } from "./Header/HeaderContext";
import { useEffect } from "react";
import siteConfig from "@/site-config";
import ScrollToTop from "../common/ScrollToTop";

interface Props {
  children: React.ReactNode;
  disableTransparentHeader?: boolean;
}

export default function SiteWrapper({
  children,
  disableTransparentHeader,
}: Props) {
  useEffect(() => {
    if (!siteConfig.layout.header.transparent || disableTransparentHeader) {
      setTimeout(() => {
        const header = document.getElementById("main-header");
        const siteMain = document.getElementById("site-main");
        if (header && siteMain) {
          siteMain.style.marginTop = `${header.offsetHeight}px`;
        }
      }, 50);
    }
  }, [disableTransparentHeader]);

  return (
    <>
      <HeaderProvider disableTransparentHeader={disableTransparentHeader}>
        <Header />
      </HeaderProvider>
      <main id="site-main">{children}</main>
      <Footer />
      {siteConfig.layout.backToTop ? <ScrollToTop /> : null}
    </>
  );
}
