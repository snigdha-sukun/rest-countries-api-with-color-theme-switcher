import type { CountryType } from "@/context/CountriesContext";
import Image from "next/image";
import {
	StyledCardContent,
	StyledCountryCard,
	StyledCountryDetail,
	StyledName,
	StyledTitle,
} from "./CountryCard.styled";

const CountryCard = ({
	country,
	handleClick,
}: { country: CountryType; handleClick: (code: string) => void }) => {
	return (
		<StyledCountryCard onClick={() => handleClick(country.alpha3Code)}>
			<Image
				src={country.flags.svg}
				alt={country.name}
				width={300}
				height={200}
			/>
			<StyledCardContent>
				<StyledName>{country.name}</StyledName>
				<StyledCountryDetail>
					<StyledTitle>Population:</StyledTitle> {country.population}
				</StyledCountryDetail>
				<StyledCountryDetail>
					<StyledTitle>Region:</StyledTitle> {country.region}
				</StyledCountryDetail>
				<StyledCountryDetail>
					<StyledTitle>Capital:</StyledTitle> {country.capital}
				</StyledCountryDetail>
			</StyledCardContent>
		</StyledCountryCard>
	);
};

export default CountryCard;
