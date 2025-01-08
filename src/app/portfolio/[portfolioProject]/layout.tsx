import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | IDB.",
  description: "A closer look at one of our interior design case studies.",
};

export default function PortfolioProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
