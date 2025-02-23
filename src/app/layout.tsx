import type { Metadata } from "next";
import { Alata, Sirin_Stencil } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";

const alata = Alata({
  variable: "--font-alata",
  subsets: ["latin"],
  weight: "400",
});

const sirinStencil = Sirin_Stencil({
  variable: "--sirin-stencil",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mati turistik",
  description: "Eksploroni matin",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          defer
        ></script>
      </Head>
      <body
        className={` ${alata.variable} ${sirinStencil.variable} antialiased flex flex-col`}
      >
        <ClientProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
