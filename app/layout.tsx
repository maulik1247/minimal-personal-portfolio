import type { Metadata } from "next";
import { gabarito } from "@/lib/fonts";
import AppProviders from "./components/AppProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maulik Tanna | AI-Native Product Manager",
  description:
    "Product Manager with 5+ years in AI-native SaaS and enterprise workflow automation. Open to PM and Product Ops roles in Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gabarito.variable}>
      <body
        className={`${gabarito.className} ${gabarito.variable} antialiased`}
        style={{ backgroundColor: 'white', overflowX: 'hidden' }}
      >
        <AppProviders>
          <div className="mx-auto min-h-screen max-w-4xl overflow-visible border-x border-gray-200 bg-white">
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
