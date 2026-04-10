import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const faqs = [
  { q: "How do I track my shipment?", a: "Use the Track Shipment page or enter your tracking number on the homepage. You'll see real-time status updates." },
  { q: "What areas do you deliver to?", a: "We deliver across all of Iraq, with express service in the Kurdistan Region. International delivery is available to 40+ countries." },
  { q: "How long does delivery take?", a: "Local deliveries within KRI: 1-2 business days. Rest of Iraq: 2-4 business days. International: 5-10 business days." },
  { q: "What items are prohibited?", a: "Hazardous materials, flammable items, weapons, illegal substances, and perishable goods without proper packaging. See our Prohibited Items page." },
  { q: "How can I contact customer support?", a: "Call +964 750 596 4000, email customerservice@eaglepost.com
, or use our live chat. Available Sat–Thu, 9am–8pm." },
  { q: "Do you offer pickup services?", a: "Yes! You can schedule a pickup through our app or by calling customer support." },
  { q: "What payment methods do you accept?", a: "Cash on delivery, bank transfer, and mobile payment options are available." },
];

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero image={heroImages.faq}>
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {t("footer.faq")}
          </motion.h1>
        </PageHero>
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <AccordionItem value={`faq-${i}`} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQ;
