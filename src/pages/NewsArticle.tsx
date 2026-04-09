import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { newsArticles } from "@/pages/News";
import newsExpo1 from "@/assets/news-expo-1.png";
import newsExpo2 from "@/assets/news-expo-2.jpg";

const articleContent: Record<string, { paragraphs: string[]; images: string[] }> = {
  "erbil-logistics-expo": {
    paragraphs: [
      "We kicked off the year with a strong start at Erbil Logistics Expo, the first logistics exhibition of its kind in the Kurdistan Region.",
      "The event enabled meaningful conversations, strong engagement, and tangible progress toward advancing modern postal and logistics services in the region.",
    ],
    images: [newsExpo1, newsExpo2],
  },
};

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = newsArticles.find((a) => a.slug === slug);
  const content = slug ? articleContent[slug] : undefined;

  if (!article || !content) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link to="/news" className="text-primary hover:underline">← Back to News</Link>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <Link to="/news" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs">{article.category}</Badge>
          <span className="text-xs text-muted-foreground">{article.date}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-extrabold mb-6">{article.title}</h1>

        <div className="space-y-4 text-muted-foreground mb-8">
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {content.images.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <img src={img} alt={`${article.title} - ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArticle;
