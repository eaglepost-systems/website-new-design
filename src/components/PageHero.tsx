import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  children: ReactNode;
}

const PageHero = ({ image, children }: PageHeroProps) => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/80" />
      {/* Content */}
      <div className="container relative z-10 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
