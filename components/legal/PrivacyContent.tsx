import React from "react";
import { Language } from "@/lib/translations";

export function PrivacyContent({ lang }: { lang: Language }) {
  if (lang === "de") {
    return (
      <div className="space-y-6 text-secondary-text">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Datenschutzerklärung
        </h1>
        <p>
          <strong>Stand:</strong> Februar 2026
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Verantwortlicher
        </h2>
        <p>
          <strong className="text-foreground">
            Marco Preuss – Einzelunternehmen
          </strong>
          <br />
          Augustenburgstraße 8d, 76229 Karlsruhe, Baden-Württemberg, Deutschland
          <br />
          E-Mail:{" "}
          <a
            href="mailto:mpapps@web.de"
            className="text-primary hover:underline"
          >
            mpapps@web.de
          </a>
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Kurzfassung
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>
              Kein Nutzerkonto, kein Tracking für Werbung.
              Erste-Partei-Analytics zur App-Verbesserung werden genutzt.
            </b>
          </li>
          <li>
            <b>Food-Logs</b> werden <b>ausschließlich auf deinem Gerät</b>{" "}
            gespeichert.
          </li>
          <li>
            <b>Apple Health:</b> Du kannst optional Gewichtsdaten mit Apple
            Health synchronisieren (lesen/schreiben). Dieser Datenaustausch
            erfolgt <b>nur lokal</b>; Health-Daten werden <b>nicht</b> an unsere
            Server gesendet.
          </li>
          <li>
            <b>Optionale Bild-Uploads:</b> Foto wird kurzzeitig in einem{" "}
            <b>privaten</b> Supabase-Bucket in <b>eu-central-1 (Frankfurt)</b>{" "}
            gespeichert; eine Edge Function erzeugt eine{" "}
            <b>kurzlebige Signed-URL</b> und übermittelt sie an OpenAI zur
            Nährwertanalyse. Ein <b>automatischer Löschvorgang</b> löscht das
            Bild innerhalb von ~1 Stunde.
          </li>
          <li>
            <b>Rate Limiting:</b> zur Missbrauchsabwehr verarbeiten wir die{" "}
            <b>IP-Adresse</b> über Upstash Redis in{" "}
            <b>eu-central-1 (Frankfurt, AWS)</b>. Die Zähler sind{" "}
            <b>kurzlebig (~60 s)</b> und werden <b>nicht</b> mit In-App-Daten
            verknüpft.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Welche Daten verarbeiten wir?
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <b>Auf dem Gerät (on-device):</b> deine Food-Logs (Texte, Mengen,
            Nährwerte). Diese Daten verlassen dein Gerät nicht.
          </li>
          <li>
            <b>Apple Health (optional):</b> Wenn du die Verbindung aktivierst,
            liest und schreibt die App Gewichtsdaten in Apple Health. Die
            Datenverarbeitung erfolgt ausschließlich lokal auf dem Gerät. Wir
            übertragen keine Health-Daten auf externe Server und verwenden sie
            nicht für Werbung oder Analytics.
          </li>
          <li>
            <b>Optionaler Bild-Upload (User Content):</b> kurzfristige
            Speicherung in Supabase (<b>eu-central-1, Frankfurt</b>) zur
            Analyse. Bitte lade keine Bilder hoch, die Personen oder persönliche
            Informationen/EXIF enthalten.
          </li>
          <li>
            <b>Technisch erforderlich für Ratelimiting (Sicherheit):</b>{" "}
            <b>IP-Adresse</b>, Zeitstempel und ein Zähler werden über Upstash
            Redis in <b>eu-central-1 (Frankfurt, AWS)</b> verarbeitet, um
            Missbrauch zu verhindern und den stabilen Betrieb sicherzustellen.
            Keine Profilbildung oder Marketingnutzung; keine Verknüpfung mit
            deinen In-App-Food-Logs.
          </li>
          <li>
            <b>App-Nutzung & Analytics:</b> Standard-Geräteinformationen,
            App-Lebenszyklus-Ereignisse und anonyme Interaktionsdaten zur
            Produktverbesserung und Fehlerbehebung. Es werden keine Klarnamen
            von Lebensmitteln, keine hochgeladenen Bilder und keine
            personenbezogenen Daten (PII) an unsere Analytics-Server gesendet.
          </li>
          <li>
            <b>Support-Website:</b> Beim Aufruf unserer Webseiten (gehostet bei
            Vercel) kann der Hoster aus Sicherheitsgründen <i>IP-Adressen</i>{" "}
            und Zugriffslogs verarbeiten.
          </li>
        </ol>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Zwecke und Rechtsgrundlagen
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>App-Funktion (Bildanalyse):</b> Vertragserfüllung/vorvertragliche
            Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
          </li>
          <li>
            <b>IT-Sicherheit/Betrieb (Ratelimiting & Hosting-Logs):</b>{" "}
            berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
          </li>
          <li>
            <b>Produktverbesserung & Fehlerbehebung (Analytics):</b>{" "}
            berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), um die
            App-Erfahrung zu optimieren und Abstürze zu beheben.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          So funktioniert die Bildanalyse (Funktionsablauf)
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Upload des Bildes per TLS in einen <b>nicht öffentlichen</b>{" "}
            Supabase-Storage-Bucket (<b>eu-central-1, Frankfurt</b>).
          </li>
          <li>
            Supabase Edge Function erzeugt eine <b>kurzlebige Signed-URL</b> für
            dieses Bild.
          </li>
          <li>
            Die Edge Function übermittelt <b>Signed-URL + Prompt</b> an{" "}
            <b>OpenAI</b> zur Auswertung.
          </li>
          <li>
            Die ermittelten Nährwertinfos werden an die Edge Function
            zurückgesendet und anschließend <b>ausschließlich lokal</b> auf
            deinem Gerät gespeichert.
          </li>
          <li>
            Ein automatischer Löschvorgang <b>entfernt das Bild</b> aus dem
            Storage in der Regel innerhalb von <b>~1 Stunde</b>.
          </li>
        </ol>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Empfänger / Auftragsverarbeiter
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>Supabase, Inc.</b> — privater Storage-Bucket & Signed-URLs;
            Region: <b>eu-central-1 (Frankfurt)</b>.
          </li>
          <li>
            <b>OpenAI</b> — API für Bildanalyse.{" "}
            <i>Keine Trainingsnutzung der API-Daten by default</i>;
            Eingaben/Ausgaben können bis zu <b>30 Tage</b> zu
            Missbrauchsabwehr-Zwecken vorgehalten werden.
          </li>
          <li>
            <b>Upstash, Inc.</b> — Managed Redis für Ratelimiting; Region:{" "}
            <b>eu-central-1 (Frankfurt, AWS)</b>. Speichert nur kurzlebige
            Zähler (IP, Zeitstempel) zur Fair-Use/Abuse-Prevention.
          </li>
          <li>
            <b>PostHog, Inc.</b> — Erste-Partei-Produktanalytics &
            Crash-Reporting; Region: <b>EU (Frankfurt) / USA</b>.
          </li>
          <li>
            <b>Vercel Inc.</b> — Hosting & CDN für die Webseite. Region:
            Global/USA. Speichert Access-Logs (IPs) zu Sicherheitszwecken.
            (SCCs/DPF).
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Übermittlung in Drittländer
        </h2>
        <p>
          Unsere Dienstleister haben ihren Sitz in den USA. Obwohl Daten für
          Storage und Ratelimiting <b>in der EU (Frankfurt, eu-central-1)</b>{" "}
          gespeichert werden, kann ein <b>Remote-Zugriff aus den USA</b> nicht
          ausgeschlossen werden. Übermittlungen/Zugriffe stützen wir auf
          geeignete Garantien (insb. EU-Standardvertragsklauseln, SCCs).
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Speicherdauer
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>Bilder bei Supabase:</b> automatischer Löschvorgang{" "}
            <b>&lt; 1 Stunde</b> nach Upload.
          </li>
          <li>
            <b>Ratelimiting-Zähler (Upstash):</b> <b>kurzlebig</b> und verfallen
            automatisch mit dem Sliding-Window (<b>~60 Sekunden</b>). Systemlogs
            des Anbieters können abweichen (Sicherheits-/Betriebszwecke).
          </li>
          <li>
            <b>Food-Logs:</b> verbleiben ausschließlich auf deinem Gerät, bis du
            sie löschst oder die App entfernst.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Sicherheit
        </h2>
        <p>
          TLS-Transportverschlüsselung, private Buckets mit Signed-URLs,
          Datenminimierung, kurze Aufbewahrungsfristen.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Kein Tracking für Fremdwerbung
        </h2>
        <p>
          Wir nutzen Analysedaten ausschließlich selbst (First-Party). Es gibt
          keine Werbe-SDKs, kein Profiling für Dritte, kein
          Device-Fingerprinting und kein Cross-App-Tracking (ATT).
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Rechte der betroffenen Personen
        </h2>
        <p>
          Du hast nach DSGVO insbesondere Rechte auf Auskunft, Berichtigung,
          Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch.
          Außerdem kannst du dich bei einer Aufsichtsbehörde beschweren, z. B.
          beim{" "}
          <a
            href="https://www.baden-wuerttemberg.datenschutz.de/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LfDI Baden-Württemberg
          </a>
          .
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Kontakt</h2>
        <p>
          Bei Fragen oder zur Ausübung deiner Rechte:{" "}
          <a
            href="mailto:mpapps@web.de"
            className="text-primary hover:underline"
          >
            mpapps@web.de
          </a>
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Änderungen
        </h2>
        <p>
          Wir passen diese Erklärung an, wenn sich Technik, Rechtslage oder
          unser Dienst ändern. Die aktuelle Fassung ist hier veröffentlicht.
        </p>

        <hr className="my-8 border-border" />
        <p className="text-sm text-secondary-text/80">
          Transparenzhinweise zu Dienstleistern:
          <br />
          Supabase — private Buckets & kurzlebige Signed-URLs (eu-central-1,
          Frankfurt); Scheduler für Löschvorgänge.
          <br />
          OpenAI — API ohne Trainingsnutzung by default; bis zu 30-tägige
          Aufbewahrung zu Abuse-Monitoring.
          <br />
          Upstash — Managed Redis für kurzlebige Ratelimit-Zähler (eu-central-1,
          Frankfurt, AWS).
          <br />
          PostHog — Produktanalytics & Crash-Reporting (EU).
          <br />
          Vercel — Hosting & CDN (Global/USA); kann IP-Adressen aus
          Sicherheitsgründen protokollieren.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-secondary-text">
      <h1 className="text-3xl font-bold text-foreground mb-4">
        Privacy Policy
      </h1>
      <p>
        <strong>Effective:</strong> February 2026
      </p>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
        Controller
      </h2>
      <p>
        <strong className="text-foreground">
          Marco Preuss – Sole Proprietor
        </strong>
        <br />
        Augustenburgstraße 8d, 76229 Karlsruhe, Baden-Württemberg, Germany
        <br />
        Email:{" "}
        <a href="mailto:mpapps@web.de" className="text-primary hover:underline">
          mpapps@web.de
        </a>
      </p>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Summary</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <b>
            No user accounts, no tracking for advertising. First-party analytics
            are used for product improvement.
          </b>
        </li>
        <li>
          <b>Food logs</b> are stored <b>on device only</b>.
        </li>
        <li>
          <b>Apple Health:</b> You can optionally sync weight data with Apple
          Health (read/write). This data exchange happens <b>locally only</b>;
          Health data is <b>never</b> sent to our servers.
        </li>
        <li>
          <b>Optional photo upload:</b> image stored briefly in a <b>private</b>{" "}
          Supabase bucket in <b>eu-central-1 (Frankfurt)</b>; an Edge Function
          creates a <b>short-lived signed URL</b> and sends it to OpenAI for
          nutrition analysis. An <b>automatic delete job</b>{" "}
          <b>deletes the image within ~1 hour</b>.
        </li>{" "}
        <li>
          <b>Rate limiting:</b> we process the <b>IP address</b> for abuse
          prevention using Upstash Redis in <b>eu-central-1 (Frankfurt, AWS)</b>
          . Counters are <b>short-lived (~60 s window)</b> and not linked to
          in-app data.
        </li>
      </ul>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
        Data we process
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <b>On device:</b> your food logs (text, amounts, nutrition). Not
          transmitted.
        </li>
        <li>
          <b>Apple Health (optional):</b> If you enable the connection, the app
          reads and writes weight data to Apple Health. The data processing
          occurs locally on your device only. We do not transmit Health data to
          external servers, nor do we use it for advertising or analytics.
        </li>
        <li>
          <b>Optional photo (User Content):</b> temporarily stored in Supabase (
          <b>eu-central-1, Frankfurt</b>) to enable analysis. Please avoid
          uploading images of people or personal data/EXIF.
        </li>
        <li>
          <b>Technically necessary for rate limiting (security):</b>{" "}
          <b>IP address</b>, timestamps and a counter processed via Upstash
          Redis in <b>eu-central-1 (Frankfurt, AWS)</b> to prevent abuse and
          ensure service stability. No profiling or marketing use; no linkage to
          in-app food logs.
        </li>
        <li>
          <b>App Usage & Analytics:</b> Standard device information, app
          lifecycle events, and anonymous interaction data for product
          improvement and debugging. No raw food names, uploaded images, or
          personally identifiable information (PII) are sent to our analytics
          servers.
        </li>
        <li>
          <b>Support website:</b> When visiting our websites (hosted by Vercel),
          the hoster may process <i>IP addresses</i> and access logs for
          security purposes.
        </li>
      </ol>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
        Purposes & legal bases
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <b>App functionality (image analysis):</b> performance of contract
          (Art. 6(1)(b) GDPR).
        </li>
        <li>
          <b>Security/operations (rate limiting & hosting logs):</b> legitimate
          interests (Art. 6(1)(f) GDPR).
        </li>
        <li>
          <b>Product Analytics & Diagnostics:</b> legitimate interests (Art.
          6(1)(f) GDPR) to optimize the app experience and fix crashes.
        </li>
      </ul>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
        How the image analysis works (functionality)
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          The image is uploaded over TLS to a <b>non-public</b> Supabase storage
          bucket (<b>eu-central-1, Frankfurt</b>).
        </li>
        <li>
          A Supabase Edge Function generates a <b>short-lived signed URL</b> for
          that image.
        </li>
        <li>
          The Edge Function sends the signed URL + a text prompt to{" "}
          <b>OpenAI</b> (image analysis).
        </li>
        <li>
          OpenAI returns estimated nutrition; we send these results back to your
          device and store them <b>locally only</b>.
        </li>
        <li>
          An automatic delete job <b>deletes the stored image</b> from Supabase
          typically within <b>~1 hour</b>.
        </li>{" "}
      </ol>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
        Processors
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <b>Supabase, Inc.</b> — private storage bucket & signed URLs; region:{" "}
          <b>eu-central-1 (Frankfurt)</b>.
        </li>
        <li>
          <b>OpenAI</b> — image analysis API.{" "}
          <i>No training on API data by default</i>; inputs/outputs may be
          retained for up to <b>30 days</b> for abuse prevention.
        </li>
        <li>
          <b>Upstash, Inc.</b> — managed Redis for rate limiting; region:{" "}
          <b>eu-central-1 (Frankfurt, AWS)</b>. Stores short-lived counters (IP,
          timestamp) only for abuse/fair-use protection.
        </li>
        <li>
          <b>PostHog, Inc.</b> — first-party product analytics & crash
          reporting; region: <b>EU (Frankfurt) / US</b>.
        </li>
        <li>
          <b>Vercel Inc.</b> — Hosting & CDN for the website. Region:
          Global/USA. Stores access logs (IPs) for security purposes.
          (SCCs/DPF).
        </li>
      </ul>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
        International transfers
      </h2>
      <p>
        Our providers are US-based. While data at rest for storage and rate
        limiting is kept in the EU (<b>Frankfurt, eu-central-1</b>), remote
        access from the US cannot be excluded. Transfers rely on appropriate
        safeguards such as the EU Standard Contractual Clauses (SCCs).
      </p>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Retention</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <b>Images on Supabase:</b> automatic deletion, <b>&lt; 1 hour</b>{" "}
          after upload.
        </li>{" "}
        <li>
          <b>Rate limiting counters (Upstash):</b> short-lived and expire
          automatically with the sliding-window (<b>~60 seconds</b>). Provider
          system logs may have different retention for security/operations.
        </li>
        <li>
          <b>Food logs:</b> remain on your device until you delete them or
          remove the app.
        </li>
      </ul>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Security</h2>
      <p>
        Transport encryption (TLS), private buckets with signed URLs, data
        minimization, and short retention windows.
      </p>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
        No tracking/ads
      </h2>
      <p>
        We use analytics data exclusively for ourselves (first-party). There are
        no ad SDKs, no third-party profiling, no device fingerprinting, and no
        cross-app tracking (ATT).
      </p>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
        Your rights
      </h2>
      <p>
        You can exercise your GDPR rights (access, rectification, deletion,
        restriction, portability, objection) by contacting us at the email
        above. You may lodge a complaint with a supervisory authority.
      </p>

      <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Changes</h2>
      <p>
        We may update this notice as technology, law, or our service changes.
        The current version is published here.
      </p>

      <hr className="my-8 border-border" />
      <p className="text-sm text-secondary-text/80">
        Transparency notes on service providers:
        <br />
        Supabase — private buckets & short-lived signed URLs (eu-central-1,
        Frankfurt); scheduler for deletion jobs.
        <br />
        OpenAI — API without training use by default; up to 30-day retention for
        abuse monitoring.
        <br />
        Upstash — managed Redis for short-lived rate-limit counters
        (eu-central-1, Frankfurt, AWS).
        <br />
        PostHog — product analytics & crash reporting (EU).
        <br />
        Vercel — Hosting & CDN (Global/USA); may log IP addresses for security.
      </p>
    </div>
  );
}
