import { Providers } from "./providers";
import { MainMenu } from "@/app/components/Menus";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const chalkboard = LocalFont({
  src: "../public/fonts/Chalkboard.ttf",
  variable: "--font-chalkboard",
});
export const metadata: Metadata = {
  title: "Isai Hernandez",
  description: `This is my personal website, where I share my projects.
  I am a Systems Engineer, with a great passion for technology and programming.
  Eager to design innovative solutions!`,
  applicationName: "Isai Hernandez",
  authors: [
    {
      name: "Isai Hernandez",
      url: "https://isaihernandez.dev",
    },
  ],
  keywords: [
    "Isai",
    "Hernandez",
    "react",
    "developer",
    "software",
    "engineer",
    "react native",
    "css",
    "html",
    "javascript",
    "typescript",
    "nextjs",
    "nodejs",
    "express",
    "mysql",
  ],
  classification: "Software Engineer",
  creator: "Isai Hernandez",
  publisher: "Isai Hernandez",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[inter.className, chalkboard.variable].join(" ")}
    >
      <head>
        <Analytics />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4940816824815957"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={roboto.className}>
        <Providers>
          <main className="dark flex min-h-screen flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
