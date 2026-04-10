import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Send, MapPin, Headphones,
  ShieldCheck, ScanLine, Building2, LifeBuoy,
  Package, FileText, ShoppingCart,
  ChevronRight, ChevronLeft, ArrowRight,
} from "lucide-react";
import sendElectronics from "@/assets/send-electronics.png";
import sendDocuments from "@/assets/send-documents.png";
import sendClothing from "@/assets/send-clothing.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import deliveryPerson from "@/assets/delivery-person.png";
import AppShowcase from "@/components/AppShowcase";
import HomeServices from "@/components/HomeServices";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/appLinks";
import slide1Img from "@/assets/slide-1.jpg";
import slide2Img from "@/assets/slide-2-new.jpg";
import slide3Img from "@/assets/slide-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  // Preload all slide images
  useEffect(() => {
    const srcs = [slide1Img, slide2Img, slide3Img];
    let loaded = 0;
    srcs.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= srcs.length) setImagesLoaded(true);
      };
      img.src = src;
    });
  }, []);

  const slides = [
    {
      headline: t("home.slide1Headline"),
      link: { label: t("home.slide1Link"), to: "/about" },
      sub: null,
      secondLink: null,
      image: slide1Img,
    },
    {
      headline: t("home.slide2Headline"),
      sub: t("home.slide2Sub"),
      link: null,
      secondLink: null,
      image: slide2Img,
    },
    {
      headline: t("home.slide3Headline"),
      link: { label: t("home.slide3Link"), to: "/news" },
      sub: null,
      secondLink: null,
      image: slide3Img,
    },
  ];

  const shortcutActions = [
    
    { icon: Building2, label: t("home.businessPortal"), to: "/services/business-portal" },
    { icon: MapPin, label: t("home.findBranch"), to: "/branches" },
    { icon: Headphones, label: t("home.contactSupport"), to: "/contact" },
  ];

  const whyReasons = [
    { icon: ShieldCheck, title: t("home.why1Title"), desc: t("home.why1Desc") },
    { icon: Search, title: t("home.why2Title"), desc: t("home.why2Desc") },
    { icon: Headphones, title: t("home.why4Title"), desc: t("home.why4Desc") },
  ];

  const howSteps = [
    { step: "01", title: t("home.how1Title"), desc: t("home.how1Desc"), link: { label: t("home.how1Link"), to: "/services/local-deliveries" } },
    { step: "02", title: t("home.how2Title"), desc: t("home.how2Desc"), link: { label: t("home.how2Link"), to: "/track" } },
    { step: "03", title: t("home.how3Title"), desc: t("home.how3Desc"), link: { label: t("home.how3Link"), to: "/contact" } },
  ];

  const sendItems = [
    { image: sendDocuments, title: t("home.what1Title"), desc: t("home.what1Desc") },
    { image: sendClothing, title: t("home.what2Title"), desc: t("home.what2Desc") },
    { image: sendElectronics, title: t("home.what3Title"), desc: t("home.what3Desc") },
  ];

  const SLIDE_DURATION = 30000; // 30 seconds per slide
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();
    const raf = { id: 0 };
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        raf.id = requestAnimationFrame(tick);
      }
    };
    raf.id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.id);
  }, [currentSlide]);

  const handleTrack = () => {
    if (trackingId.trim()) navigate(`/track?id=${trackingId.trim()}`);
  };

  const goSlide = (dir: number) => {
    setCurrentSlide((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <>
      {/* ===== HERO CAROUSEL ===== */}
      <section className="relative">
        {/* Carousel area with fixed height and overflow hidden */}
        <div className="relative h-[460px] md:h-[560px] overflow-hidden bg-primary">
          {/* Preloaded first slide as static background until images load */}
          <img src={slide1Img} alt="" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-[1]" />

          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={`bg-${currentSlide}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 z-[2]"
            >
              <img src={slides[currentSlide].image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
            </motion.div>
          </AnimatePresence>

          <div className="container relative z-10 h-full">
            <div className="h-full flex items-center justify-between">
              <div className="py-16 md:py-24 max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-extrabold text-white leading-snug md:leading-relaxed mb-4">
                      {slides[currentSlide].headline}
                    </h1>
                    {slides[currentSlide].sub && (
                      <p className="text-base text-white/80 mb-4">{slides[currentSlide].sub}</p>
                    )}
                    {slides[currentSlide].link && (
                      <div className="flex flex-wrap gap-3">
                        <Link to={slides[currentSlide].link.to} className="text-secondary font-bold text-sm uppercase tracking-wide hover:text-secondary/80 transition-colors inline-flex items-center">
                          {slides[currentSlide].link.label} <ArrowRight className="w-4 h-4 ms-1" />
                        </Link>
                        {slides[currentSlide].secondLink && (
                          <Link to={slides[currentSlide].secondLink!.to} className="text-secondary font-bold text-sm uppercase tracking-wide hover:text-secondary/80 transition-colors inline-flex items-center ms-4">
                            {slides[currentSlide].secondLink!.label} <ArrowRight className="w-4 h-4 ms-1" />
                          </Link>
                        )}
                      </div>
                    )}
                    {currentSlide === 1 && (
                      <div className="flex flex-wrap gap-3 mt-5">
                        <a
                          href={GOOGLE_PLAY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl px-4 h-12 hover:bg-white/20 transition-colors border border-white/20"
                        >
                          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
                          </svg>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[9px] uppercase tracking-wide opacity-70">GET IT ON</span>
                            <span className="text-sm font-bold -mt-0.5">Google Play</span>
                          </div>
                        </a>
                        <a
                          href={APP_STORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl px-4 h-12 hover:bg-white/20 transition-colors border border-white/20"
                        >
                          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[9px] uppercase tracking-wide opacity-70">DOWNLOAD ON THE</span>
                            <span className="text-sm font-bold -mt-0.5">App Store</span>
                          </div>
                        </a>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center gap-3 mt-6">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className="relative h-1.5 rounded-full overflow-hidden bg-white/25 transition-all"
                      style={{ width: i === currentSlide ? 48 : 12 }}
                    >
                      {i === currentSlide && (
                        <span
                          className="absolute inset-y-0 left-0 bg-white rounded-full"
                          style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <button onClick={() => goSlide(-1)} className="w-10 h-10 rounded-full border-2 border-white/50 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => goSlide(1)} className="w-10 h-10 rounded-full border-2 border-white/50 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action bar — outside the clipped area */}
        <div className="relative z-20 -mt-8">
          <div className="container">
            <div className="bg-background rounded-2xl shadow-xl border border-border px-4 sm:px-6 md:px-8 py-5 flex flex-col lg:flex-row items-stretch lg:items-center gap-5">
              <div className="grid grid-cols-3 lg:flex lg:items-center w-full lg:w-auto">
                {shortcutActions.map((a, idx) => (
                  <div key={a.label} className="flex items-center justify-center lg:flex-none">
                    <Link to={a.to} className="flex flex-col items-center gap-1.5 lg:gap-2 px-2 sm:px-4 lg:px-6 py-2 lg:py-1 hover:bg-muted rounded-lg transition-colors group w-full">
                      <a.icon className="w-5 h-5 lg:w-6 lg:h-6 text-foreground/70 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                      <span className="text-[10px] lg:text-xs font-medium text-foreground/70 group-hover:text-foreground text-center leading-tight">{a.label}</span>
                    </Link>
                    {idx < shortcutActions.length - 1 && <div className="hidden lg:block w-px h-12 bg-border mx-1" />}
                  </div>
                ))}
              </div>
              <div className="w-full h-px bg-border lg:hidden" />
              <div className="hidden lg:block w-px h-12 bg-border" />
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <Input
                  placeholder={t("home.trackingPlaceholder")}
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                  className="h-11 md:h-11 text-sm flex-1 min-w-0 border-border"
                />
                <Button onClick={handleTrack} className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-11 px-4 md:px-8 uppercase text-[10px] md:text-xs tracking-widest shrink-0 rounded-md">
                  {t("home.trackBtn")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY EAGLEPOST ===== */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div className="max-w-2xl mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3">{t("home.whyTitle")}</h2>
            <p className="text-muted-foreground">{t("home.whyIntro")}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map((r, i) => (
              <motion.div key={r.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full border-border hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <r.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-sm mb-2">{r.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
            <Link to="/about/how-we-operate" className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors">
              {t("home.whyMatters")} <ArrowRight className="w-4 h-4 ms-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <HomeServices />

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <motion.div className="max-w-2xl mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3">{t("home.howTitle")}</h2>
            <p className="text-muted-foreground">{t("home.howIntro")}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {howSteps.map((s, i) => (
              <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="relative">
                  <span className="text-6xl font-display font-extrabold text-primary/10 leading-none">{s.step}</span>
                  <h3 className="font-display font-bold text-lg mt-2 mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to={s.link.to} className="inline-flex items-center text-primary font-semibold text-sm hover:text-secondary transition-colors">
                    {s.link.label} <ArrowRight className="w-4 h-4 ms-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU CAN SEND ===== */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div className="max-w-2xl mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3">{t("home.whatTitle")}</h2>
            <p className="text-muted-foreground">{t("home.whatIntro")}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sendItems.map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="h-full text-center">
                  <div className="flex items-center justify-center mb-4">
                    <img src={item.image} alt={item.title} loading="lazy" width={200} height={200} className="w-44 h-44 object-contain" />
                  </div>
                  <h3 className="font-display font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p className="text-xs text-muted-foreground mt-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}>
            {t("home.guidelinesNote")} <Link to="/guidelines" className="text-primary font-semibold hover:underline">{t("home.guidelinesLink")}</Link>
          </motion.p>
        </div>
      </section>

      {/* ===== APP SHOWCASE CTA ===== */}
      <AppShowcase />
    </>
  );
};

export default Index;
