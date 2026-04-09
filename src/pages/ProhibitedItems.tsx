import { motion } from "framer-motion";
import { AlertTriangle, Flame, Zap, Skull, Bomb, Wine } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const items = [
  { icon: Flame, title: "Flammable Materials", desc: "Gasoline, lighter fluid, matches, fireworks, and other combustible materials." },
  { icon: Skull, title: "Hazardous Substances", desc: "Chemicals, poisons, radioactive materials, and biological agents." },
  { icon: Bomb, title: "Weapons & Explosives", desc: "Firearms, ammunition, knives, and any explosive devices." },
  { icon: Zap, title: "Illegal Items", desc: "Narcotics, counterfeit goods, and any items prohibited by Iraqi law." },
  { icon: Wine, title: "Restricted Liquids", desc: "Alcohol, perfumes over 100ml, and unsealed liquid containers." },
  { icon: AlertTriangle, title: "Perishable Goods", desc: "Food items without proper cold-chain packaging, live animals, and plants." },
];

const ProhibitedItems = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHero image={heroImages.prohibited}>
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {t("footer.prohibited")}
          </motion.h1>
        </PageHero>
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-border border-destructive/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProhibitedItems;
