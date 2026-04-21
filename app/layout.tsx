import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amato Lima",
  description: "Ativos imobiliários | Real estate assets",
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
