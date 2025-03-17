import Button from "../Button/Button";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { StyledPaginationContainer } from "./Pagination.styled";
import { getPageRange } from "./Pagination.utils";

const Pagination = ({
	prevPage,
	currentPage,
	nextPage,
	totalPages,
	goToPage,
}: {
	prevPage: () => void;
	currentPage: number;
	nextPage: () => void;
	totalPages: number;
	goToPage: (page: number) => void;
}) => {
	const { start, end } = getPageRange(currentPage, totalPages);
	return (
		<StyledPaginationContainer>
			<Button
				icon={faCaretLeft}
				handleClick={prevPage}
				isDisabled={currentPage === 1}
				iconMargin={false}
			/>

			{Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
				(page) => (
					<Button
						key={page}
						text={page.toString()}
						handleClick={() => goToPage(page)}
						isActive={page === currentPage}
					/>
				),
			)}
			<Button
				icon={faCaretRight}
				handleClick={nextPage}
				isDisabled={currentPage === totalPages}
				iconMargin={false}
			/>
		</StyledPaginationContainer>
	);
};
export default Pagination;
