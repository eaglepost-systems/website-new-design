import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import serviceIndividual from "@/assets/service-individual.jpg";
import serviceGovernment from "@/assets/service-government.jpg";
import serviceBusiness from "@/assets/service-business.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    titleKey: "home.ourServices.individualTitle",
    descKey: "home.ourServices.individualDesc",
    linkKey: "home.ourServices.individualLink",
    to: "/services",
    image: serviceIndividual,
  },
  {
    titleKey: "home.ourServices.governmentTitle",
    descKey: "home.ourServices.governmentDesc",
    linkKey: "home.ourServices.governmentLink",
    to: "/services/government",
    image: serviceGovernment,
  },
  {
    titleKey: "home.ourServices.businessTitle",
    descKey: "home.ourServices.businessDesc",
    linkKey: "home.ourServices.businessLink",
    to: "/services/corporate",
    image: serviceBusiness,
  },
];

const HomeServices = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3">
            {t("home.ourServices.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("home.ourServices.intro")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="flex flex-col"
            >
              <div className="overflow-hidden rounded-2xl mb-5">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  loading="lazy"
                  width={800}
                  height={544}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {t(service.descKey)}
              </p>
              <Link
                to={service.to}
                className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors"
              >
                {t(service.linkKey)} <ArrowRight className="w-4 h-4 ms-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
