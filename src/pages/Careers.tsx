import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";
import { positionKeys } from "@/lib/positions";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Careers = () => {
  const { t } = useTranslation();

  const openPositions = positionKeys.map((p) => ({
    id: p.id,
    title: t(p.titleKey),
    department: t(p.deptKey),
    location: t(p.locationKey),
    type: t(p.typeKey),
  }));

  return (
    <>
      <PageHero image={heroImages.careers}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">
          {t("careers.title")}
        </h1>
        <p className="text-primary-foreground/80 max-w-2xl">
          {t("careers.subtitle")}
        </p>
      </PageHero>

      {/* Intro */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="container max-w-4xl text-center">
          <motion.h2
            className="text-2xl md:text-3xl font-display font-extrabold mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            {t("careers.introTitle")}
          </motion.h2>
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          >
            {t("careers.introDesc")}
          </motion.p>
        </div>
      </section>



    </>
  );
};

export default Careers;
