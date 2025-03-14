import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import GlobalStyle from "./global-styles";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Countries Flags",
  description: "REST Countries API with color theme switcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
        {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
