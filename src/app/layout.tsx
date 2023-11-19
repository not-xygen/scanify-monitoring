import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Scanify Monitoring",
  description:
    "Sebuah aplikasi monitoring untuk pendataan pengunaan listrik dari Aplikasi Mobile Scanify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={GeistSans.className}>
        <Providers>
          <main className="w-screen h-screen relative flex flex-row justify-start">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
