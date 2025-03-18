import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "@/lib/ThemeWrapper";
import Header from "@/components/Header/Header";
import { CustomThemeProvider } from "@/context/ThemeContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { CountriesProvider } from "@/context/CountriesContext";

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	weight: ["300", "600", "800"],
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
			<body className={`${nunitoSans.className}`}>
				<StyledComponentsRegistry>
					<CustomThemeProvider>
						<ThemeWrapper>
							<CountriesProvider>
								<Header />
								{children}
							</CountriesProvider>
						</ThemeWrapper>
					</CustomThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
