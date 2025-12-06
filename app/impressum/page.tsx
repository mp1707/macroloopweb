"use client";

import { useLanguage } from "@/hooks/use-language";
import { LanguageToggle } from "@/components/language-toggle";
import { ImpressumContent } from "@/components/legal/ImpressumContent";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ImpressumPage() {
  const { lang, setLanguage, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <LanguageToggle currentLang={lang} onToggle={setLanguage} />
      
      <main className="max-w-3xl mx-auto px-6 py-12 lg:py-24">
        <Link href="/" className="inline-flex items-center text-sm text-secondary-text hover:text-primary mb-8 transition-colors">
          <ChevronLeft size={16} className="mr-1" />
          {lang === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
        </Link>
        
        <ImpressumContent lang={lang} />
      </main>
    </div>
  );
}
