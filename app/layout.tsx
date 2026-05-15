import "./globals.css";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import CursorGlow from "@/components/CursorGlow";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geist.variable} ${jetBrainsMono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CursorGlow/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
