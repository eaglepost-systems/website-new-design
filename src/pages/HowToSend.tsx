import { motion } from "framer-motion";
import { Package, ScanLine, Truck, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const steps = [
  { icon: Package, title: "Prepare your package", desc: "Securely package your item. Ensure fragile items have extra padding." },
  { icon: ScanLine, title: "Visit a branch or schedule pickup", desc: "Bring your package to any Eagle Post branch, or schedule a pickup via the app." },
  { icon: Truck, title: "We handle the rest", desc: "Your package is scanned, tracked, and delivered to the destination." },
  { icon: CheckCircle2, title: "Delivery confirmation", desc: "You receive confirmation once your package has been delivered." },
];

const HowToSend = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero image={heroImages.howToSend}>
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {t("footer.howToSend")}
          </motion.h1>
        </PageHero>
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div key={step.title} className="flex gap-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-display font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToSend;
