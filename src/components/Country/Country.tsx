"use client";
import Button from "@/components/Button/Button";
import { useCountries } from "@/context/CountriesContext";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import {
	CountryBorderContainer,
	CountryContainer,
	CountryDetails,
	CountryDetailsContainer,
	CountryInfo,
	CountryName,
} from "./Country.styled";
import Image from "next/image";
import {
	StyledCountryDetail,
	StyledTitle,
} from "../CountryCard/CountryCard.styled";

const Country = ({ countryCode }: { countryCode: string }) => {
	const router = useRouter();
	const { findCountryByAlpha3Code } = useCountries();
	const country = findCountryByAlpha3Code(countryCode);

	return (
		<CountryContainer>
			<Button
				text="Back"
				icon={faArrowLeft}
				handleClick={() => router.push("/")}
			/>
			{country && (
				<CountryDetails>
					<Image
						src={country.flags.svg}
						alt={country.name}
						width={500}
						height={300}
					/>
					<CountryInfo>
						<CountryName>{country.name}</CountryName>
						<CountryDetailsContainer>
							<div>
								<StyledCountryDetail>
									<StyledTitle>Native Name:</StyledTitle> {country.nativeName}
								</StyledCountryDetail>
								<StyledCountryDetail>
									<StyledTitle>Population:</StyledTitle> {country.population}
								</StyledCountryDetail>
								<StyledCountryDetail>
									<StyledTitle>Region:</StyledTitle> {country.region}
								</StyledCountryDetail>
								<StyledCountryDetail>
									<StyledTitle>Sub Region:</StyledTitle> {country.subregion}
								</StyledCountryDetail>
								<StyledCountryDetail>
									<StyledTitle>Capital:</StyledTitle> {country.capital}
								</StyledCountryDetail>
							</div>
							<div>
								<StyledCountryDetail>
									<StyledTitle>Top Level Domain:</StyledTitle>{" "}
									{country.topLevelDomain}
								</StyledCountryDetail>
								<StyledCountryDetail>
									<StyledTitle>Currencies:</StyledTitle>{" "}
									{country.currencies ? country.currencies[0].name : ""}
								</StyledCountryDetail>
								<StyledCountryDetail>
									<StyledTitle>Languages:</StyledTitle>{" "}
									{country.languages
										.map((language) => language.name)
										.join(", ")}
								</StyledCountryDetail>
							</div>
						</CountryDetailsContainer>
						<CountryBorderContainer>
							<StyledTitle>Border Countries:</StyledTitle>
								{country.borders?.map((border) => {
									const borderCountry = findCountryByAlpha3Code(border);
									return (
										borderCountry && (
											<Button
												key={border}
												text={borderCountry?.name}
												handleClick={() => router.push(`/countries/${border}`)}
											/>
										)
									);
								})}
						</CountryBorderContainer>
					</CountryInfo>
				</CountryDetails>
			)}
		</CountryContainer>
	);
};
export default Country;
