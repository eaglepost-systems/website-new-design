import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, MapPin, Clock, ShieldCheck, Smartphone, Building2, FileText, Gift, ShoppingCart, Ruler, ArrowRight, ClipboardList, Scan, Route, PackageCheck } from "lucide-react";
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

const LocalDeliveries = () => {
  const { t } = useTranslation();

  const howItWorksSteps = [
    {
      icon: ClipboardList,
      num: "01",
      title: "Create your order",
      desc: "Open the Eagle Post app or visit a branch. Enter package details, pickup address, and delivery address.",
    },
    {
      icon: Scan,
      num: "02",
      title: "Package pickup",
      desc: "A courier collects your package from your location. Items are scanned and entered into the tracking system.",
    },
    {
      icon: Route,
      num: "03",
      title: "Sorting & dispatch",
      desc: "Your package is sorted at our facility and assigned to the optimal delivery route.",
    },
    {
      icon: PackageCheck,
      num: "04",
      title: "Delivery & confirmation",
      desc: "The recipient is contacted, identity is verified, and the package is delivered with digital confirmation.",
    },
  ];

  return (
    <>
      <PageHero image={heroImages.localDeliveries}>
            <Link to="/services" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToServices")}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Local Deliveries</h1>
            <p className="text-primary-foreground/80 max-w-2xl">Send and receive packages anywhere within Iraq through Eagle Post's official postal network.</p>
          </PageHero>

      {/* What this service is */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">What this service is</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Local Deliveries allows individuals to send and receive packages and documents anywhere within Iraq through Eagle Post's official postal network.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">Whether you're sending something within your city or to another governorate, Eagle Post handles pickup, tracking, and delivery under a defined and accountable process.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-3">Who this service is for</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">This service is for individuals sending personal items or documents.</p>
            <p className="text-sm text-muted-foreground italic">(For selling products or cash-on-delivery services, please refer to the <Link to="/services/business-portal" className="text-primary font-semibold hover:underline">Business Portal</Link>.)</p>
          </motion.div>
        </div>
      </section>

      {/* How it works — visual steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-5xl">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-3">How it works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From order to delivery — here's how your package moves through our system.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative bg-background rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
              >
                {/* Connector line */}
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
                    <li>Open the Pickup & Delivery section in the Eagle Post app</li>
                    <li>Choose your package size</li>
                    <li>Enter the pickup and delivery addresses</li>
                    <li>Submit your request</li>
                  </ol>
                  <p className="text-sm text-muted-foreground mt-4">Once submitted, you'll receive an order number. Your package can be tracked at any time through the app or website.</p>
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
                  <p className="text-sm text-muted-foreground">You can also send your package directly from any Eagle Post branch. Our staff will accept your request, assign an order number, and prepare it for delivery.</p>
                  <Link to="/branches" className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors mt-4">
                    Find a Branch <ArrowRight className="w-4 h-4 ms-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you can send */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            What you can send
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Package, label: "Personal packages" },
              { icon: FileText, label: "Documents and paperwork" },
              { icon: Gift, label: "Gifts and everyday items" },
            ].map((item, i) => (
              <motion.div key={item.label} className="flex items-center gap-3 p-4 rounded-xl border border-border" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
            <h3 className="text-xl font-display font-bold mb-3">Tracking and confirmation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Every local delivery is assigned an order number. Use this number to track your delivery at any time through the Eagle Post app or website, and receive confirmation once delivery is completed.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}>
            <h3 className="text-xl font-display font-bold mb-3">Coverage</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Local Deliveries are available across all of Iraq.</p>
          </motion.div>

          <motion.div className="p-6 rounded-xl bg-muted border border-border" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={6}>
            <h3 className="font-display font-bold mb-3">Important guidelines</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Maximum size: up to 250 cm</li>
              <li>• Maximum weight: up to 30 kg</li>
              <li>• Additional item restrictions may apply.</li>
            </ul>
          </motion.div>

          <motion.div className="mt-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={7}>
            <Button size="lg" className="bg-primary text-primary-foreground font-bold opacity-50 cursor-not-allowed" disabled>
              Check prices <ArrowRight className="w-4 h-4 ms-2" />
            </Button>
            <p className="text-xs text-muted-foreground mt-2">Coming soon</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LocalDeliveries;
