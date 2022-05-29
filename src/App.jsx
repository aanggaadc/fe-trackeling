import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyTrip from "./pages/my_trip/MyTrip";
import DetailTrip from "./pages/detail_trip/DetailTrip";
import UserAccount from "./pages/user_account/UserAccount";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import TripForm from "./pages/trip_form/TripForm";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./routes/PrivateRoutes";
import PubicRoutes from "./routes/PublicRoutes"
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/index";
import useAuth from "./utils/auth";

function App() {
	const dispatch = useDispatch();
	const authData = useAuth();
	const { fillUser } = bindActionCreators(actionCreators, dispatch);
	const { user } = useSelector((state) => {
		return state;
	});

	useLayoutEffect(() => {
		if (authData) {
			fillUser(authData);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route element={<PubicRoutes />}>
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
					</Route>
					<Route element={<PrivateRoutes />}>
						<Route path="trip">
							<Route path="create" element={<TripForm />} />
							<Route path="detail/:tripId" element={<DetailTrip />} />
						</Route>
						<Route path="user">
							<Route path="account/:userId" element={<UserAccount />} />
							<Route path="biodata/:userId" element={<UserAccount />} />
							<Route path="mytrip/:userId" element={<MyTrip />} />
						</Route>
					</Route>
				</Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
