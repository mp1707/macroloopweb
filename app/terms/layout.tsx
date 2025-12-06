import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for MacroLoop. Read about our usage policies, liability, and subscription details.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
