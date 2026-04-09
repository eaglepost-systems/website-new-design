import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { Briefcase, MapPin, Clock, Send, FileText, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";
import { positionKeys } from "@/lib/positions";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const VacancyDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const posKey = positionKeys.find((p) => p.id === id);
  if (!posKey) return <Navigate to="/careers" replace />;

  const pos = {
    title: t(posKey.titleKey),
    department: t(posKey.deptKey),
    location: t(posKey.locationKey),
    type: t(posKey.typeKey),
    desc: t(posKey.descKey),
    reqs: t(posKey.reqsKey),
  };

  return (
    <>
      <PageHero image={heroImages.careers}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">
          {pos.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4" /> {pos.department}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> {pos.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {pos.type}
          </span>
        </div>
      </PageHero>

      <section className="py-12 md:py-20">
        <div className="container max-w-3xl">
          {/* Back link */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Link to="/careers" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t("careers.backToVacancies")}
            </Link>
          </motion.div>

          {/* Description */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <Card className="mb-6 border-border">
              <CardContent className="p-6 md:p-8">
                <h2 className="flex items-center gap-2 font-display font-bold text-lg mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  {t("careers.descLabel")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{pos.desc}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Requirements */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <Card className="mb-8 border-border">
              <CardContent className="p-6 md:p-8">
                <h2 className="flex items-center gap-2 font-display font-bold text-lg mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {t("careers.reqsLabel")}
                </h2>
                <ul className="space-y-2.5">
                  {pos.reqs.split(", ").map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Apply */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="text-center">
            <a href={`mailto:careers@eaglepost.com?subject=Application: ${pos.title}`}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md">
                <Send className="w-4 h-4 me-2" />
                {t("careers.applyBtn")}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VacancyDetail;
