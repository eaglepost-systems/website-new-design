

## Move EaglePost Project to This Project

This plan will recreate the entire EaglePost postal service website exactly as it exists in your GitHub repository (`eaglepost-style-express`) into this new blank project.

### What will be done

**1. Install missing dependencies**
- `framer-motion` (animations)
- `i18next` and `react-i18next` (translations)
- `i18next-browser-languagedetector` (language detection)

**2. Copy all source files from the original project**

The following files will be created/updated:

- **Config files**: `tailwind.config.ts`, `src/index.css`, `src/main.tsx`, `src/App.tsx`, `src/i18n.ts`
- **Locales** (3 languages): `src/locales/en.json`, `src/locales/ar.json`, `src/locales/ku.json`
- **Layout components**: `Layout.tsx`, `Navbar.tsx`, `Footer.tsx`, `ScrollToTop.tsx`, `AppShowcase.tsx`
- **Pages** (20+ pages): `Index.tsx`, `About.tsx`, `HowWeOperate.tsx`, `Services.tsx`, `LocalDeliveries.tsx`, `International.tsx`, `ClickShip.tsx`, `POBox.tsx`, `BusinessPortal.tsx`, `Government.tsx`, `MarriageBloodTest.tsx`, `BirthDeathCertificate.tsx`, `DPHA.tsx`, `Track.tsx`, `Contact.tsx`, `Branches.tsx`, `News.tsx`, `Guidelines.tsx`, `FAQ.tsx`, `HowToSend.tsx`, `ProhibitedItems.tsx`, `RateCalculator.tsx`, `PrivacyPolicy.tsx`, `TermsOfService.tsx`

**3. Copy all image assets**
- `logo.png`, `hero-bg.jpg`, `delivery-person.png`, `app-mockup.jpg`, `app-mockup.png`
- `slide-1.jpg`, `slide-2-new.jpg`, `slide-3.jpg`, `slide-4.jpg`
- News images: `news-erbil-terminal.jpg`, `news-international-partnership.jpg`, `news-mobile-app.jpg`, `news-sulaymaniyah.jpg`

### Important notes

- This is a large project with 30+ files. It will take multiple steps to implement.
- All translations (English, Arabic, Kurdish) will be preserved with RTL support.
- All animations (framer-motion) will work exactly as before.
- Image assets will be copied from the original GitHub repository.

### Technical details

- The project uses `i18next` for internationalization with 3 languages (EN, AR, KU)
- RTL support is built into the Layout component for Arabic and Kurdish
- Uses `framer-motion` for page animations
- Custom font families: "Plus Jakarta Sans" and "Inter" (LTR), "Noto Kufi Arabic" (RTL)
- Color scheme: deep blue primary (`224 100% 30%`) with golden yellow accent (`45 100% 50%`)

