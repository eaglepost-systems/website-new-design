import { motion } from "framer-motion";
import { Package, Scale, Ruler, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";

const Guidelines = () => (
  <>
    <PageHero image={heroImages.guidelines}>
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Delivery Guidelines
        </motion.h1>
        </PageHero>
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl space-y-8">
        {[
          { icon: Scale, title: "Weight Limits", desc: "Local deliveries: up to 30 kg. International deliveries: up to 100 kg per package. Overweight items may require special arrangements." },
          { icon: Ruler, title: "Size Restrictions", desc: "International: box dimensions 100cm × 100cm × 100cm. Exceeding 100cm, tax will be added. Local deliveries: maximum combined length and girth should not exceed 250cm." },
          { icon: Package, title: "Packaging Requirements", desc: "All items must be securely packaged. Fragile items require additional padding. Liquids must be sealed in leak-proof containers." },
          { icon: AlertTriangle, title: "Prohibited Items", desc: "Certain items are restricted or prohibited from delivery. Check our prohibited items list before sending." },
        ].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="border-border">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        <p className="text-sm text-muted-foreground">
          See also: <a href="/prohibited-items-list.pdf" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Prohibited Items</a>
        </p>
      </div>
    </section>
  </>
);

export default Guidelines;
