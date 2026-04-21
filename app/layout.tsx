import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omai Inspired",
  description: "Site editorial de villas de luxo, pronto para GitHub e Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
