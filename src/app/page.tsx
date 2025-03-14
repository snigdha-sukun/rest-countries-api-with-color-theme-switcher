import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faChevronDown,
	faMagnifyingGlass,
	faMoon as faMoonSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { IconContainer } from "./Home.styled";

export default function Home() {
	return (
		<div>
			<main>
				<span>Where in the world?</span>
				<span>Dark Mode</span>
				<IconContainer>
					<FontAwesomeIcon icon={faMoonSolid} />
					<FontAwesomeIcon icon={faMoon} />
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<FontAwesomeIcon icon={faChevronDown} />
					<FontAwesomeIcon icon={faArrowLeft} />
				</IconContainer>
				<span>Search for a country</span>
				<span>Filter by region</span>
			</main>
		</div>
	);
}
