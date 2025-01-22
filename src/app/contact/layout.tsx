import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | IDB.",
  description: "Get in touch with us about your next project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
