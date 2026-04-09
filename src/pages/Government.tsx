import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Landmark, FileText, Heart, Building2, Mail, ShieldCheck, ScanLine, ArrowRight, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Government = () => {
  const { t } = useTranslation();

  const whyMatters = [
    { icon: ShieldCheck, text: "Secure handling of sensitive documents" },
    { icon: ScanLine, text: "Verified delivery procedures" },
    { icon: BarChart3, text: "Tracking and confirmation for official items" },
  ];

  const services = [
    { icon: FileText, title: "Birth and Death Registration (BDRO)", desc: "Delivery of birth and death certificates issued through the Directorate of Registration. Documents are handled securely and delivered through Eagle Post's official postal process.", to: "/services/government/birth-death-certificate" },
    { icon: Heart, title: "Marriage Blood Test Results", desc: "Delivery of official marriage blood test results issued through the Directorate of Preventive Health Affairs. Results are transferred securely to citizens through Eagle Post.", to: "/services/government/marriage-blood-test" },
    { icon: Building2, title: "Directorate of Preventive Health Affairs Services", desc: "Secure delivery support for documents and results issued through the Directorate of Preventive Health Affairs.", to: "/services/government/dpha" },
    { icon: Landmark, title: "Residency (Iqama) Card (Foreign Residents)", desc: "Eagle Post provides P.O. Box solutions for foreign residents to receive essential government-issued documents such as residency cards. This ensures documents are delivered to a secure and official mailing address.", to: "/services/po-box" },
    { icon: Mail, title: "P.O. Box for Official Correspondence", desc: "Businesses and institutions can use Eagle Post P.O. Box services as an official mailing address for government correspondence and documentation.", to: "/services/po-box" },
  ];

  return (
    <>
      <PageHero image={heroImages.government}>
            <Link to="/services" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToServices")}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Government</h1>
            <p className="text-primary-foreground/80 max-w-2xl">Making official processes simpler</p>
          </PageHero>

      {/* Hero intro section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-6 text-foreground leading-tight">
                Government services,<br />
                <span className="text-primary">delivered to your door.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                Eagle Post works in partnership with government institutions to make official processes more accessible and convenient for citizens. Instead of returning to offices multiple times or worrying about how to receive important documents, services can be delivered securely through Eagle Post's postal system — saving time and expenses for citizens while reducing the operational load on public institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Our role is to support government procedures with reliable delivery, secure handling, and clear tracking.
              </p>
          </motion.div>

          {/* Why this matters */}
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Why this matters
          </motion.h2>
          <motion.p className="text-muted-foreground mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
            As the official postal partner operating in the Kurdistan Region, Eagle Post provides:
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {whyMatters.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-background hover:shadow-md transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4 + i}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.p className="text-muted-foreground leading-relaxed max-w-4xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={8}>
            This partnership ensures that important documents move through a structured and accountable system.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-4xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Government Services
          </motion.h2>
          <motion.p className="text-muted-foreground mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Below are the government-related services currently supported by Eagle Post.
          </motion.p>
          <div className="space-y-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 2}>
                <Card className="border-border hover:shadow-lg transition-all">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                      <Link to={s.to} className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors">
                        Learn more <ArrowRight className="w-4 h-4 ms-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Government;
