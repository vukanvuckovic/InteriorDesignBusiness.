import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | IDB.",
  description: "Transforming spaces with timeless style and modern comfort.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
