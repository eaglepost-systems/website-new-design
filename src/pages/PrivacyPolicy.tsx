import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero image={heroImages.legal}>
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {t("footer.privacy")}
          </motion.h1>
        </PageHero>
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl prose prose-sm">
          <h2 className="font-display font-bold text-xl mb-4">Privacy Policy</h2>
          <p className="text-muted-foreground mb-4">Last updated: February 2026</p>
          <p className="text-muted-foreground mb-4">Eagle Post ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
          <h3 className="font-display font-bold text-lg mt-6 mb-3">Information We Collect</h3>
          <p className="text-muted-foreground mb-4">We collect personal information you provide when using our services, including name, address, phone number, email, and shipment details.</p>
          <h3 className="font-display font-bold text-lg mt-6 mb-3">How We Use Your Information</h3>
          <p className="text-muted-foreground mb-4">Your information is used to process shipments, provide tracking updates, improve our services, and communicate with you about your deliveries.</p>
          <h3 className="font-display font-bold text-lg mt-6 mb-3">Data Security</h3>
          <p className="text-muted-foreground mb-4">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          <h3 className="font-display font-bold text-lg mt-6 mb-3">Contact Us</h3>
          <p className="text-muted-foreground">For privacy-related inquiries, contact us at customerservice@eaglepost.com.</p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
