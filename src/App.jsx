import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { useLayoutEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import MyTrip from "./pages/my_trip/MyTrip";
import DetailTrip from "./pages/detail_trip/DetailTrip";
import UserAccount from "./pages/user_account/UserAccount";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import TripForm from "./pages/trip_form/TripForm";
import Trip from "./pages/trip/Trip";
import { ToastContainer, toast } from "react-toastify";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/index";
import useAuth from "./utils/auth";
import Axios from "axios";
import LoginAdmin from "./pages/login_admin/LoginAdmin";

function App() {
	const dispatch = useDispatch();
	const authData = useAuth();
	const navigate = useNavigate();
	const { fillUser } = bindActionCreators(actionCreators, dispatch);
	const { user } = useSelector((state) => {
		return state;
	});

	useLayoutEffect(() => {
		if (authData) {
			fillUser(authData);
		}
	}, []);

	Axios.interceptors.request.use(
		function (config) {
			const userAuthData = localStorage.getItem("authKey");
			if (userAuthData) {
				const parsedAuth = JSON.parse(userAuthData);
				config.headers.Authorization = "Bearer " + parsedAuth.token;
			}
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);

	Axios.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			if (error.response) {
				if (error.response.status == 401) {
					navigate("/login");
					localStorage.removeItem("auth");
					toast.error(error.response.data.message);
				}
			}
			return Promise.reject(error);
		}
	);

	return (
		<div className="App">
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route element={<PublicRoutes />}>
						<Route path="login" element={<Login />} />
						<Route path="login-admin" element={<LoginAdmin />} />
						<Route path="signup" element={<Signup />} />
					</Route>
					<Route path="trips" element={<Trip />} />
					<Route element={<PrivateRoutes />}>
						<Route path="trip">
							<Route path="create" element={<TripForm />} />
							<Route path="detail/:tripId" element={<DetailTrip />} />
						</Route>
						<Route path="user">
							<Route path="account" element={<UserAccount />} />
							<Route path="biodata" element={<UserAccount />} />
							<Route path="mytrip" element={<MyTrip />} />
						</Route>
					</Route>
				</Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
