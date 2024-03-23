import { Inter } from "next/font/google";
import "./globals.css";
import { NextThemeProvider } from "@/lib/NextThemeProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlayerProfileLog",
  description: "Generated by create next app",
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png",
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
        <Header />
        {children}
        </NextThemeProvider>
        </body>
    </html>
  );
}
