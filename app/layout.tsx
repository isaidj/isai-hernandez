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
  title: "Isaidev343",
  description: "Web developer portfolio",
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
      </head>
      <body className={roboto.className}>
        <Providers>
          <main className="dark flex min-h-screen flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
