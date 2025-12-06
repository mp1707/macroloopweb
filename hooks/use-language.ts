"use client";

import { useState, useEffect } from "react";
import { Language } from "@/lib/translations";

export function useLanguage() {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Try to get from localStorage
    const saved = localStorage.getItem("preferredLanguage") as Language;
    if (saved && (saved === "en" || saved === "de")) {
      setLang(saved);
      return;
    }

    // Fallback to browser preference
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "de") {
      setLang("de");
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("preferredLanguage", newLang);
  };

  return { lang, setLanguage, mounted };
}
