import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | IDB.",
  description: "The latest trends and insights from the world of interior design.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
