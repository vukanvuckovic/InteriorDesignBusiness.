import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "IDB.",
  description: "Interior Design Business.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overscroll-none">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overscroll-none bg-[linear-gradient(180deg,#1e1e1e_0%,#0f0f0f_100%)] bg-fixed text-white min-h-[100dvh]">
        {children}
      </body>
    </html>
  );
}
