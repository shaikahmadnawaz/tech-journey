import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Journey",
  description:
    "TechJourney is your all-in-one guide to navigating the vast world of technology. Discover comprehensive roadmaps, tutorials, and resources for web development, DevOps, web3, cloud computing, and much more. Whether you're a beginner looking to start your tech journey or an experienced professional seeking to enhance your skills, TechJourney is your trusted companion on the path to tech mastery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background antialiased ${montserrat.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
