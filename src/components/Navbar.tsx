import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const isActive =
    location.pathname === item.path ||
    item.children?.some((child) => location.pathname === child.path);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
          isActive ? "font-semibold text-primary" : "text-foreground/80"
        }`}
        onClick={() => setOpen(!open)}
      >
        {t(item.labelKey)}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full start-0 z-50 mt-1 w-52 rounded-lg border border-border bg-background py-1.5 shadow-lg"
          >
            {item.children!.map((child) => (
              <Link
                key={child.path}
                to={child.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors hover:bg-muted ${
                  location.pathname === child.path ? "font-semibold text-primary" : "text-foreground/80"
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
      <div className="bg-primary text-primary-foreground">
        <div className="container flex h-9 items-center justify-between text-[11px]">
          <div className="flex items-center gap-1 sm:gap-4">
            <a href="tel:+9647505964000" className="flex items-center gap-1.5 transition-colors hover:text-secondary">
              <Phone className="h-3 w-3" />
              <span className="font-medium">{t("nav.phone")}</span>
            </a>
            <span className="hidden h-3.5 w-px bg-primary-foreground/30 sm:block" />
            <a href="mailto:customerservice@eaglepost.com
" className="hidden items-center gap-1.5 transition-colors hover:text-secondary sm:flex">
              <Mail className="h-3 w-3" />
              <span>{t("nav.email")}</span>
            </a>
          </div>
          <div className="hidden items-center gap-1.5 text-primary-foreground/80 sm:flex">
            <Clock className="h-3 w-3" />
            <span>{t("nav.hours")}</span>
          </div>
        </div>
      </div>

      <nav className="border-b border-border bg-background/95 shadow-sm backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/eaglepost_logo.jpg" alt="EaglePost - Express and Postal Services" className="h-16 w-auto" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <DesktopDropdown key={link.path} item={link} />
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                    location.pathname === link.path ? "font-semibold text-primary" : "text-foreground/80"
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ),
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://eaglepostglobal.ladesk.com/scripts/generateWidget.php?v=5.60.2.20260123071332&t=1770791673&cwid=3yposeq4&cwt=onlineform_popout&vid=f2dul97zhf0s59jbofxj8s94xhdpr240&ud=%7B%7D&pt=&ref=about%3Asrcdoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-secondary font-semibold text-secondary-foreground shadow-md hover:bg-secondary/90">
                <MessageCircle className="me-1 h-4 w-4" />
                {t("nav.liveChat")}
              </Button>
            </a>
          </div>

          <button
            className="rounded-md p-2 hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="max-h-[65vh] overflow-y-auto border-t border-border bg-background lg:hidden"
            >
              <div className="container space-y-0.5 py-2.5">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.path}>
                      <button
                        onClick={() => toggleMobileSubmenu(link.labelKey)}
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-[13px] font-medium transition-colors hover:bg-muted ${
                          link.children.some((child) => location.pathname === child.path)
                            ? "font-semibold text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        {t(link.labelKey)}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform ${mobileExpanded === link.labelKey ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.labelKey && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-0.5 py-0.5 ps-4">
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block rounded-md px-3 py-1.5 text-[13px] transition-colors hover:bg-muted ${
                                    location.pathname === child.path
                                      ? "bg-muted font-semibold text-primary"
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
                      className={`block rounded-md px-3 py-2 text-[13px] font-medium transition-colors hover:bg-muted ${
                        location.pathname === link.path
                          ? "bg-muted font-semibold text-primary"
                          : "text-foreground/80"
                      }`}
                    >
                      {t(link.labelKey)}
                    </Link>
                  ),
                )}
                <div className="flex gap-2 pb-1 pt-2">
                  <a
                    href="http://portal.eaglepost.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" className="h-9 w-full text-xs font-semibold">
                      {t("nav.login", "Login")}
                    </Button>
                  </a>
                  <a
                    href="https://eaglepostglobal.ladesk.com/scripts/generateWidget.php?v=5.60.2.20260123071332&t=1770791673&cwid=3yposeq4&cwt=onlineform_popout&vid=f2dul97zhf0s59jbofxj8s94xhdpr240&ud=%7B%7D&pt=&ref=about%3Asrcdoc"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1"
                  >
                    <Button size="sm" className="h-9 w-full bg-secondary text-xs font-semibold text-secondary-foreground hover:bg-secondary/90">
                      <MessageCircle className="me-1 h-3.5 w-3.5" />
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
