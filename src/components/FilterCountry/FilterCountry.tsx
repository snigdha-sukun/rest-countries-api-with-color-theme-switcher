"use client";
import { useEffect, useRef, useState } from "react";
import {
	StyledArrowIcon,
	StyledCustomSelect,
	StyledDropdownItem,
	StyledDropdownList,
	StyledSelectHeader,
} from "./FilterCountry.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterCountry = ({
	filterCountryByRegion,
}: { filterCountryByRegion: (region: string) => void }) => {
	const [selectedValue, setSelectedValue] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const options = [
		{ value: "", label: "All Regions" },
		{ value: "Africa", label: "Africa" },
		{ value: "Americas", label: "America" },
		{ value: "Asia", label: "Asia" },
		{ value: "Europe", label: "Europe" },
		{ value: "Oceania", label: "Oceania" },
	];
	const selectedOption =
		options.find((option) => option.value === selectedValue) || options[0];

	const onChange = (value: string) => {
		setSelectedValue(value);
		filterCountryByRegion(value)
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleOptionClick = (value: string) => {
		onChange(value);
		setIsOpen(false);
	};

	return (
		<StyledCustomSelect ref={dropdownRef}>
			<StyledSelectHeader onClick={() => setIsOpen(!isOpen)}>
				{selectedOption.value === "" ? "Filter by Region" : selectedOption.label}
				<StyledArrowIcon isOpen={isOpen}>
					<FontAwesomeIcon icon={faChevronDown} />
				</StyledArrowIcon>
			</StyledSelectHeader>
			{isOpen && (
				<StyledDropdownList>
					{options.map((option) => {
						if (option.value === "" && option.value === selectedValue) return null;
						return (
							<StyledDropdownItem
								key={option.value}
								onClick={() => handleOptionClick(option.value)}
								$isSelected={option.value === selectedValue}
							>
								{option.label}
							</StyledDropdownItem>
						);
					})}
				</StyledDropdownList>
			)}
		</StyledCustomSelect>
	);
};
export default FilterCountry;
