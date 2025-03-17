import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			element: string;
			background: string;
			input: string;
			text: string;
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
