import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "./home/components/theme-provider";
// import { Roboto_Condensed } from "next/font/google";
import "./styles/globals.css";
import Header from "./home/components/header";
import Footer from "./home/components/footer";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${open_sans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="relative flex min-h-screen flex-col">
            {/* Layout container with max width */}
            <div className="w-full max-w-screen-3xl mx-auto flex-1 flex flex-col">
              <Header />
              <div className="flex-1">
                {children}
              </div>
              <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
