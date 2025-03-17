import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchCountryContainer, SearchInput } from "./SearchCountry.styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchCountry = ({
	search,
	handleChange,
	handleKeyDown,
}: {
	search: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
	return (
		<SearchCountryContainer>
			<FontAwesomeIcon icon={faMagnifyingGlass} />
			<SearchInput
				type="text"
				value={search}
				placeholder="Search for a country..."
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
		</SearchCountryContainer>
	);
};
export default SearchCountry;
