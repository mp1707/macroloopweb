import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum (Legal Notice)",
  description: "Legal Notice (Impressum) for MacroLoop. Contact information and provider details.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
