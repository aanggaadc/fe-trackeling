import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyTrip from "./pages/my_trip/MyTrip";
import UserAccount from "./pages/user_account/UserAccount";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import TripForm from "./pages/trip_form/TripForm";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./private_routes/PrivateRoutes";
// import { useSelector } from "react-redux";

function App() {
  //   const { user } = useSelector((state) => {
  //     return state;
  //   });
  //   console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            <Route path="trip">
              <Route path="create" element={<TripForm />} />
            </Route>
            <Route path="user">
              <Route path="edit/account/:userId" element={<UserAccount />} />
              <Route path="edit/biodata/:userId" element={<UserAccount />} />
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
