"use client";

import type { ReactNode } from "react";
import {
	createContext,
	useContext,
	useMemo,
	useCallback,
	useState,
} from "react";
import countries from "@/public/data.json";
import { redirect } from "next/navigation";

export type CountryType = (typeof countries)[0];

type CountryContextType = {
	filteredCountries: CountryType[];
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
	findCountryByName: (name: string) => void;
	findCountryByAlpha3Code: (countryCode: string) => CountryType | undefined;
	filterCountryByRegion: (region: string) => void;
	goToPage: (page: number) => void;
	nextPage: () => void;
	prevPage: () => void;
};

const CountriesContext = createContext<CountryContextType | undefined>(
	undefined,
);
export function CountriesProvider({
	children,
}: { readonly children: ReactNode }) {
	const [filteredCountries, setFilteredCountries] =
		useState<CountryType[]>(countries);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(8);

	const findCountryByName = useCallback(
		(name: string) => {
			const searchResult = countries.find(
				(country) => country.name.toLowerCase() === name.toLowerCase(),
			);

			if (searchResult) {
				redirect(`/countries/${searchResult.alpha3Code}`);
			}
		},
		[],
	);

	const findCountryByAlpha3Code = useCallback(
		(countryCode: string) => {
			return countries.find((country) => country.alpha3Code === countryCode);
		},
		[],
	);

	const filterCountryByRegion = useCallback(
		(region: string) => {
			const filtered = region
				? countries.filter((country) => country.region === region)
				: countries; // If no region is selected, show all countries
			setFilteredCountries(filtered);
			setCurrentPage(1); // Reset to the first page after filtering
		},
		[],
	);

	const totalPages = useMemo(() => {
		return Math.ceil(filteredCountries.length / itemsPerPage);
	}, [filteredCountries, itemsPerPage]);

	const currentItems = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return filteredCountries.slice(startIndex, endIndex);
	}, [filteredCountries, currentPage, itemsPerPage]);

	const goToPage = useCallback((page: number) => {
		setCurrentPage(page);
	}, []);

	const nextPage = useCallback(() => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	}, [totalPages]);

	const prevPage = useCallback(() => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	}, []);

	const value = useMemo(
		() => ({
			findCountryByName,
			findCountryByAlpha3Code,
			filteredCountries: currentItems, // Return only the items for the current page
			currentPage,
			itemsPerPage,
			filterCountryByRegion,
			goToPage,
			nextPage,
			prevPage,
			totalPages,
		}),
		[
			findCountryByName,
			findCountryByAlpha3Code,
			filterCountryByRegion,
			currentItems,
			currentPage,
			goToPage,
			itemsPerPage,
			nextPage,
			prevPage,
			totalPages
		],
	);

	return (
		<CountriesContext.Provider value={value}>
			{children}
		</CountriesContext.Provider>
	);
}

export function useCountries() {
	const context = useContext(CountriesContext);
	if (!context) {
		throw new Error("useCountry must be used within a CountryProvider");
	}
	return context;
}
