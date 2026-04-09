import { motion } from "framer-motion";
import { Package, Bell, ClipboardList, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import appMockup from "@/assets/app-mockup.jpg";

const floatingCards = [
  { icon: Package, labelKey: "home.ctaCard1", position: "top-[15%] -left-4 md:left-[5%]", delay: 0 },
  { icon: Bell, labelKey: "home.ctaCard2", position: "bottom-[25%] -left-4 md:left-[2%]", delay: 0.15 },
  { icon: ClipboardList, labelKey: "home.ctaCard3", position: "top-[20%] -right-4 md:right-[5%]", delay: 0.1 },
  { icon: DollarSign, labelKey: "home.ctaCard4", position: "bottom-[20%] -right-4 md:right-[2%]", delay: 0.2 },
];

const AppShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5" />
      </div>

      <div className="container relative z-10">
        {/* Headline */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground leading-tight mb-4">
            {t("home.ctaTitle1")}{" "}
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md inline-block">
              {t("home.ctaHighlight1")}
            </span>{" "}
            {t("home.ctaTitle2")}{" "}
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md inline-block mt-2">
              {t("home.ctaHighlight2")}
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6">
            {t("home.ctaSub")}
          </p>
        </motion.div>

        {/* Phone + floating cards */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          {/* Phone mockup */}
          <motion.div
            className="relative z-10 w-48 md:w-64"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-foreground/10">
              <img src={appMockup} alt="Eagle Post App" className="w-full" />
            </div>
          </motion.div>

          {/* Floating cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.labelKey}
              className={`absolute ${card.position} z-20`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + card.delay }}
            >
              <div className="bg-background rounded-xl shadow-lg border border-border px-2.5 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 hover:shadow-xl transition-shadow">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <card.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                  {t(card.labelKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Google Play */}
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl px-5 h-14 hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-wide opacity-80">GET IT ON</span>
              <span className="text-lg font-bold -mt-0.5">Google Play</span>
            </div>
          </a>

          {/* App Store */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl px-5 h-14 hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-wide opacity-80">DOWNLOAD ON THE</span>
              <span className="text-lg font-bold -mt-0.5">App Store</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
