import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, BarChart3, Package, Users, Truck, CreditCard, ShieldCheck, Clock, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import portalMobile from "@/assets/portal-mobile.png";
import portalDesktop from "@/assets/portal-desktop.png";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const BusinessPortal = () => {
  const { t } = useTranslation();

  const steps = [
    { title: "Create a business account", desc: "Register for a Business Portal account through Eagle Post. Once approved, you'll gain access to the portal." },
    { title: "Create delivery orders", desc: "For each order, enter: customer name and phone number, delivery address, and package details. The system generates an order number and shipping label." },
    { title: "Prepare your packages", desc: "Attach the shipping label to the package. Orders are now ready for pickup." },
    { title: "We pick up and deliver", desc: "An Eagle Post courier collects the packages from your location and delivers them to your customers." },
    { title: "Cash collection (COD)", desc: "If cash-on-delivery is enabled, Eagle Post collects payment from the customer and processes it according to your agreement." },
  ];

  const whoFor = [
    "Small and medium businesses (SMEs)",
    "Online sellers",
    "Companies needing regular deliveries",
  ];

  const whyChoose = [
    "Official, government-backed delivery operations — enabling trust and reliability",
    "Door-to-door pickup and delivery",
    "COD handling through a defined process",
    "Dedicated customer support for every order",
    "Tutorial videos and onboarding guides for faster team adaptation",
    "An easy-to-use system that meets custom demands",
  ];

  return (
    <>
      <PageHero image={heroImages.businessPortal}>
            <Link to="/services" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToServices")}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Business Portal</h1>
            <p className="text-primary-foreground/80 max-w-2xl">A delivery management system built for businesses, institutions, and online sellers.</p>
          </PageHero>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className="lg:-ml-8 xl:-ml-12 overflow-hidden">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">What the Business Portal is</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">The Eagle Post Business Portal is a delivery management system built for businesses, institutions, and online sellers. It allows businesses to create delivery orders, track shipments, and manage cash-on-delivery — all in one place.</p>
                <p className="text-muted-foreground leading-relaxed mb-8">Eagle Post handles pickup, delivery, and collection, so you can focus on running your business.</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
                <h3 className="text-xl font-display font-bold mb-3">Who this service is for</h3>
                <ul className="space-y-2 mb-2">
                  {whoFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic">(This service is not intended for personal or one-time deliveries.)</p>
              </motion.div>
            </div>

            {/* Device mockups side */}
            <motion.div
              className="relative flex items-end justify-center lg:justify-end min-h-[300px] md:min-h-[360px] group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ perspective: "1200px" }}
            >
              {/* Laptop mockup */}
              <div className="relative w-full max-w-[260px] sm:max-w-[400px] md:max-w-[580px] transition-transform duration-700 ease-out group-hover:-translate-x-4">
                <div style={{ transform: "rotateY(-6deg) rotateX(2deg)" }}>
                  {/* Glow behind laptop */}
                  <div className="absolute -inset-4 bg-primary/15 rounded-2xl blur-2xl -z-10"></div>
                  <div className="rounded-t-lg bg-foreground/90 p-1.5 pb-0 shadow-[0_25px_60px_-12px_hsl(224_100%_30%/0.35)]">
                    <div className="flex gap-1 mb-1.5 px-1">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    </div>
                    <img
                      src={portalDesktop}
                      alt="Eagle Post Business Portal Dashboard"
                      className="w-full rounded-sm"
                    />
                  </div>
                  <div className="h-3 bg-foreground/80 rounded-b-sm"></div>
                  <div className="h-1.5 bg-foreground/60 mx-[15%] rounded-b-lg"></div>
                </div>
              </div>

              {/* Phone mockup — right side, moves away on hover */}
              <div className="absolute -bottom-6 right-0 sm:right-[-20px] md:right-[-40px] w-[28%] max-w-[140px] sm:max-w-[155px] md:max-w-[170px] z-10 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:-translate-y-2">
                <div style={{ transform: "rotateY(-8deg) rotateX(-2deg)" }}>
                  {/* Glow behind phone */}
                  <div className="absolute -inset-3 bg-secondary/20 rounded-2xl blur-xl -z-10"></div>
                  <div className="bg-foreground/90 rounded-[1.2rem] p-1.5 shadow-[0_20px_50px_-10px_hsl(224_100%_30%/0.4)]">
                    <div className="w-8 h-1 bg-foreground/60 rounded-full mx-auto mb-1"></div>
                    <img
                      src={portalMobile}
                      alt="Eagle Post Mobile App"
                      className="w-full rounded-[0.8rem]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted overflow-hidden">
        <div className="container max-w-5xl">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            How it works
          </motion.h2>
          <motion.p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.5}>
            From signup to delivery — here's the journey your packages take.
          </motion.p>

          {/* Desktop winding road */}
          <div className="hidden md:block relative" style={{ height: 780 }}>
            {/* SVG winding road */}
            <svg viewBox="0 0 900 780" fill="none" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
              {/* Road shadow */}
              <path
                d="M 150 60 C 150 60, 750 60, 750 160 C 750 260, 150 260, 150 360 C 150 460, 750 460, 750 560 C 750 660, 400 660, 400 740"
                stroke="hsl(var(--foreground) / 0.08)"
                strokeWidth="56"
                strokeLinecap="round"
                fill="none"
              />
              {/* Road body */}
              <path
                d="M 150 60 C 150 60, 750 60, 750 160 C 750 260, 150 260, 150 360 C 150 460, 750 460, 750 560 C 750 660, 400 660, 400 740"
                stroke="hsl(var(--foreground) / 0.75)"
                strokeWidth="44"
                strokeLinecap="round"
                fill="none"
              />
              {/* Dashed center line */}
              <path
                d="M 150 60 C 150 60, 750 60, 750 160 C 750 260, 150 260, 150 360 C 150 460, 750 460, 750 560 C 750 660, 400 660, 400 740"
                stroke="hsl(var(--background))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="16 12"
                fill="none"
              />
              {/* Arrow at bottom */}
              <polygon points="382,740 400,770 418,740" fill="hsl(var(--foreground) / 0.75)" />
            </svg>

            {/* Step pins + text positioned along the road */}
            {[
              { x: "10%", y: "2%", textSide: "right" as const },
              { x: "42%", y: "4%", textSide: "right" as const },
              { x: "76%", y: "18%", textSide: "right" as const },
              { x: "22%", y: "40%", textSide: "right" as const },
              { x: "76%", y: "60%", textSide: "left" as const },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute z-10"
                style={{ left: pos.x, top: pos.y }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i + 0.3, duration: 0.5 }}
              >
                <div className="flex flex-col items-center">
                  {/* Map pin */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30 ring-4 ring-muted">
                      {i + 1}
                    </div>
                    {/* Pin tail */}
                    <div className="w-3 h-3 bg-primary rotate-45 mx-auto -mt-1.5 rounded-br-sm" />
                  </div>
                  {/* Text card with background for visibility */}
                  <div className={`absolute top-[4.5rem] ${pos.textSide === "left" ? "right-0 text-right" : "left-0 text-left"} w-60 bg-background/90 backdrop-blur-sm rounded-xl border border-border p-3 shadow-sm`}>
                    <h4 className="font-display font-bold text-sm mb-1 text-foreground">{steps[i].title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{steps[i].desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Truck at the end of the road */}
            <motion.div
              className="absolute z-20"
              style={{ left: "42%", top: "90%" }}
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-xl shadow-secondary/30">
                <Truck className="w-6 h-6" />
              </div>
            </motion.div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 z-0">
              <div className="w-full h-full border-l-2 border-dashed border-primary/25" />
            </div>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div key={i} className="flex gap-4 items-start relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-sm font-bold shadow-lg shadow-primary/20">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-background rounded-2xl border border-border p-5 shadow-sm">
                    <h4 className="font-display font-bold text-base mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h3 className="text-xl font-display font-bold mb-3">Tracking and confirmation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Every order is assigned an order number. You and your customers can track deliveries through the Eagle Post system and receive confirmation once delivery is completed.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-3">Coverage</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Business deliveries are available across Iraq, with support for high-volume deliveries.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <h3 className="text-xl font-display font-bold mb-4">Why businesses choose Eagle Post</h3>
            <ul className="space-y-2 mb-8">
              {whyChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
            <a href="https://partner.eaglepost.com/sign-in?redirect=%2F" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground font-bold text-sm sm:text-base px-4 sm:px-6 w-full sm:w-auto">
                Go to Business Portal
                <ArrowRight className="w-4 h-4 ms-2 shrink-0" />
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-bold text-sm sm:text-base px-4 sm:px-6 w-full sm:w-auto">
                <span className="hidden sm:inline">Open a business account — Contact us</span>
                <span className="sm:hidden">Open a business account</span>
                <ArrowRight className="w-4 h-4 ms-2 shrink-0" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BusinessPortal;
