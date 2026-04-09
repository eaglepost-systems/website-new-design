import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, Globe, ShoppingBag, Mail, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Services = () => {
  const { t } = useTranslation();

  const individualServices = [
    {
      icon: Package,
      title: t("services.localTitle"),
      desc: t("services.localDesc"),
      link: t("services.localLink"),
      to: "/services/local-deliveries",
    },
    {
      icon: Globe,
      title: t("services.intlTitle"),
      desc: t("services.intlDesc"),
      link: t("services.intlLink"),
      to: "/services/international",
    },
    {
      icon: ShoppingBag,
      title: t("services.clickShipTitle"),
      desc: t("services.clickShipDesc"),
      link: t("services.clickShipLink"),
      to: "/services/click-ship",
    },
    {
      icon: Mail,
      title: t("services.poBoxTitle"),
      desc: t("services.poBoxDesc"),
      link: t("services.poBoxLink"),
      to: "/services/po-box",
    },
  ];


  return (
    <>
      <PageHero image={heroImages.services}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">{t("services.title")}</h1>
        <p className="text-primary-foreground/80 max-w-2xl">{t("services.intro")}</p>
      </PageHero>

      {/* Centered intro */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-display font-extrabold mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Services for individuals
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            Whether you're sending a package across town, shipping internationally, or need a P.O. Box — we have you covered with reliable, trackable services.
          </motion.p>
        </div>
      </section>

      {/* Individual services — large alternating cards */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-5xl space-y-6">
          {individualServices.map((s, i) => (
            <motion.div
              key={s.to}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <Link
                to={s.to}
                className="group block rounded-2xl border border-border bg-card hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 p-8 md:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <s.icon className="w-8 h-8 text-primary" strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 text-center md:text-start">
                    <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      {s.link} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Services;
