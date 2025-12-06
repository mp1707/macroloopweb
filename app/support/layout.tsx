import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support for MacroLoop. Contact us for help or feedback.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
