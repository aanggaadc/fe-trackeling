import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyTrip from "./pages/my_trip/MyTrip";
import UserAccount from "./pages/user_account/UserAccount";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="user">
						<Route path="edit/account/:userId" element={<UserAccount />} />
						<Route path="edit/biodata/:userId" element={<UserAccount />} />
						<Route path="mytrip/:userId" element={<MyTrip />} />
					</Route>
				</Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
