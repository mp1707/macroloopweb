"use client"

import * as React from "react"
import { Language } from "@/lib/translations"

interface LanguageToggleProps {
  currentLang: Language
  onToggle: (lang: Language) => void
}

export function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <div className="flex items-center space-x-1 bg-secondary-bg rounded-full p-1 border border-border">
      <button
        onClick={() => onToggle("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          currentLang === "en"
            ? "bg-foreground text-background"
            : "text-secondary-text hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onToggle("de")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          currentLang === "de"
            ? "bg-foreground text-background"
            : "text-secondary-text hover:text-foreground"
        }`}
      >
        DE
      </button>
    </div>
  )
}
