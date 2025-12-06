import React from "react";
import { Language } from "@/lib/translations";

export function ImpressumContent({ lang }: { lang: Language }) {
  if (lang === "de") {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        <div className="space-y-4 text-secondary-text">
          <p>
            <strong className="text-foreground">Marco Preuss – Einzelunternehmen</strong><br />
            Augustenburgstraße 8d, 76229 Karlsruhe, Baden-Württemberg, Deutschland<br />
            E-Mail: <a href="mailto:mpapps@web.de" className="text-primary hover:underline">mpapps@web.de</a>
          </p>
          <p>
            Inhaltlich Verantwortlicher gem. § 18 Abs. 2 MStV: Marco Preuss (Adresse wie oben).
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-8">Legal Notice</h1>
      <div className="space-y-4 text-secondary-text">
        <p>
          <strong className="text-foreground">Marco Preuss – Sole Proprietor</strong><br />
          Augustenburgstraße 8d, 76229 Karlsruhe, Baden-Württemberg, Germany<br />
          Email: <a href="mailto:mpapps@web.de" className="text-primary hover:underline">mpapps@web.de</a>
        </p>
        <p>
          Content responsible under § 7 TMG: Marco Preuss (address as above).
        </p>
      </div>
    </div>
  );
}
