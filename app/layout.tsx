import { Providers } from "./providers";
import { MainMenu } from "@/components/Menus";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "isaidev343",
  description: "Web developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainMenu
            routes={[
              { name: "Home", link: "/" },
              { name: "Aplicaciones", link: "/dashboard" },
            ]}
          />
          <main className="flex min-h-screen flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
