import React from "react";
import { Language } from "@/lib/translations";
import Link from "next/link";

export function SupportContent({ lang }: { lang: Language }) {
  if (lang === "de") {
    return (
      <div className="space-y-6 text-secondary-text">
        <h1 className="text-3xl font-bold text-foreground mb-4">Support</h1>
        <p>Hilfe & Kontakt für <b>MacroLoop</b>.</p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:mpapps@web.de" className="text-primary hover:underline">mpapps@web.de</a>
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">FAQ</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>Wo liegen meine Daten?</b> Food-Logs liegen nur auf deinem Gerät. Optionale Fotos werden kurzzeitig in einem privaten Supabase-Bucket gespeichert und binnen ~1 h automatisch gelöscht.
          </li>
          <li>
            <b>Wie lösche ich alle Daten?</b> Lösche deine Logs in der App oder entferne die App. Serverseitig gespeicherte Fotos werden automatisiert gelöscht; wir speichern keine Konten oder Profile.
          </li>
          <li><b>Kein Tracking?</b> Korrekt – keine Analytics/Ads/Tracker.</li>
        </ul>

        <div className="pt-8 flex gap-4">
          <Link href="/privacy" className="text-primary hover:underline">Datenschutzerklärung</Link>
          <span className="text-border">•</span>
          <Link href="/impressum" className="text-primary hover:underline">Impressum</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-secondary-text">
      <h1 className="text-3xl font-bold text-foreground mb-4">Support</h1>
      <p>Help & contact for <b>MacroLoop</b>.</p>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Contact</h2>
      <p>
        Email: <a href="mailto:mpapps@web.de" className="text-primary hover:underline">mpapps@web.de</a>
      </p>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">FAQ</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <b>Where is my data?</b> Food logs stay on device. Optional photos are stored briefly in a private Supabase bucket and auto-deleted within ~1 h.
        </li>
        <li>
          <b>How do I delete everything?</b> Delete logs in-app or uninstall. Server-side photos auto-delete; we don't keep accounts or profiles.
        </li>
        <li><b>Tracking?</b> None – no analytics/ads/trackers.</li>
      </ul>

      <div className="pt-8 flex gap-4">
        <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
        <span className="text-border">•</span>
        <Link href="/impressum" className="text-primary hover:underline">Legal Notice</Link>
      </div>
    </div>
  );
}
