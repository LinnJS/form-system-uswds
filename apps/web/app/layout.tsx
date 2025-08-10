import type { Metadata } from "next";
import localFont from "next/font/local";
import "~/app/globals.css";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Form System USWDS - Accessible React Form Components",
  description: "Production-ready React form components built on U.S. Web Design System standards. Features TypeScript support, React Hook Form integration, Zod validation, and WCAG 2.1 AA compliance.",
  keywords: "USWDS, React, Form Components, TypeScript, Accessibility, WCAG, Government Forms, React Hook Form, Zod",
  authors: [{ name: "Form System USWDS Team" }],
  openGraph: {
    title: "Form System USWDS",
    description: "Modern, accessible form components for government applications",
    type: "website",
  },
} satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pb-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
