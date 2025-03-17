import {
	StyledOption,
	StyledSelect,
} from "./FilterCountry.styled";

const FilterCountry = ({
	filterCountryByRegion,
}: { filterCountryByRegion: (region: string) => void }) => {
	return (
			<StyledSelect onChange={(e) => filterCountryByRegion(e.target.value)}>
				<StyledOption value="">All Regions</StyledOption>
				<StyledOption value="Africa">Africa</StyledOption>
				<StyledOption value="Americas">America</StyledOption>
				<StyledOption value="Asia">Asia</StyledOption>
				<StyledOption value="Europe">Europe</StyledOption>
				<StyledOption value="Oceania">Oceania</StyledOption>
			</StyledSelect>
	);
};
export default FilterCountry;
