import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CreditCard, FileText, GraduationCap, Landmark, Banknote,
  ShieldCheck, Scale, Truck, Eye, TrendingUp,
  Globe, MapPin, ScanLine, BarChart3, Users, Package, Boxes, Clock, ArrowRight, CheckCircle2,
  Building2, Briefcase, GraduationCap as GradCap2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import corporateHeroImg from "@/assets/corporate-hero.jpg";
import cardDeliveryImg from "@/assets/corporate-card-delivery.jpg";
import officialDocsImg from "@/assets/corporate-official-docs.jpg";
import financialDocsImg from "@/assets/corporate-financial-docs.jpg";
import educationDocsImg from "@/assets/corporate-education-docs.jpg";
import cashCollectionImg from "@/assets/corporate-cash-collection.jpg";
import portalDesktop from "@/assets/portal-desktop.png";
import portalMobile from "@/assets/portal-mobile.png";
import CorporateHowItWorks from "@/components/corporate/CorporateHowItWorks";
import CorporateContactForm from "@/components/corporate/CorporateContactForm";
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

const Corporate = () => {
  const { t } = useTranslation();

  const whoForList = [
    { label: "Banks & fintech", icon: Landmark },
    { label: "Diplomatic Missions & NGOs", icon: Building2 },
    { label: "Universities & education", icon: GradCap2 },
    { label: "Travel & visa centers", icon: Globe },
  ];

  const whatWeDeliver = [
    {
      icon: CreditCard,
      title: "Bank Cards",
      desc: "Secure delivery of issued cards directly to customers, with verified handover and full tracking.",
      image: cardDeliveryImg,
    },
    {
      icon: FileText,
      title: "Passports & Visas",
      desc: "Delivery of government-issued and travel documents through controlled and authorized processes.",
      image: officialDocsImg,
    },
    {
      icon: Landmark,
      title: "Corporate & Financial Documents",
      desc: "Distribution of bank statements, contracts, support letters, and official communications across all locations.",
      image: financialDocsImg,
    },
    {
      icon: GraduationCap,
      title: "Educational Documents",
      desc: "Secure delivery of certificates, diplomas, and transcripts issued by educational institutions.",
      image: educationDocsImg,
    },
    {
      icon: Banknote,
      title: "Cash Collection",
      desc: "Collection and handling of payments on behalf of institutions:",
      image: cashCollectionImg,
      bullets: [
        "Cash on Delivery (COD)",
        "Cash deposit services (customer → account)",
        "Cash withdrawal services (account → customer)",
      ],
    },
  ];

  const whyEaglePost = [
    { icon: Scale, title: "Legally authorized", desc: "The only entity authorized to deliver official documents under Iraqi postal regulations." },
    { icon: ShieldCheck, title: "Secure and controlled", desc: "Regulated handling with identity verification and confirmed handover." },
    { icon: Truck, title: "No internal logistics required", desc: "No need for drivers, routing, or follow-ups. The entire operation is managed externally." },
    { icon: TrendingUp, title: "Scalable operations", desc: "From small batches to nationwide distribution." },
    { icon: Eye, title: "Full visibility", desc: "Tracking, reporting, and operational control at every stage." },
  ];

  const capabilities = [
    { icon: Globe, title: "Local & international delivery", desc: "Coverage across all Iraqi cities, districts, and remote areas, with international delivery worldwide" },
    { icon: ScanLine, title: "Proof of Delivery (POD)", desc: "Verified handover with recipient confirmation" },
    { icon: BarChart3, title: "Metrics & reporting", desc: "Real-time tracking and operational performance visibility" },
    { icon: Users, title: "Recipient coordination", desc: "Dedicated team to contact recipients and ensure successful delivery" },
    { icon: Package, title: "Order creation support", desc: "Operational support to manage orders on behalf of clients" },
    { icon: Boxes, title: "Packaging services", desc: "Standardized packaging solutions, including Eagle Post branding if required" },
    { icon: Clock, title: "Custom SLA", desc: "Service levels tailored to each client's operational requirements" },
    { icon: FileText, title: "Data cleaning", desc: "We review and correct customer data — phone numbers, addresses, and order details — to ensure successful delivery" },
  ];

  return (
    <>
      <PageHero image={corporateHeroImg}>
        <Link to="/services" className="inline-flex items-center gap-1 text-secondary text-sm font-semibold hover:underline mb-4">
          ← {t("backToServices")}
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">
          Corporate
        </h1>
        <p className="text-primary-foreground/80 max-w-2xl">
          A modern Solution for Enterprises.
        </p>
      </PageHero>

      {/* ──── INTRO ──── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Eagle Post enables corporates and institutions to manage the delivery of important documents and business-critical items <span className="font-bold">across Iraq and worldwide</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              As operations scale across multiple locations, managing internal delivery becomes complex, inconsistent, and difficult to control.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              Eagle Post replaces internal delivery operations with a centralized, regulated system — eliminating the need for in-house logistics, drivers, and coordination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ──── WHO THIS IS FOR ──── */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-3">Who this is for</h2>
            <p className="text-muted-foreground">Organizations that manage high-volume or sensitive deliveries, including:</p>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {whoForList.map(({ label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="relative group rounded-2xl border border-border bg-background p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display font-bold text-sm">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── WHAT WE DELIVER ──── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-3">What we deliver</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eagle Post handles a wide range of sensitive and high-value documents, including:
            </p>
          </motion.div>
          <div className="space-y-20">
            {whatWeDeliver.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "direction-rtl" : ""}`}
              >
                {/* Image */}
                <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={800}
                      height={512}
                      className="w-full h-auto object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-extrabold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
                  {item.bullets && (
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── HOW IT WORKS ──── */}
      <CorporateHowItWorks />

      {/* ──── WHY EAGLE POST ──── */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container max-w-5xl">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-extrabold text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            Why Eagle Post
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {whyEaglePost.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/15 hover:bg-primary-foreground/15 transition-colors"
              >
                <Icon className="w-6 h-6 text-secondary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── CAPABILITIES ──── */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-extrabold text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            What we offer
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──── POWERED BY BUSINESS PORTAL ──── */}
      <section className="py-20 md:py-28 bg-muted overflow-hidden">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Platform</p>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-6">
                Powered by our Business Portal
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All delivery operations are managed through Eagle Post's Business Portal — a centralized system used by SMEs, corporates, and institutions.
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

      {/* ──── CONTACT FORM CTA ──── */}
      <CorporateContactForm />
    </>
  );
};

export default Corporate;
