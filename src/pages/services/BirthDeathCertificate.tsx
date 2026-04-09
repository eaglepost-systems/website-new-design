import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ArrowRight, CheckCircle2, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const BirthDeathCertificate = () => {
  const { t } = useTranslation();

  const documents = [
    { title: "Birth Registration Extract", arabic: "صورة قيد ولادة" },
    { title: "Death Registration Extract", arabic: "صورة قيد وفاة" },
    { title: "Correction or Amendment Documents", arabic: "صحة الصدور" },
  ];

  const steps = [
    { title: "Visit the BDRO office", desc: "The customer visits the Birth and Death Registration Office (BDRO) and submits a request for any of the supported documents." },
    { title: "Choose your delivery option", desc: "At the office, you are presented with the Eagle Post express delivery option — your document is finalized and delivered within a maximum of 4 days." },
    { title: "Document is finalized & delivered", desc: "Your document is processed, finalized, and delivered directly to your home or any location you specify." },
  ];

  return (
    <>
      <PageHero image={heroImages.birthDeath}>
        <Link to="/services/government" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToGovServices")}</Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Birth & Death Registration Delivery</h1>
        <p className="text-primary-foreground/80 max-w-2xl">Express processing and delivery of birth and death registration documents — finalized and delivered to your door.</p>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">What this service is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Eagle Post partners with the Birth and Death Registration Office (BDRO) to offer express processing and delivery of official registration documents — for both <strong>birth and death</strong> records.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Instead of submitting a request and waiting over 2 weeks only to return and pick it up yourself, Eagle Post makes it express: your document is finalized within a couple of days and delivered directly to your home or any location you choose.
            </p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-8">
              <p className="text-sm font-semibold text-foreground">
                <strong>This is an optional service.</strong> Customers who prefer the standard process can still wait and collect their documents in person from the BDRO office.
              </p>
            </div>
          </motion.div>

          {/* Supported documents */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-4">Supported Documents</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {documents.map((doc, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-5 flex flex-col items-center text-center">
                    <FileText className="w-8 h-8 text-primary mb-3" />
                    <p className="font-display font-bold text-sm mb-1">{doc.title}</p>
                    <p className="text-xs text-muted-foreground" dir="rtl">{doc.arabic}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Express vs Standard comparison */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-4xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Your delivery options
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Card className="border-primary border-2 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-lg text-primary">Express Delivery</h3>
                  </div>
                  <p className="text-sm font-semibold mb-2">via Eagle Post</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Delivered within maximum 4 days</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Delivered to home or any location</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> No return trip needed</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
              <Card className="border-border h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <h3 className="font-display font-bold text-lg">Standard Process</h3>
                  </div>
                  <p className="text-sm font-semibold mb-2">without Eagle Post</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Wait over 2 weeks for processing</li>
                    <li className="flex items-start gap-2"><span className="mt-0.5">•</span> Return to BDRO to pick up in person</li>
                    
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            How to request this service
          </motion.h2>
          <div className="space-y-4 mb-10">
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

      {/* Service Fee & Summary */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-4xl">
          <motion.div className="p-6 rounded-xl bg-background border border-border mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h3 className="font-display font-bold text-xl mb-3">Service Fee</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Delivery fee ranges between 10,000 – 15,000 IQD within the Kurdistan Region</li>
              <li>• This is a one-time payment</li>
              <li>• The fee is paid only to the delivery driver upon arrival</li>
              <li>• No delivery-related payment should be made at the BDRO office</li>
            </ul>
          </motion.div>

          <motion.div className="p-6 rounded-xl bg-primary/5 border border-primary/20 mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="font-display font-bold mb-2">What you are really getting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">This is not just delivery. It is an express processing service that turns a 2+ week wait into a couple of days, eliminates return trips, and delivers your official documents directly to you — for both birth and death registration.</p>
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

export default BirthDeathCertificate;
