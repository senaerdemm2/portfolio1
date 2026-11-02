import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://senaerdemm.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sena Erdem | Junior Data Analyst — SQL · Power BI · Python",
    template: "%s | Sena Erdem",
  },
  description:
    "Junior Data Analyst in Kraków, Poland with 1 year of e-commerce analytics experience at SOFTCOUNT. End-to-end Python pipelines (36 data sources, 230K+ orders), Power BI (DAX) dashboards, SQL, statistical analysis (hypothesis testing, A/B testing) and automated reporting. B.Sc. Computer Engineering (Vistula University, Apr 2026). Open to Junior Data Analyst, BI Analyst and Reporting Analyst roles.",
  keywords: [
    "Sena Erdem",
    "Junior Data Analyst",
    "BI Analyst",
    "Data Analyst Kraków",
    "Data Analyst Poland",
    "Power BI",
    "DAX",
    "SQL",
    "PostgreSQL",
    "Python",
    "Pandas",
    "SciPy",
    "ETL",
    "Data Quality",
    "Data Modeling",
    "Star Schema",
    "Hypothesis Testing",
    "A/B Testing",
    "Power Query",
    "Power Automate",
    "Tableau",
    "Excel",
    "Portfolio",
  ],
  authors: [{ name: "Sena Erdem" }],
  creator: "Sena Erdem",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sena Erdem | Junior Data Analyst — SQL · Power BI · Python",
    description:
      "Junior Data Analyst with 1 year of e-commerce analytics experience: end-to-end Python pipelines (36 data sources, 230K+ orders), Power BI (DAX) dashboards, SQL and statistical analysis.",
    url: siteUrl,
    siteName: "Sena Erdem — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sena Erdem | Junior Data Analyst — SQL · Power BI · Python",
    description:
      "Junior Data Analyst · SQL · Power BI (DAX) · Python · Power Automate — Kraków, Poland. Open to Data Analyst / BI Analyst roles.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sena Erdem",
  jobTitle: "Junior Data Analyst",
  description:
    "Junior Data Analyst specialising in SQL, Power BI (DAX), Python (Pandas, SciPy), data quality, ETL design and statistical analysis.",
  email: "mailto:sena.erdem.pl@gmail.com",
  telephone: "+48 792 624 121",
  url: siteUrl,
  image: `${siteUrl}/favicon.svg`,
  sameAs: [
    "https://linkedin.com/in/sena-erdem-a64b91345",
    "https://github.com/senaerdemm2",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kraków",
    addressCountry: "PL",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Vistula University" },
    { "@type": "CollegeOrUniversity", name: "HTW Dresden" },
  ],
  worksFor: {
    "@type": "Organization",
    name: "SOFTCOUNT",
  },
  knowsLanguage: ["en", "tr"],
  knowsAbout: [
    "Data Analysis",
    "Business Intelligence",
    "SQL",
    "Power BI",
    "DAX",
    "Python",
    "Pandas",
    "ETL",
    "Data Quality",
    "Data Modeling",
    "Statistics",
    "Hypothesis Testing",
    "A/B Testing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
