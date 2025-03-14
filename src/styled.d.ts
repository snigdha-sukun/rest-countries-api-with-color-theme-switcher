import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			white: string;
			lightMode: {
				background: string;
				input: string;
				text: string;
			};
			darkMode: {
				background: string;
				elements: string;
			};
		};
		fontSizes: {
			home: string;
			details: string;
		};
		fontWeights: {
			base: number;
			bold: number;
			bolder: number;
		};
	}
}
