"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { translations, Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const { lang, setLanguage, mounted } = useLanguage();
  const t = translations[lang];

  // Prevent hydration mismatch by rendering nothing or a shell until mounted
  // However, for SEO on the main page, we might want to default to 'en' content on server
  // and then switch on client. The useLanguage hook initializes 'en'.
  // But if we return null, we hurt SEO.
  // Better: Render with 'lang' (which is 'en' initially) and let the hook update it.
  // The hook does: const [lang, setLang] = useState<Language>("en");
  // So initial render is EN. Then useEffect checks localStorage/Navigator and updates.
  // This is fine for SEO (Google gets EN).

  const appStoreUrl =
    "https://apps.apple.com/de/app/macroloop-ki-kalorienz%C3%A4hler/id6754224603";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Floating Language Toggle */}
      <LanguageToggle currentLang={lang} onToggle={setLanguage} />

      <main className="pb-24">
        {/* Hero Section */}
        <section className="pt-16 pb-8 lg:pt-24 lg:pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.0 }}
              className="mb-8 flex flex-col items-center gap-4"
            >
              <Image
                src="/assets/ios-dark.png"
                alt="MacroLoop App Icon"
                width={120}
                height={120}
                className="mx-auto rounded-3xl shadow-lg"
                unoptimized
              />
              <span className="text-2xl font-bold tracking-tight">
                MacroLoop
              </span>
            </motion.div>
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-6"
            >
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assets/as.png"
                  alt={t.hero.cta}
                  width={180}
                  height={54}
                  className="h-[54px] w-auto"
                />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-12 w-full">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-4 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:pb-0 scrollbar-hide"
            >
              {[
                "/assets/inAppScreenshots/dashboard.png",
                "/assets/inAppScreenshots/newlog.png",
                "/assets/inAppScreenshots/edit.png",
                "/assets/inAppScreenshots/trendview.png",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-[85vw] md:w-[280px] aspect-[9/19.5] shrink-0 snap-center"
                >
                  <Image
                    src={src}
                    alt={`App screenshot ${idx + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 85vw, 300px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features List Section */}
        <section className="py-16 lg:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 sm:grid-cols-1"
            >
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary shrink-0">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <span className="text-lg sm:text-xl font-medium text-secondary-text">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border mt-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              {t.footer.headline}
            </h2>
            {/* CTA */}
            <div className="pt-6">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/assets/as.png"
                  alt={t.footer.cta}
                  width={180}
                  height={54}
                  className="h-[54px] w-auto"
                />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-text pt-8">
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.links.terms}
              </Link>
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.links.privacy}
              </Link>
              <Link
                href="/impressum"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.links.impressum}
              </Link>
              <Link
                href="/support"
                className="hover:text-foreground transition-colors"
              >
                {t.footer.links.support}
              </Link>
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
