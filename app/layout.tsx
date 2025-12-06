import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getmacroloop.app"),
  title: {
    default: "MacroLoop - The Fast AI Macro Tracker",
    template: "%s | MacroLoop",
  },
  description: "Built for athletes who know what they’re doing. No meal plans. No coaching. Just lightning-fast logging.",
  keywords: ["macro tracker", "calorie counter", "AI food log", "nutrition tracker", "protein tracker", "iOS app", "MacroLoop"],
  authors: [{ name: "Marco Preuss" }],
  creator: "Marco Preuss",
  publisher: "Marco Preuss",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getmacroloop.app",
    title: "MacroLoop - The Fast AI Macro Tracker",
    description: "Built for athletes who know what they’re doing. No meal plans. No coaching. Just lightning-fast logging.",
    siteName: "MacroLoop",
    images: [
      {
        url: "/assets/inAppScreenshots/dashboard.png",
        width: 1200,
        height: 630,
        alt: "MacroLoop Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacroLoop - The Fast AI Macro Tracker",
    description: "Built for athletes who know what they’re doing. No meal plans. No coaching. Just lightning-fast logging.",
    images: ["/assets/inAppScreenshots/dashboard.png"],
    creator: "@macroloop", 
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/ios-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}