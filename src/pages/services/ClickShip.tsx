import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Globe, Package, Truck, Smartphone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ClickShip = () => {
  const { t } = useTranslation();

  const steps = [
    "Sign up in the Eagle Post app — Open the app and enter the Click Ship section.",
    "Create a Click Ship request — Select the country you are shopping from and enter the estimated weight of the item.",
    "Add the store link — Paste the link of the website you are buying from.",
    "Get your international shipping address — The app will provide you with your Eagle Post Click Ship address for that country.",
    "Shop from global stores — Buy from international websites such as Amazon, eBay, Macy's, and others.",
    "Use your Eagle Post address at checkout — Enter your Click Ship address instead of your Iraq address.",
    "We receive and forward your order — Once your order arrives, Eagle Post processes it, forwards it to Iraq, and notifies you.",
    "Receive or collect your order — When your shipment arrives, you can receive it at home or collect it from any Eagle Post branch.",
  ];

  return (
    <>
      <PageHero image={heroImages.clickShip}>
            <Link to="/services" className="text-secondary text-sm font-semibold hover:underline mb-4 inline-block">{t("backToServices")}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">Click Ship</h1>
            <p className="text-primary-foreground/80 max-w-2xl">Shop from international websites and have your purchases delivered to you in Iraq through Eagle Post.</p>
          </PageHero>

      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">What Click Ship is</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Click Ship lets you shop from international websites and have your purchases delivered to you in Iraq through Eagle Post. You use a dedicated Eagle Post address when shopping online, and we handle receiving, forwarding, and delivery.</p>
          </motion.div>

          <motion.h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            How to use Click Ship
          </motion.h2>
          <div className="space-y-4 mb-12">
            {steps.map((step, i) => {
              const [title, desc] = step.split(" — ");
              return (
                <motion.div key={i} className="flex gap-4 p-5 rounded-xl border border-border" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 2}>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-sm font-bold">{i + 1}</div>
                  <div>
                    <h4 className="font-display font-bold text-sm mb-0.5">{title}</h4>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h3 className="text-xl font-display font-bold mb-3">Tracking and updates</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Each Click Ship request is assigned an order number. You can track your shipment at any time through the Eagle Post app or website and receive delivery confirmation.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h3 className="text-xl font-display font-bold mb-3">What you can receive</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">All Click Ship items must comply with UPU (Universal Postal Union) regulations and destination-country rules.</p>
            <Link to="/guidelines" className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors mb-8">
              View UPU item guidelines <ArrowRight className="w-4 h-4 ms-1" />
            </Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
            <h3 className="text-xl font-display font-bold mb-3">Coverage</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Click Ship supports deliveries from any international stores that have an online store-front.</p>
          </motion.div>

          <motion.div className="p-5 rounded-xl border border-border bg-background" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}>
            <p className="text-sm text-muted-foreground font-semibold">Important: Delivery times and prices may vary depending on item size, weight, customs requirements, and destination.</p>
          </motion.div>

          <motion.div className="mt-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
            <Button size="lg" className="bg-primary text-primary-foreground font-bold">
              Check Click Ship prices — download our app <ArrowRight className="w-4 h-4 ms-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ClickShip;
