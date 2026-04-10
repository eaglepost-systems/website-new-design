import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Clock, Smartphone, Building2, FileText, ArrowRight, ClipboardList, Scan, Plane, PackageCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/appLinks";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const International = () => {
  const { t } = useTranslation();

  const howItWorksSteps = [
    {
      icon: ClipboardList,
      num: "01",
      title: "Create your shipment",
      desc: "Enter package details, dimensions, and the international destination through our app or at a branch.",
    },
    {
      icon: Scan,
      num: "02",
      title: "Package collection",
      desc: "A courier picks up your package for free, or you can drop it off at any Eagle Post branch.",
    },
    {
      icon: Plane,
      num: "03",
      title: "International dispatch",
      desc: "Your shipment is processed, cleared, and dispatched to the destination country through our network.",
    },
    {
      icon: PackageCheck,
      num: "04",
      title: "Delivery & confirmation",
      desc: "The package is delivered to the recipient. You receive tracking updates and delivery confirmation.",
    },
  ];

  return (
    <>
      <PageHero image={heroImages.international}>
            <Link to="/services" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToServices")}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Express International Delivery</h1>
            <p className="text-primary-foreground/80 max-w-2xl">Send packages and documents from Iraq to destinations worldwide through Eagle Post's international delivery network.</p>
          </PageHero>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">What this service is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Express International Delivery allows individuals to send packages and documents from Iraq to destinations worldwide through Eagle Post's international delivery network.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">Shipments can arrive in as little as 7 days, depending on the destination and clearance requirements.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-3">Who this service is for</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">This service is for individuals sending documents or personal packages internationally.</p>
            <p className="text-sm text-muted-foreground italic">(For selling products or cash-on-delivery services, please refer to the <Link to="/services/business-portal" className="text-primary font-semibold hover:underline">Business Portal</Link>.)</p>
          </motion.div>
        </div>
      </section>

      {/* How it works — visual steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-5xl">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-3">How it works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From pickup to international delivery — a clear, trackable process.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative bg-background rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
              >
                {i < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-border z-10" />
                )}
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  <step.icon className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-primary mb-2">Step {step.num}</p>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Two options below */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}>
              <Card className="h-full border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3">Option 1 — Request pickup from our app (free)</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Open the International Pickup & Delivery section in the Eagle Post app</li>
                    <li>Choose your package size & enter package dimensions</li>
                    <li>Enter the pickup address and international destination</li>
                    <li>Submit your request</li>
                  </ol>
                  <p className="text-sm text-muted-foreground mt-4">Once submitted, you'll receive an order number. You can track your shipment at any time through the app or website.</p>
                  <p className="text-sm text-muted-foreground mt-2">A courier will collect your package from your location free of charge.</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm hover:underline">App Store</a>
                    <span className="text-muted-foreground">·</span>
                    <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm hover:underline">Google Play</a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={6}>
              <Card className="h-full border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3">Option 2 — Visit a branch</h3>
                  <p className="text-sm text-muted-foreground">You can also send international shipments directly from any Eagle Post branch. Our staff will accept your item and help you prepare the order, assign an order number, and prepare it for international dispatch.</p>
                  <Link to="/branches" className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors mt-4">
                    Find a Branch <ArrowRight className="w-4 h-4 ms-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h3 className="text-xl font-display font-bold mb-3">What you can send internationally</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">International shipments must comply with UPU (Universal Postal Union) regulations and destination-country rules.</p>
            <Link to="/guidelines" className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors mb-8">
              View UPU item guidelines <ArrowRight className="w-4 h-4 ms-1" />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-3">Tracking and confirmation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Every international shipment is assigned an order number. Use this number to track your shipment through the Eagle Post app or website and receive confirmation once delivery is completed.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <h3 className="text-xl font-display font-bold mb-3">Coverage</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">International delivery is available to destinations worldwide, subject to country-specific regulations.</p>
          </motion.div>

          <motion.div className="mt-4 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
            <Button size="lg" className="bg-primary text-primary-foreground font-bold opacity-50 cursor-not-allowed" disabled>
              Check international prices <ArrowRight className="w-4 h-4 ms-2" />
            </Button>
            <p className="text-xs text-muted-foreground mt-2">Coming soon</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default International;
