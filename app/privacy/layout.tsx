import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MacroLoop. Learn how we handle your data, image processing, and privacy rights.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
