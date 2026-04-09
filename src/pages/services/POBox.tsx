import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, ShieldCheck, Clock, Key, Bell, Truck, Users, Building2, FileText, Package, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const POBox = () => {
  const { t } = useTranslation();

  const whoFor = [
    "Individuals who want private, secure mail handling",
    "Businesses and small shops that need a professional mailing address",
    "Companies with remote teams using one central address",
    "Expats and travelers who need continued access to important mail",
  ];

  const useCases = [
    { icon: Package, title: "Receiving mail and packages", desc: "Use your P.O. Box as your official mailing address for letters, bills, parcels, and personal shipments. Simply share your P.O. Box details with senders." },
    { icon: FileText, title: "Government correspondence", desc: "Many government-issued documents can be delivered directly to your P.O. Box. This includes items such as passports, ID-related documents, tax letters, or university admissions." },
    { icon: Mail, title: "Sending to another Eagle Post P.O. Box", desc: "If the recipient also has an Eagle Post P.O. Box, you can send mail directly using their P.O. Box number for faster and safer delivery within the Eagle Post network." },
    { icon: Building2, title: "Business correspondence", desc: "Keep company mail separate from personal mail. A P.O. Box provides a central location for supplier shipments, customer returns, invoices, and official documents." },
  ];

  const whyChoose = [
    "Secure access using your unique key or access code",
    "Safe storage inside the branch until collection",
    "Instant notifications when mail arrives",
    "Optional forwarding from your P.O. Box to your door",
    "An official address you can rely on",
  ];

  return (
    <>
      <PageHero image={heroImages.poBox}>
            <Link to="/services" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToServices")}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">P.O. Box Services</h1>
            <p className="text-primary-foreground/80 max-w-2xl">Your personal, secure mailbox at Eagle Post.</p>
          </PageHero>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">What a P.O. Box is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">A P.O. Box is your personal, secure mailbox at Eagle Post. Instead of relying on informal or unclear home addresses, your mail and packages are delivered to an official, protected location, where you can collect them at your convenience or request forwarding to your door.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-3">Why do people use a P.O. Box</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">A P.O. Box gives you a fixed, reliable address — even when home delivery isn't practical. You receive a notification as soon as something arrives, and your mail remains safely stored until you decide what to do next.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <h3 className="text-xl font-display font-bold mb-3">Who this service is for</h3>
            <ul className="space-y-2 mb-8">
              {whoFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-4xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            What you can use your P.O. Box for
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">How it works</h2>
            <p className="text-muted-foreground text-sm mb-3">Provide your P.O. Box address using the following format:</p>
            <ul className="space-y-1 text-sm text-muted-foreground mb-4">
              <li>• Recipient name (your name or company name)</li>
              <li>• P.O. Box number</li>
              <li>• City, ZIP code</li>
              <li>• Country</li>
            </ul>
            <div className="p-4 rounded-xl bg-muted border border-border mb-8">
              <p className="text-sm font-semibold mb-1">Example:</p>
              <p className="text-sm text-muted-foreground">Adam Ali<br />P.O. Box ERB-12345<br />Erbil, 44001<br />Iraq</p>
            </div>
            <p className="text-sm text-muted-foreground mb-8">All mail sent to this address will be delivered directly to your Eagle Post P.O. Box.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-4">Why choose an Eagle Post P.O. Box</h3>
            <ul className="space-y-2 mb-8">
              {whyChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <Link to="/branches">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold">
                Apply for a P.O. Box — visit one of our branches <ArrowRight className="w-4 h-4 ms-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default POBox;
