import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.dir = !lang || lang.startsWith("en") ? "ltr" : "rtl";
    document.documentElement.lang = lang;
    if (lang === "ar" || lang === "ku") {
      document.documentElement.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
    } else {
      document.documentElement.style.fontFamily = "";
    }
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
