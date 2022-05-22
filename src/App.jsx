import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path='/trip'>
          <Route index element={<Trip />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;