"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Mic, Keyboard } from "lucide-react";
import { translations, Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "de") {
      setLang("de");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slider images: EN = even (2,4,6,8,10), DE = odd (1,3,5,7,9)
  const getSliderImages = (): string[] => {
    const base = "/assets/";
    return lang === "en"
      ? [
          `${base}image2.jpg`,
          `${base}image4.jpg`,
          `${base}image6.jpg`,
          `${base}image8.jpg`,
          `${base}image10.jpg`,
        ]
      : [
          `${base}image1.jpg`,
          `${base}image3.jpg`,
          `${base}image5.jpg`,
          `${base}image7.jpg`,
          `${base}image9.jpg`,
        ];
  };

  const appStoreUrl =
    "https://apps.apple.com/de/app/macroloop-ki-kalorienz%C3%A4hler/id6754224603";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Floating Language Toggle */}
      <LanguageToggle currentLang={lang} onToggle={setLang} />

      {/* Floating CTA - Mobile Only */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: showFloatingCta ? 0 : 100,
          opacity: showFloatingCta ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-[max(16px,env(safe-area-inset-bottom))] bg-linear-to-t from-background via-background to-transparent lg:hidden"
      >
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
        >
          {t.hero.cta}
        </a>
      </motion.div>

      <main className="pb-24 lg:pb-0">
        {/* Hero Section */}
        <section className="pt-16 pb-8 lg:pt-24 lg:pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance"
            >
              {t.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-secondary-text max-w-2xl mx-auto leading-relaxed"
            >
              {t.hero.subheadline}
            </motion.p>
            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block pt-4"
            >
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                {t.hero.cta}
              </a>
            </motion.div>
          </div>
        </section>

        {/* App Store Image Slider */}
        <section className="py-8 lg:py-12">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-[max(24px,calc((100vw-1280px)/2+24px))]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {getSliderImages().map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className={`flex-none snap-start w-[75vw] sm:w-[calc(50vw-32px)] lg:w-[280px] xl:w-[300px] ${
                  index === 0 ? "ml-6 lg:ml-12" : ""
                } ${index === 4 ? "mr-6 lg:mr-12" : ""}`}
              >
                <div className="relative aspect-[9/19.5] rounded-3xl overflow-hidden bg-secondary-bg shadow-xl">
                  <Image
                    src={src}
                    alt={`App screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 639px) 75vw, (max-width: 1023px) 50vw, 300px"
                    priority={index < 2}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Pain Point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
                {t.pain.headline}
              </h2>
              <p className="text-base sm:text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto">
                {t.pain.body}
              </p>
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {t.how.headline}
                </h3>
                <p className="text-secondary-text mt-2">{t.how.subtext}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-secondary-bg">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-semantic-calories-surface text-semantic-calories flex items-center justify-center mb-3">
                    <Camera size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <span className="font-bold text-sm sm:text-base">
                    {t.how.snap.title}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-secondary-bg">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-semantic-protein-surface text-semantic-protein flex items-center justify-center mb-3">
                    <Mic size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <span className="font-bold text-sm sm:text-base">
                    {t.how.speak.title}
                  </span>
                </div>
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-secondary-bg">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-secondary-text/10 text-foreground flex items-center justify-center mb-3">
                    <Keyboard size={24} className="sm:w-7 sm:h-7" />
                  </div>
                  <span className="font-bold text-sm sm:text-base">
                    {t.how.type.title}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* AI Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 pt-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-balance">
                {t.deep.headline}
              </h3>
              <p className="text-secondary-text leading-relaxed max-w-xl mx-auto">
                {t.deep.body}
              </p>
            </motion.div>

            {/* Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-balance">
                {t.focus.headline}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm sm:text-base text-secondary-text">
                <span className="px-4 py-2 rounded-full bg-semantic-calories-surface/50 text-semantic-calories">
                  {t.focus.visual.split(":")[0]}
                </span>
                <span className="px-4 py-2 rounded-full bg-semantic-protein-surface/50 text-semantic-protein">
                  {t.focus.trends.split(":")[0]}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 px-6 bg-secondary-bg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">
              {t.footer.headline}
            </h2>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              {t.footer.cta}
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-text">
              <a href="#" className="hover:text-foreground transition-colors">
                {t.footer.links.privacy}
              </a>
              <a
                href="mailto:support@macroloop.com"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.links.support}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t.footer.links.press}
              </a>
            </div>
            <div className="text-sm text-secondary-text/50">
              © {new Date().getFullYear()} MacroLoop
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
