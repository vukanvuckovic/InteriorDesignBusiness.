import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | IDB.",
  description: "Get to know our team of passionate architects and designers.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
