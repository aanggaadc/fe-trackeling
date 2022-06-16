import { render, screen } from "@testing-library/react";
import EditAccount from "./EditAccount";
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("console.log elements in EditAccount component", () => {
	const history = createMemoryHistory();

	render(
		<Router location={history.location} navigator={history}>
			<EditAccount userProfile={{ username: "sapiderman" }} />
		</Router>
	);

	screen.debug();
});