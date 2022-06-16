import { render, screen } from "@testing-library/react";
import BannerTrip from "../../components/trip/BannerTrip";
import "@testing-library/jest-dom";

test("The page should have title 'MANY BENEFIT'", () => {
	render(<BannerTrip />);

	const title = screen.queryByText("MANY BENEFIT");
	expect(title).toBeInTheDocument();
});