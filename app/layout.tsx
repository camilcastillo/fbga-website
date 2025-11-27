import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Federación de Patinaje Gran Buenos Aires - Patín Artístico Argentina",
  description:
    "Federación oficial de patinaje artístico de Gran Buenos Aires. Capacitaciones, competencias, indumentaria oficial y más de 100 clubes afiliados. Únete a la comunidad del patín artístico.",
  keywords:
    "patinaje artístico, federación, Gran Buenos Aires, Argentina, patín, competencias, capacitaciones, jueces, clubes",
  authors: [{ name: "Federación de Patinaje Gran Buenos Aires" }],
  creator: "Federación de Patinaje Gran Buenos Aires",
  publisher: "Federación de Patinaje Gran Buenos Aires",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://federacionpatinajegba.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Federación de Patinaje Gran Buenos Aires",
    description:
      "Federación oficial de patinaje artístico con más de 100 clubes afiliados. Capacitaciones, competencias e indumentaria oficial.",
    url: "https://federacionpatinajegba.com",
    siteName: "Federación de Patinaje Gran Buenos Aires",
    images: [
      {
        url: "/logo-federacion.png",
        width: 1200,
        height: 630,
        alt: "Logo Federación de Patinaje Gran Buenos Aires",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federación de Patinaje Gran Buenos Aires",
    description: "Federación oficial de patinaje artístico con más de 100 clubes afiliados.",
    images: ["/logo-federacion.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  themeColor: "#4a90e2",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
