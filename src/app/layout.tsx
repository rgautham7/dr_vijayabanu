import type { Metadata } from "next";
import { IBM_Plex_Sans_Condensed, Judson } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sacramento = localFont({
  src: './fonts/Sacramento-Regular.ttf',
  variable: '--font-sacramento',
});

const ibmPlex = IBM_Plex_Sans_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
});

const judson = Judson({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-judson',
});

export const metadata: Metadata = {
  title: "Vijayabanu Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sacramento.variable} ${ibmPlex.variable} ${judson.variable}`}
      >
        {children}
      </body>
    </html>
  );
}