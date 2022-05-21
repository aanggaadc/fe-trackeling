import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyTrip from "./pages/my_trip/MyTrip";
import UserAccount from "./pages/user_account/UserAccount";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="user">
						<Route path="edit/account/:userId" element={<UserAccount />} />
						<Route path="edit/biodata/:userId" element={<UserAccount />} />
						<Route path="mytrip/:userId" element={<MyTrip />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
