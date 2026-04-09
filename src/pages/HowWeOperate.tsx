import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, MapPin, Smartphone, Users, ShieldCheck, Globe, Warehouse, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";
import evFleet from "@/assets/ev-fleet.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const HowWeOperate = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero image={heroImages.howWeOperate}>
        <Link to="/about" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">← {t("nav.aboutUs")}</Link>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">How Eagle Post Operates</h1>
        <p className="text-primary-foreground/80 max-w-2xl">Sending something important requires accountability, structure, and reach.</p>
      </PageHero>

      {/* Intro + Channels */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <motion.p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            Eagle Post operates through a connected physical and digital system designed to make postal services accessible and traceable.
          </motion.p>

          <motion.h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            This includes
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-8 mb-6">
            {[
              { icon: Building2, title: "Branches across the Kurdistan Region", desc: "Walk-in service at physical locations for all postal needs." },
              { icon: MapPin, title: "Partner service points", desc: "Extended local access through trusted partner locations." },
              { icon: Smartphone, title: "Mobile app & web portal", desc: "Create shipments, request pickup, and track deliveries online." },
            ].map((ch, i) => (
              <motion.div key={i} className="flex gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 2}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ch.icon className="w-6 h-6 text-primary" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-1">{ch.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ch.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p className="text-muted-foreground text-sm max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={5}>
            Together, these channels allow individuals to interact with Eagle Post in the way that suits them — in person or online.
          </motion.p>
        </div>
      </section>

      {/* Operated by our own teams — full-width band */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-primary" strokeWidth={1.8} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">Operated by our own teams</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">All deliveries are handled by Eagle Post staff using Eagle Post vehicles.</p>
              <p className="text-muted-foreground leading-relaxed">Our team members are formally trained and operate under Iraqi postal regulations, ensuring defined procedures from acceptance to delivery.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-primary" strokeWidth={1.8} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">Official and regulated</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Eagle Post operates in partnership with the Ministry of Transportation and Communications, following approved postal procedures.</p>
              <p className="text-muted-foreground leading-relaxed">Shipments move through a structured and monitored system — not informal handling — reducing risk of loss, fraud, or disputes.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nationwide + Structured logistics */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-primary" strokeWidth={1.8} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">Nationwide coverage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We cover all routes across the Kurdistan Region on a daily basis.</p>
              <p className="text-sm font-semibold text-foreground mb-3">Operations are supported by:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Central warehouses within the Kurdistan Region</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">Additional warehouses and partner hubs across the rest of Iraq</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm">This infrastructure ensures consistent routing and regional reach.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Warehouse className="w-6 h-6 text-primary" strokeWidth={1.8} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">Structured logistics network</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Shipments move through organized sorting, warehousing, and distribution points before final delivery.</p>
              <p className="text-muted-foreground leading-relaxed">This reduces handling errors and improves reliability.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Electric fleet — sleek cutout section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content side */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-secondary" strokeWidth={1.8} />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">Urban Electric Fleet</h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-5">Within city limits, Eagle Post uses electric delivery vehicles as part of its operational fleet.</p>
              <p className="text-sm font-semibold text-primary-foreground mb-3">Electric vehicles:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Reduce urban emissions",
                  "Operate quietly in residential areas",
                  "Improve efficiency for short-distance daily deliveries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-primary-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary-foreground/70 text-sm">This initiative reflects a shift toward more sustainable urban logistics.</p>
            </motion.div>

            {/* Image cutout side */}
            <motion.div className="relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src={evFleet}
                  alt="Eagle Post electric delivery vehicle on highway"
                  className="w-full h-[400px] md:h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom statement */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            When you send something through Eagle Post, it moves through:
          </motion.h2>
          <motion.div className="flex flex-wrap justify-center gap-3 mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            {[
              "A regulated system",
              "Trained staff",
              "Dedicated vehicles",
              "Structured warehouses",
              "Monitored delivery routes",
            ].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-sm font-semibold text-primary">
                <CheckCircle2 className="w-4 h-4" />
                {item}
              </span>
            ))}
          </motion.div>
          <motion.p className="text-foreground font-display font-bold text-lg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            Not informal networks.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HowWeOperate;
