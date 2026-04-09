import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero image={heroImages.legal}>
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {t("footer.terms")}
          </motion.h1>
        </PageHero>
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl prose prose-sm">
          <h2 className="font-display font-bold text-xl mb-4">Terms of Service</h2>
          <p className="text-muted-foreground mb-4">Last updated: February 2026</p>
          <p className="text-muted-foreground mb-4">By using Eagle Post services, you agree to the following terms and conditions.</p>
          <h3 className="font-display font-bold text-lg mt-6 mb-3">Service Usage</h3>
          <p className="text-muted-foreground mb-4">Eagle Post provides postal and delivery services within Iraq and internationally. Users must comply with all applicable laws and regulations.</p>
          <h3 className="font-display font-bold text-lg mt-6 mb-3">Liability</h3>
          <p className="text-muted-foreground mb-4">Eagle Post's liability for lost or damaged items is limited to the declared value of the shipment, subject to our claims process.</p>
          <h3 className="font-display font-bold text-lg mt-6 mb-3">Prohibited Items</h3>
          <p className="text-muted-foreground mb-4">Users are responsible for ensuring that shipped items comply with our prohibited items policy. Eagle Post reserves the right to refuse or return non-compliant shipments.</p>
          <h3 className="font-display font-bold text-lg mt-6 mb-3">Contact</h3>
          <p className="text-muted-foreground">For questions about these terms, contact info@eaglepost.com.</p>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
