import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonText, StyledButton } from "./Button.styled";

const Button = ({
	text,
	handleClick,
	icon,
	hasShadow = true,
	isDisabled = false,
	isActive = false,
	iconMargin = true,
}: {
	text?: string;
	handleClick: () => void;
	icon?: IconProp;
	hasShadow?: boolean;
	isDisabled?: boolean;
	isActive?: boolean;
	iconMargin?: boolean;
}) => {
	return (
		<StyledButton
			disabled={isDisabled}
			$hasShadow={hasShadow}
			$isBold={isActive}
			$iconMargin={iconMargin}
			onClick={handleClick}
		>
			{icon && <FontAwesomeIcon icon={icon} />}
			<ButtonText>{text}</ButtonText>
		</StyledButton>
	);
};
export default Button;
