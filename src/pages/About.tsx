import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Building2, Landmark, ShoppingCart, GraduationCap, Shield, ArrowRight, ShieldCheck, FileText, ScanLine, Users, Headphones, User, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => {
  const { t } = useTranslation();

  const diffCards = [
    { icon: FileText, title: t("about.diff1"), desc: "All services follow government-approved postal procedures and regulations across the Kurdistan Region." },
    { icon: ScanLine, title: t("about.diff3"), desc: "Every item is logged, scanned, and tracked from acceptance to delivery, with clear status updates." },
    { icon: Users, title: t("about.diff4"), desc: "With physical branches and trained delivery teams, your shipment is handled locally — not anonymously." },
    { icon: Headphones, title: t("about.diff5"), desc: "Our customer support team is available to help you follow up on any delivery question or concern." },
    { icon: Building2, title: t("about.diff2"), desc: "Eagle Post is authorized to handle official government documents through approved postal channels." },
  ];

  const sectors = [
    { icon: Landmark, label: t("about.sectorGov") },
    { icon: Building2, label: t("about.sectorBank") },
    { icon: ShoppingCart, label: t("about.sectorEcom") },
    { icon: GraduationCap, label: t("about.sectorEdu") },
    { icon: Shield, label: t("about.sectorIns") },
  ];

  const servingCards = [
    {
      icon: User,
      title: "Citizens",
      desc: "Reliable delivery for individuals — send and receive packages, documents, and more across Iraq and internationally.",
    },
    {
      icon: Briefcase,
      title: "Businesses",
      desc: "Scalable logistics solutions for merchants, SMEs, and enterprises with dedicated portals and bulk delivery options.",
    },
    {
      icon: Landmark,
      title: "Government Institutions",
      desc: "Official document handling through approved postal channels — secure, accountable, and fully traceable.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero image={heroImages.about}>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("about.title")}
          </motion.h1>
          <motion.p
            className="text-primary-foreground/80 max-w-2xl text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("about.intro1")}
          </motion.p>
        </PageHero>

      {/* Intro + Why Exists */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <motion.p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            {t("about.intro2")}
          </motion.p>

          {/* Why Eagle Post exists — standalone */}
          <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">{t("about.whyExistsTitle")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-3 max-w-3xl">{t("about.whyExists1")}</p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl" dangerouslySetInnerHTML={{ __html: t("about.whyExists2") }} />
          </motion.div>

          {/* What makes Eagle Post different — card grid */}
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            {t("about.differentTitle")}
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-5 mb-16 [&>*]:w-full [&>*]:sm:w-[calc(50%-0.625rem)]">
            {diffCards.map((card, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 3}>
                <Card className="h-full border border-border bg-background shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <card.icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-display font-extrabold mb-3">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving — PostNord-inspired image blocks */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-6xl">
          <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold mb-4">{t("about.servingTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">{t("about.servingDesc")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servingCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="text-center p-8 rounded-2xl bg-background border border-border"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <card.icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-display font-extrabold mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            {t("about.trustedTitle")}
          </motion.h2>
          <motion.p className="text-muted-foreground mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            {t("about.trustedDesc")}
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {sectors.map((s, i) => (
              <motion.div key={s.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted hover:bg-primary/5 transition-colors" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2 + i}>
                <s.icon className="w-8 h-8 text-primary" />
                <span className="text-sm font-semibold text-foreground">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-lg">{t("about.operatesTitle")}</p>
          <Link to="/about/how-we-operate">
            <button className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg font-bold hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
              {t("nav.howWeOperate")} <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
