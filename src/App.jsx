import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { useLayoutEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import MyTrip from "./pages/my_trip/MyTrip";
import DetailTrip from "./pages/detail_trip/DetailTrip";
import UserAccount from "./pages/user_account/UserAccount";
import DetailRecommendationTrip from "./pages/detail_recommendation_trip/DetailRecommendationTrip";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import CreateTrip from "./pages/create_trip/CreateTrip";
import EditTrip from "./pages/edit_trip/EditTrip";
import Trip from "./pages/trip/Trip";
import NotFound from './pages/404/NotFound'
import UnderConstruction from './pages/under_construction/UnderConstruction'
import { ToastContainer, toast } from "react-toastify";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store/index";
import useAuth from "./utils/auth";
import Axios from "axios";
import LoginAdmin from "./pages/login_admin/LoginAdmin";
import Redirect from "./Redirect";
import { ADMIN_URL } from "./config/url";
import ScrollButton from './components/scroll_button/ScrollButton'

function App() {
  const dispatch = useDispatch();
  const authData = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("adminKey");
  const url = `${ADMIN_URL}/?token=${token}`;
  const { fillUser } = bindActionCreators(actionCreators, dispatch);
  const { user } = useSelector((state) => {
    return state;
  });

  useLayoutEffect(() => {
    if (authData) {
      fillUser(authData);
    }
    localStorage.removeItem("adminKey");
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
        <Route path='*' element={<NotFound />} />
        <Route path='underconstruction' element={<UnderConstruction />} />
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
              <Route path="create" element={<CreateTrip />} />
              <Route path="edit/:tripId" element={<EditTrip />} />
              <Route path="detail/:tripId" element={<DetailTrip />} />
            </Route>
            <Route path="user">
              <Route path="account" element={<UserAccount />} />
              <Route path="biodata" element={<UserAccount />} />
              <Route path="mytrip" element={<MyTrip />} />
            </Route>
            <Route path="recomendation">
              <Route path="detail/:recommendationId" element={<DetailRecommendationTrip />} />
            </Route>
          </Route>
        </Route>
        <Route path="/redirect" element={<Redirect url={url} />} />
      </Routes>
      <ScrollButton />
      <ToastContainer />
    </div>
  );
}

export default App;
