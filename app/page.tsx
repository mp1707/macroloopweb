"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { translations, Language } from "@/lib/translations";
import { LanguageToggle } from "@/components/language-toggle";
import {
  Camera,
  Mic,
  Brain,
  Search,
  SlidersHorizontal,
  Scale,
  ChartNoAxesColumnDecreasing,
  Star,
  Pencil,
  Zap,
  Lock,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const { lang, setLanguage, mounted } = useLanguage();
  const t = translations[lang];

  const iconMap = {
    Camera,
    Mic,
    Brain,
    Search,
    SlidersHorizontal,
    Scale,
    ChartNoAxesColumnDecreasing,
    Star,
    Pencil,
  };

  const appStoreUrl =
    "https://apps.apple.com/de/app/macroloop-ki-kalorienz%C3%A4hler/id6754224603";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
       {/* Schema.org Structured Data */}
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "MacroLoop",
            operatingSystem: "iOS",
            applicationCategory: "Health & Fitness",
            description:
              "MacroLoop is an AI-powered calorie and macro tracker for iOS. Log meals via photo, text, or voice and get fast, exact-enough nutrition estimates.",
            image: "https://getmacroloop.app/assets/ios-dark.png",
            url: "https://getmacroloop.app",
            softwareVersion: "1.0.0",
            inLanguage: ["en", "de"],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
            },
            publisher: {
              "@type": "Organization",
              name: "Marco Preuss",
              url: "https://getmacroloop.app",
            },
            downloadUrl: appStoreUrl,
            installUrl: appStoreUrl,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faq?.items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })) || [],
          }),
        }}
      />

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
                alt="MacroLoop iOS App Icon"
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
                    alt={`MacroLoop iOS App Screenshot ${idx + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 85vw, 300px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Is MacroLoop Section */}
        {t.whatIs && (
          <section className="py-12 lg:py-24 px-6 bg-secondary/20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight"
              >
                {t.whatIs.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-secondary-text leading-relaxed"
              >
                {t.whatIs.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-primary font-medium"
              >
                {t.whatIs.audience}
              </motion.p>
            </div>
          </section>
        )}

        {/* Comparison Section */}
        {t.comparison && (
          <section className="py-16 lg:py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight"
              >
                {t.comparison.title}
              </motion.h2>
              <div className="grid gap-8 md:grid-cols-3">
                {t.comparison.items.map((item, idx) => {
                  const icons = [Brain, Lock, Zap];
                  const Icon = icons[idx] || CheckCircle2;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-secondary/30 p-8 rounded-2xl border border-border"
                    >
                      <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-secondary-text leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Features List Section */}
        <section className="py-16 lg:py-24 px-6 bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight"
            >
              {t.featureSection.title}
            </motion.h2>

            <div className="grid gap-12 md:grid-cols-3">
              {t.featureSection.groups.map((group, groupIdx) => (
                <motion.div
                  key={groupIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIdx * 0.1 }}
                  className="space-y-8"
                >
                  <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2 mb-6">
                    {group.title}
                  </h3>
                  <div className="space-y-6">
                    {group.items.map((item, itemIdx) => {
                      const Icon = iconMap[item.icon as keyof typeof iconMap];
                      return (
                        <div key={itemIdx} className="flex items-center gap-4">
                          <div className="shrink-0 p-2 rounded-xl bg-secondary/50 text-primary">
                            {Icon && <Icon size={24} strokeWidth={2} />}
                          </div>
                          <div>
                            <p className="text-lg font-medium leading-snug">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {t.faq && (
          <section className="py-16 lg:py-24 px-6">
            <div className="max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight"
              >
                {t.faq.title}
              </motion.h2>
              <div className="space-y-8">
                {t.faq.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-border pb-6"
                  >
                    <h3 className="text-lg font-bold mb-2">{item.question}</h3>
                    <p className="text-secondary-text leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

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