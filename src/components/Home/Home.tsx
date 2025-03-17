"use client";

import {
	CountryCardContainer,
	StyledHomeContainer,
	StyledHomeHeader,
} from "./Home.styled";
import { useCountries } from "@/context/CountriesContext";
import CountryCard from "../CountryCard/CountryCard";
import FilterCountry from "../FilterCountry/FilterCountry";
import SearchCountry from "../SearchCountry/SearchCountry";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
	const {
		filteredCountries,
		prevPage,
		currentPage,
		nextPage,
		totalPages,
		goToPage,
		filterCountryByRegion,
		findCountryByName,
	} = useCountries();

	const [search, setSearch] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			findCountryByName(search);
		}
	};

	const router = useRouter();
	const handleCardClick = (countryCode: string) =>
		router.push(`/countries/${countryCode}`);

	return (
		<StyledHomeContainer>
			<StyledHomeHeader>
				<SearchCountry
					search={search}
					handleChange={handleChange}
					handleKeyDown={handleKeyDown}
				/>
				<FilterCountry filterCountryByRegion={filterCountryByRegion} />
			</StyledHomeHeader>
			<CountryCardContainer>
				{filteredCountries.map((country) => (
					<CountryCard
						key={country.alpha3Code}
						country={country}
						handleClick={handleCardClick}
					/>
				))}
			</CountryCardContainer>
			<Pagination
				prevPage={prevPage}
				nextPage={nextPage}
				goToPage={goToPage}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</StyledHomeContainer>
	);
};

export default Home;
