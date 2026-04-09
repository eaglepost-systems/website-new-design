import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, FileText, ShieldCheck, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const DPHA = () => {
  const { t } = useTranslation();

  const documents = [
    "Health Card",
    "Health Certificate",
    "Health Confirmation (for marriage or Iqama purposes)",
  ];

  const steps = [
    { title: "Applicant stage", desc: "The applicant's blood test result is positive, or the applicant requires issuance of a Health Card or Health Certificate. The applicant proceeds to DPHA for testing or further medical evaluation. The required form is completed and submitted to DPHA." },
    { title: "Delivery order creation", desc: "The applicant visits the Eagle Post Desk at DPHA to create a delivery order and register the request in the system." },
    { title: "Testing stage", desc: "The applicant receives an invoice and provides required information. Applicant data is sent digitally to the Lab Center. The applicant submits a blood sample at the Lab Center. (In some cases, testing may be conducted at an external location such as Rizgary Hospital.)" },
    { title: "Validation", desc: "The Lab Center conducts the test and sends digital results to DPHA. DPHA validates the results. If additional testing or treatment is required, the applicant is referred to a doctor or additional testing facility." },
    { title: "Result issuance & delivery", desc: "Once validated, DPHA issues the appropriate document (Health Card, Health Certificate, or Health Confirmation). DPHA notifies Eagle Post to collect the finalized result. Eagle Post then delivers the document directly to the applicant, or to the relevant authority (e.g., Marriage Office or Iqama Office)." },
  ];

  return (
    <>
      <PageHero image={heroImages.dpha}>
            <Link to="/services/government" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToGovServices")}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Directorate of Preventive Health Affairs (DPHA) Delivery</h1>
            <p className="text-primary-foreground/80 max-w-2xl">Secure delivery of official health documents issued by DPHA.</p>
          </PageHero>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">What this service is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Eagle Post supports the delivery of official documents issued by the Directorate of Preventive Health Affairs (DPHA). This includes:</p>
            <ul className="space-y-2 mb-8">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span> {doc}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">Eagle Post coordinates the secure collection and delivery of finalized documents once the medical process is completed and validated by DPHA.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-4xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            How the process works
          </motion.h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-background" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</div>
                <div>
                  <h4 className="font-display font-bold text-sm mb-0.5">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">Why this service matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Instead of returning multiple times to check on test results or document issuance, applicants can:</p>
            <ul className="space-y-2 mb-8">
              {[
                "Create a delivery request once",
                "Be notified when the document is ready",
                "Receive the document directly or have it forwarded to the relevant authority",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mb-8">This reduces unnecessary visits and waiting, while maintaining secure handling of sensitive medical documentation.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-3">Tracking</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Each delivery request is assigned an order number. Applicants can track the delivery status through the Eagle Post app or website.</p>
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

export default DPHA;
