import type { Metadata } from "next";
import { gabarito, notoSerifDevanagari } from "@/lib/fonts";
import AppProviders from "./components/AppProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maulik Tanna | Product Manager",
  description:
    "Product Manager with 5+ years in AI-native SaaS and enterprise workflow automation. Open to PM and Product Ops roles in Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gabarito.variable} ${notoSerifDevanagari.variable}`}>
      <body
        className={`${gabarito.className} ${gabarito.variable} ${notoSerifDevanagari.variable} antialiased`}
        style={{ backgroundColor: 'white', overflowX: 'hidden' }}
      >
        <AppProviders>
          <div className="mx-auto min-h-screen max-w-4xl border-gray-200 bg-white sm:border-x">
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
