import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({
  style: ['normal', 'italic'],
  axes: ['wdth'],
  subsets: ['latin'],
  display: 'swap',
});

// const roboto_condensed = Roboto_Condensed({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: "Gehna.World",
  description: "Gehna Ki Duniya. Where you can find and purchase every gehna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} antialiased`}>
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
