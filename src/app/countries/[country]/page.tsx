import Country from "@/components/Country/Country";

const CountryPage = async ({
	params,
}: {
	params: Promise<{ country: string }>;
}) => {
	const { country } = await params;

	return <Country countryCode={country} />;
};
export default CountryPage;
