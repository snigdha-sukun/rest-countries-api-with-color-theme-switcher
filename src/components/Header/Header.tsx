"use client";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import { useTheme } from "@/context/ThemeContext";
import { HeaderContainer, Heading2 } from "./Header.styled";
import Button from "../Button/Button";

const Header = () => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<HeaderContainer>
			<Heading2>Where in the world?</Heading2>
			<Button
				icon={isDarkMode ? faMoonSolid : faMoon}
				text="Dark Mode"
				handleClick={toggleTheme}
				hasShadow={false}
			/>
		</HeaderContainer>
	);
};

export default Header;
