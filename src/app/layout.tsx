import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code, Inter } from "next/font/google";

import "./globals.css";

const jetBrainMono = JetBrains_Mono({
  variable: "--font-jetBrain-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "James Clifford Astronomo II",
  description: "My web portolio as a frontend-focused full stack engineer.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainMono.variable}  ${firaCode.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
