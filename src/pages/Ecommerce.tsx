import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, Package, Truck, ShieldCheck, Headphones, Zap, BadgeDollarSign, CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import portalDesktop from "@/assets/portal-desktop.png";
import portalMobile from "@/assets/portal-mobile.png";
import heroImg from "@/assets/ecommerce-hero.jpg";
import packagesImg from "@/assets/ecommerce-packages.jpg";
import pickupImg from "@/assets/ecommerce-pickup.jpg";
import PageHero from "@/components/PageHero";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Ecommerce = () => {
  const { t } = useTranslation();

  const whoFor = [
    { label: "Online sellers", icon: Package },
    { label: "Retail shops", icon: Truck },
    { label: "E-commerce brands", icon: Zap },
  ];

  const whatYouCanDo = [
    "Create and manage deliveries",
    "Deliver across Kurdistan Region and Iraq",
    "Collect cash on delivery (COD)",
    "Track all shipments in real-time",
  ];

  const howItWorks = [
    { num: "01", title: "Create your order", desc: "Enter shipment details through the system." },
    { num: "02", title: "Request pickup", desc: "We collect directly from your location." },
    { num: "03", title: "We deliver", desc: "Shipments are delivered to your customer's doorstep." },
  ];

  const whyChoose = [
    { text: "Official, government-backed delivery operations — enabling trust and reliability", icon: ShieldCheck },
    { text: "COD with no withdraw fee", icon: Package },
    { text: "Professional delivery experience that builds customer trust and makes your business credible", icon: Truck },
    { text: "Better delivery pricing for businesses", icon: BadgeDollarSign },
    { text: "Dedicated customer support for every order", icon: Headphones },
    { text: "Easy to use delivery system", icon: CircleCheckBig },
  ];

  return (
    <>
      <PageHero image={heroImg}>
        <Link to="/services/corporate" className="inline-flex items-center gap-1 text-secondary text-sm font-semibold hover:underline mb-4">
          ← {t("backToServices")}
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">
          E-commerce
        </h1>
        <p className="text-primary-foreground/80 max-w-2xl">
          Sell your products and get them delivered to your customers without handling logistics.
        </p>
      </PageHero>

      {/* ──── INTRO SPLIT ──── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-6 leading-tight">
                We handle the entire delivery process
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Eagle Post takes over the entire process — from pickup to delivery and cash collection — so your orders move smoothly, all across Iraq.
              </p>
              <div className="space-y-4">
                {[
                  "Pickup directly from your location",
                  "Delivery to your customer's doorstep",
                  "Cash collection on delivery (COD), with flexible withdrawal whenever you need it",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={packagesImg} alt="E-commerce packages" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── CENTRALIZED SYSTEM BANNER ──── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img src={pickupImg} alt="Delivery operations" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={720} />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container relative z-10 max-w-4xl text-center">
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            You get access to a centralized system, dedicated customer support, and business-level delivery rates — without managing drivers, routing, or follow-ups.
          </motion.p>
        </div>
      </section>

      {/* ──── WHO THIS IS FOR ──── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-extrabold text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Who this is for
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {whoFor.map(({ label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="relative group rounded-2xl border border-border bg-card p-8 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-display font-bold text-lg">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── WHAT YOU CAN DO ──── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-8 text-center">
              What you can do
            </h2>
            <div className="space-y-4">
              {whatYouCanDo.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 bg-background rounded-xl p-4 shadow-sm border border-border"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── HOW IT WORKS ──── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-extrabold text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            How it works
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}
              >
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display font-extrabold text-xl mx-auto mb-5 relative z-10 shadow-lg shadow-primary/20">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── WHY BUSINESSES CHOOSE ──── */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-5xl">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-extrabold text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Why businesses choose Eagle Post
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {whyChoose.map(({ text, icon: Icon }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/15 hover:bg-primary-foreground/15 transition-colors"
              >
                <Icon className="w-6 h-6 text-secondary mb-4" />
                <p className="text-sm text-primary-foreground/90 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── POWERED BY BUSINESS PORTAL ──── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Platform</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-6">
                Powered by our Business Portal
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All deliveries are managed through Eagle Post's Business Portal — a centralized system used by businesses, corporates, and institutions.
              </p>
              <p className="text-sm text-foreground mb-4 font-bold">The portal enables:</p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                {[
                  "Order creation and shipment management",
                  "Real-time tracking and status updates",
                  "Access to delivery data and performance reporting",
                  "Operational control across multiple locations",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services/business-portal" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
                Learn more about the Business Portal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="relative flex items-end justify-center lg:justify-end min-h-[300px] md:min-h-[360px] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ perspective: "1200px" }}
            >
              <div className="relative w-full max-w-[260px] sm:max-w-[400px] md:max-w-[580px] transition-transform duration-700 ease-out group-hover:-translate-x-4">
                <div style={{ transform: "rotateY(-6deg) rotateX(2deg)" }}>
                  <div className="absolute -inset-4 bg-primary/15 rounded-2xl blur-2xl -z-10" />
                  <div className="rounded-t-lg bg-foreground/90 p-1.5 pb-0 shadow-[0_25px_60px_-12px_hsl(224_100%_30%/0.35)]">
                    <div className="flex gap-1 mb-1.5 px-1">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <img src={portalDesktop} alt="Eagle Post Business Portal Dashboard" className="w-full rounded-sm" />
                  </div>
                  <div className="h-3 bg-foreground/80 rounded-b-sm" />
                  <div className="h-1.5 bg-foreground/60 mx-[15%] rounded-b-lg" />
                </div>
              </div>
              <div className="absolute -bottom-6 right-0 sm:right-[-20px] md:right-[-40px] w-[28%] max-w-[140px] sm:max-w-[155px] md:max-w-[170px] z-10 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:-translate-y-2">
                <div style={{ transform: "rotateY(-8deg) rotateX(-2deg)" }}>
                  <div className="absolute -inset-3 bg-secondary/20 rounded-2xl blur-xl -z-10" />
                  <div className="bg-foreground/90 rounded-[1.2rem] p-1.5 shadow-[0_20px_50px_-10px_hsl(224_100%_30%/0.4)]">
                    <div className="w-8 h-1 bg-foreground/60 rounded-full mx-auto mb-1" />
                    <img src={portalMobile} alt="Eagle Post Mobile App" className="w-full rounded-[0.8rem]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(224_100%_20%)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 max-w-3xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-extrabold text-primary-foreground mb-5"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Start delivering with ease
          </motion.h2>
          <motion.p className="text-lg text-primary-foreground/80 mb-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            Focus on selling — we handle the delivery.
          </motion.p>
          <motion.p className="text-lg text-primary-foreground/80 mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Register your business and start shipping today.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-xl shadow-secondary/20 px-8 py-6 text-base">
                <Phone className="w-5 h-5 me-2" />
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Ecommerce;
