import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { heroImages } from "@/lib/heroImages";
import newsExpo1 from "@/assets/news-expo-1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export const newsArticles = [
  {
    slug: "erbil-logistics-expo",
    title: "Erbil Logistics Expo",
    date: "Jan 18, 2026",
    category: "Event",
    image: newsExpo1,
  },
];

const News = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <PageHero image={heroImages.news}>
        <Badge className="bg-secondary text-secondary-foreground mb-3">{t("news.badge")}</Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-3">{t("news.title")}</h1>
        <p className="text-primary-foreground/80 max-w-2xl">{t("news.intro")}</p>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => (
              <motion.div key={article.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card
                  className="overflow-hidden h-full border-border hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => navigate(`/news/${article.slug}`)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="font-display font-bold">{article.title}</h3>
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

export default News;
