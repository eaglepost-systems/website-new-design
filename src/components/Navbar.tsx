import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Phone, Mail, Clock, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "ku", label: "KU", name: "کوردی" },
];

interface DropdownItem {
  labelKey: string;
  path: string;
}

interface NavItem {
  labelKey: string;
  path: string;
  children?: DropdownItem[];
}

const navLinks: NavItem[] = [
  { labelKey: "nav.home", path: "/" },
  {
    labelKey: "nav.aboutUs",
    path: "/about",
    children: [
      { labelKey: "nav.whoWeAre", path: "/about" },
      { labelKey: "nav.howWeOperate", path: "/about/how-we-operate" },
    ],
  },
  {
    labelKey: "nav.corporate",
    path: "/services/corporate",
    children: [
      { labelKey: "nav.corporateOverview", path: "/services/corporate" },
      { labelKey: "nav.ecommerce", path: "/services/ecommerce" },
      { labelKey: "nav.businessPortal", path: "/services/business-portal" },
    ],
  },
  {
    labelKey: "nav.services",
    path: "/services",
    children: [
      { labelKey: "nav.allServices", path: "/services" },
      { labelKey: "nav.localDeliveries", path: "/services/local-deliveries" },
      { labelKey: "nav.international", path: "/services/international" },
      { labelKey: "nav.clickShip", path: "/services/click-ship" },
      { labelKey: "nav.poBox", path: "/services/po-box" },
    ],
  },
  { labelKey: "nav.trackShipment", path: "/services/government" },
  { labelKey: "nav.news", path: "/news" },
  { labelKey: "nav.careers", path: "/careers" },
];

const DesktopDropdown = ({ item }: { item: NavItem }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = location.pathname === item.path || item.children?.some(c => location.pathname === c.path);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted inline-flex items-center gap-1 ${
          isActive ? "text-primary font-semibold" : "text-foreground/80"
        }`}
        onClick={() => setOpen(!open)}
      >
        {t(item.labelKey)}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full start-0 mt-1 w-52 bg-background border border-border rounded-lg shadow-lg z-50 py-1.5"
          >
            {item.children!.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors hover:bg-muted ${
                  location.pathname === child.path ? "text-primary font-semibold" : "text-foreground/80"
                }`}
              >
                {t(child.labelKey)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = code === "en" ? "ltr" : "rtl";
    document.documentElement.lang = code;
    if (code === "ar" || code === "ku") {
      document.documentElement.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
    } else {
      document.documentElement.style.fontFamily = "";
    }
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground text-xs font-semibold transition-colors"
      >
        <Globe className="w-3.5 h-3.5" />
        {current.label}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full end-0 mt-1.5 w-36 bg-background border border-border rounded-lg shadow-xl z-[60] py-1 overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-muted ${
                  current.code === lang.code
                    ? "text-primary font-semibold bg-muted/50"
                    : "text-foreground/80"
                }`}
              >
                <span>{lang.name}</span>
                <span className="text-xs text-muted-foreground">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  const toggleMobileSubmenu = (labelKey: string) => {
    setMobileExpanded(mobileExpanded === labelKey ? null : labelKey);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between h-9 text-[11px]">
          <div className="flex items-center gap-1 sm:gap-4">
            <a href="tel:+9647505964000" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone className="w-3 h-3" />
              <span className="font-medium">{t("nav.phone")}</span>
            </a>
            <span className="hidden sm:block w-px h-3.5 bg-primary-foreground/30" />
            <a href="mailto:info@eaglepost.com" className="hidden sm:flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail className="w-3 h-3" />
              <span>{t("nav.email")}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-primary-foreground/80">
              <Clock className="w-3 h-3" />
              <span>{t("nav.hours")}</span>
            </span>
            <span className="hidden sm:block w-px h-3.5 bg-primary-foreground/30" />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="EaglePost - Express and Postal Services" className="h-16 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <DesktopDropdown key={link.path} item={link} />
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted ${
                    location.pathname === link.path
                      ? "text-primary font-semibold"
                      : "text-foreground/80"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="https://eaglepostglobal.ladesk.com/scripts/generateWidget.php?v=5.60.2.20260123071332&t=1770791673&cwid=3yposeq4&cwt=onlineform_popout&vid=f2dul97zhf0s59jbofxj8s94xhdpr240&ud=%7B%7D&pt=&ref=about%3Asrcdoc" target="_blank" rel="noopener noreferrer">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-md">
                <MessageCircle className="w-4 h-4 me-1" />
                {t("nav.liveChat")}
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-background border-t border-border max-h-[65vh] overflow-y-auto"
            >
              <div className="container py-2.5 space-y-0.5">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.path}>
                      <button
                        onClick={() => toggleMobileSubmenu(link.labelKey)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-[13px] font-medium transition-colors hover:bg-muted ${
                          link.children.some(c => location.pathname === c.path)
                            ? "text-primary font-semibold"
                            : "text-foreground/80"
                        }`}
                      >
                        {t(link.labelKey)}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpanded === link.labelKey ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.labelKey && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ps-4 space-y-0.5 py-0.5">
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block px-3 py-1.5 rounded-md text-[13px] transition-colors hover:bg-muted ${
                                    location.pathname === child.path
                                      ? "text-primary font-semibold bg-muted"
                                      : "text-foreground/70"
                                  }`}
                                >
                                  {t(child.labelKey)}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-md text-[13px] font-medium transition-colors hover:bg-muted ${
                        location.pathname === link.path
                          ? "text-primary bg-muted font-semibold"
                          : "text-foreground/80"
                      }`}
                    >
                      {t(link.labelKey)}
                    </Link>
                  )
                )}
                <div className="flex gap-2 pt-2 pb-1">
                  <a href="http://portal.eaglepost.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full font-semibold text-xs h-9">
                      {t("nav.login", "Login")}
                    </Button>
                  </a>
                  <a href="https://eaglepostglobal.ladesk.com/scripts/generateWidget.php?v=5.60.2.20260123071332&t=1770791673&cwid=3yposeq4&cwt=onlineform_popout&vid=f2dul97zhf0s59jbofxj8s94xhdpr240&ud=%7B%7D&pt=&ref=about%3Asrcdoc" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="flex-1">
                    <Button size="sm" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-xs h-9">
                      <MessageCircle className="w-3.5 h-3.5 me-1" />
                      {t("nav.liveChat")}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
