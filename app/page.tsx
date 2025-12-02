"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Camera, Mic, Keyboard, ArrowRight, CheckCircle2, BarChart3 } from "lucide-react"
import { translations, Language } from "@/lib/translations"
import { LanguageToggle } from "@/components/language-toggle"

export default function Home() {
  const [lang, setLang] = useState<Language>("en")
  const t = translations[lang]

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "de") {
      setLang("de")
    }
  }, [])

  // Asset helper
  // English (Even): 2, 4, 6, 8, 10
  // German (Odd): 1, 3, 5, 7, 9
  // Mappings:
  // Hero: 2/1
  // How: 6/5
  // Deep: 8/7
  // Focus: 10/9
  const getAsset = (enIndex: number) => {
    const index = lang === "en" ? enIndex : enIndex - 1
    return `/assets/image${index}.jpg`
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">MacroLoop</div>
          <div className="flex items-center gap-4">
            <LanguageToggle currentLang={lang} onToggle={setLang} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance">
              {t.hero.headline}
            </h1>
            <p className="text-xl text-secondary-text max-w-lg leading-relaxed">
              {t.hero.subheadline}
            </p>
            <a 
              href="https://apps.apple.com/de/app/macroloop-ki-kalorienz%C3%A4hler/id6754224603" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              {t.hero.cta}
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
             {/* Abstract Background Blotches */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-semantic-calories/20 to-semantic-protein/20 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-[280px] sm:w-[320px] lg:w-[380px] aspect-[9/19.5] rounded-[48px] bg-foreground overflow-hidden shadow-2xl transform -rotate-6 lg:rotate-6 hover:rotate-0 transition-transform duration-500">
               <Image 
                 src={getAsset(2)}
                 alt="App Screenshot"
                 fill
                 className="object-cover"
                 priority
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain & Promise */}
      <section className="py-24 px-6 bg-secondary-bg">
        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">{t.pain.headline}</h2>
          <p className="text-lg lg:text-xl text-secondary-text leading-relaxed">
            {t.pain.body}
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div {...fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">{t.how.headline}</h2>
            <p className="text-xl text-secondary-text">{t.how.subtext}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="p-8 rounded-3xl bg-secondary-bg border border-border hover:border-primary/50 transition-colors group"
             >
               <div className="w-14 h-14 rounded-2xl bg-semantic-calories-surface text-semantic-calories flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Camera size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-3">{t.how.snap.title}</h3>
               <p className="text-secondary-text">{t.how.snap.desc}</p>
             </motion.div>

             {/* Card 2 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="p-8 rounded-3xl bg-secondary-bg border border-border hover:border-semantic-protein/50 transition-colors group"
             >
               <div className="w-14 h-14 rounded-2xl bg-semantic-protein-surface text-semantic-protein flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Mic size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-3">{t.how.speak.title}</h3>
               <p className="text-secondary-text">{t.how.speak.desc}</p>
             </motion.div>

             {/* Card 3 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="p-8 rounded-3xl bg-secondary-bg border border-border hover:border-semantic-fat/50 transition-colors group"
             >
               <div className="w-14 h-14 rounded-2xl bg-secondary-text/10 text-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Keyboard size={32} />
               </div>
               <h3 className="text-2xl font-bold mb-3">{t.how.type.title}</h3>
               <p className="text-secondary-text">{t.how.type.desc}</p>
             </motion.div>
          </div>

          <motion.div 
            {...fadeInUp}
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <Image 
              src={getAsset(6)} 
              alt="Log with photo, text or voice" 
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-24 px-6 bg-secondary-bg overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1"
           >
             <div className="relative w-[280px] sm:w-[320px] mx-auto aspect-[9/19.5] rounded-[48px] bg-foreground overflow-hidden shadow-2xl">
                <Image 
                  src={getAsset(8)}
                  alt="AI Breakdown"
                  fill
                  className="object-cover"
                />
             </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2 space-y-6"
           >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-semantic-protein-surface text-semantic-protein text-sm font-bold">
               <CheckCircle2 size={16} />
               AI Analysis
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold text-balance">{t.deep.headline}</h2>
             <p className="text-lg text-secondary-text leading-relaxed">
               {t.deep.body}
             </p>
           </motion.div>
        </div>
      </section>

      {/* Focus / Audience */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">{t.focus.headline}</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-semantic-calories-surface text-semantic-calories flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full border-2 border-current" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Visual Progress</h3>
                  <p className="text-secondary-text">{t.focus.visual}</p>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="mt-1 w-10 h-10 rounded-full bg-semantic-protein-surface text-semantic-protein flex items-center justify-center shrink-0">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Data Trends</h3>
                  <p className="text-secondary-text">{t.focus.trends}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
             <div className="absolute inset-0 bg-gradient-to-tr from-semantic-calories/20 via-semantic-protein/10 to-transparent blur-3xl pointer-events-none" />
             <div className="relative z-10 w-[280px] sm:w-[320px] mx-auto aspect-[9/19.5] rounded-[48px] bg-foreground overflow-hidden shadow-2xl">
                <Image 
                  src={getAsset(10)}
                  alt="Stats and Trends"
                  fill
                  className="object-cover"
                />
             </div>
           </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-secondary-bg border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-4xl font-bold text-balance">{t.footer.headline}</h2>
            <a 
              href="https://apps.apple.com/de/app/macroloop-ki-kalorienz%C3%A4hler/id6754224603" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              {t.footer.cta}
            </a>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 text-secondary-text">
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.links.privacy}</a>
            <a href="mailto:support@macroloop.com" className="hover:text-foreground transition-colors">{t.footer.links.support}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t.footer.links.press}</a>
          </div>
          
          <div className="text-sm text-secondary-text/50">
            © {new Date().getFullYear()} MacroLoop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}