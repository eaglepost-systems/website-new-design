import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Clock, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const MarriageBloodTest = () => {
  const { t } = useTranslation();

  const steps = [
    "Visit the center with required documents — Applicants arrive with the court support letter and required paperwork.",
    "Create your Eagle Post delivery order — After completing paperwork at the printing shop, you visit the Eagle Post desk to create the official delivery request.",
    "Testing and verification — The Blood Test Center verifies the Eagle Post delivery invoice and proceeds with testing, fingerprints, and the mandatory training course.",
    "Eagle Post collects your results — Once ready, Eagle Post collects the blood test result and course participation certificate directly from the center.",
    "We prepare and deliver your file — The documents are verified, compiled, and delivered directly to your address.",
  ];

  const benefits = [
    "You do not need to go back to the center after completing the test",
    "You are notified when your documents are ready",
    "Your results are delivered directly to your address",
    "You avoid waiting in lines to check status or collect documents",
  ];

  return (
    <>
      <PageHero image={heroImages.bloodTest}>
            <Link to="/services/government" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToGovServices")}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Marriage Blood Test Result Delivery</h1>
            <p className="text-primary-foreground/80 max-w-2xl">Secure delivery of official marriage blood test results and course participation certificates.</p>
          </PageHero>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">What this service is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Eagle Post delivers official marriage blood test results and course participation certificates directly to applicants, in coordination with the Directorate of Preventive Health Affairs.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">Instead of returning to the center to collect your documents, Eagle Post manages the secure delivery to your address.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-4xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            How the process works
          </motion.h2>
          <div className="space-y-4">
            {steps.map((step, i) => {
              const [title, desc] = step.split(" — ");
              return (
                <motion.div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-background" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</div>
                  <div>
                    <h4 className="font-display font-bold text-sm mb-0.5">{title}</h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.p className="text-sm text-muted-foreground mt-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={6}>
            Delivery is completed daily, with tracking available throughout the process.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">Why this makes a difference</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Previously, applicants had no clear notification of when their results were ready. Many had to return multiple times just to check if the documents were completed.</p>
            <p className="text-muted-foreground font-semibold mb-3">Now:</p>
            <ul className="space-y-2 mb-6">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mb-8">This removes unnecessary travel and eliminates repeated visits and waiting.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-3">Tracking</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Each request is assigned an order number. You can track your delivery at any time through the Eagle Post app or website.</p>
          </motion.div>

          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <Link to="/track">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold">
                Track your delivery <ArrowRight className="w-4 h-4 ms-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MarriageBloodTest;
