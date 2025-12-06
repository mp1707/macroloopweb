"use client"

import { Language } from "@/lib/translations"

interface LanguageToggleProps {
  currentLang: Language
  onToggle: (lang: Language) => void
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 bg-secondary-bg/80 backdrop-blur-md rounded-full p-1 border border-border/50 shadow-lg">
        <button
          onClick={() => onToggle("en")}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            currentLang === "en"
              ? "bg-primary text-primary-foreground"
              : "text-secondary-text hover:text-foreground"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => onToggle("de")}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            currentLang === "de"
              ? "bg-primary text-primary-foreground"
              : "text-secondary-text hover:text-foreground"
          }`}
        >
          DE
        </button>
      </div>
    </div>
  )
}
