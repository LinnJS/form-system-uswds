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
  title: "Form System USWDS - Documentation",
  description: "Comprehensive documentation for Form System USWDS - React form components built on U.S. Web Design System standards with TypeScript, React Hook Form, and accessibility features.",
  keywords: "USWDS Documentation, React Forms, TypeScript, Component Library, API Reference, Examples",
  authors: [{ name: "Form System USWDS Team" }],
  openGraph: {
    title: "Form System USWDS Documentation",
    description: "Learn how to use Form System USWDS components in your applications",
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
