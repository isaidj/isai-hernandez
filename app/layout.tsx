import { Providers } from "./providers";
import { MainMenu } from "@/components/Menus";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <MainMenu
            routes={[
              { name: "Home", link: "/" },
              { name: "Applications", link: "/dashboard" },
            ]}
          />
          <main className="flex min-h-screen flex-col">{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
