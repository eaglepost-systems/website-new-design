import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/appLinks";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contactLinks";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img alt="EaglePost" className="h-12 w-auto" src="/eaglepost_logo.jpg" />
            </div>
            <div className="flex gap-3 mt-4">
              {/* Google Play */}
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg px-3 h-11 transition-colors">
                
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
                </svg>
                <div className="flex flex-col leading-tight">
                  <span className="text-[8px] uppercase tracking-wide opacity-70">GET IT ON</span>
                  <span className="text-xs font-bold -mt-0.5">Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg px-3 h-11 transition-colors">
                
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col leading-tight">
                  <span className="text-[8px] uppercase tracking-wide opacity-70">DOWNLOAD ON THE</span>
                  <span className="text-xs font-bold -mt-0.5">App Store</span>
                </div>
              </a>
            </div>

            <div className="flex gap-3 mt-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <WhatsappIcon className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/eaglepost" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/eaglepost.global/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/eaglepost/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-secondary">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              {[
              { labelKey: "footer.aboutUs", path: "/about" },
              { labelKey: "nav.howWeOperate", path: "/about/how-we-operate" },
              { labelKey: "footer.ourServices", path: "/services" },
              { labelKey: "nav.trackShipment", path: "/services/government" },
              { labelKey: "nav.corporate", path: "/services/corporate" },
              { labelKey: "footer.newsBlog", path: "/news" },
              { labelKey: "footer.careers", path: "/careers" },
              { labelKey: "footer.contactUs", path: "mailto:corporatesales.executive@eaglepost.com", external: true }].
              map((link) =>
              <li key={link.labelKey}>
                  {(link as any).external ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                      {t(link.labelKey)}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-primary-foreground/80 hover:text-secondary transition-colors">
                      {t(link.labelKey)}
                    </Link>
                  )}
                </li>
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-secondary">{t("footer.helpSupport")}</h3>
            <ul className="space-y-2 text-sm">
              {[
              { labelKey: "footer.faq", path: "/faq" },
              { labelKey: "footer.howToSend", path: "/how-to-send" },
              { labelKey: "footer.prohibited", path: "/prohibited-items-list.pdf", external: true },
              { labelKey: "home.findBranch", path: "/branches" },
              { labelKey: "footer.privacy", path: "/privacy-policy" },
              { labelKey: "footer.terms", path: "/terms-of-service" }].
              map((link) =>
              <li key={link.labelKey}>
                  {(link as any).external ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                      {t(link.labelKey)}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-primary-foreground/80 hover:text-secondary transition-colors">
                      {t(link.labelKey)}
                    </Link>
                  )}
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-secondary">{t("footer.contactInfo")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">40 Meter Street, Ster Tower, Erbil, Iraq 44001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">{t("nav.phone")}</span>
              </li>
              <li className="flex items-center gap-2">
                <WhatsappIcon className="w-4 h-4 text-secondary shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">{t("nav.email")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>{t("nav.hours")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-primary-foreground/60">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>);

};

export default Footer;
