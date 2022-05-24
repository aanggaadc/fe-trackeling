import React from "react";
import "./Login.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from "../../trackling.png";
import { Formik } from "formik";
import Axios from "axios";
import { API_URL } from "../../config/url";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../../store/index";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Back to home
  </Tooltip>
);

function Login() {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const { fulfillUser } = bindActionCreators(actionCreators, dispatch);

  return (
    <div id="background-login" className="content-login">
      <div className="head-login">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="title fw-bold">Login</div>

        <Link to="/">
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
            <Button variant="link">
              <BsFillArrowLeftCircleFill />
            </Button>
          </OverlayTrigger>
        </Link>
      </div>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          Axios.post(`${API_URL}/login`, values)
            .then((response) => {
              console.log("RESPONSE", response);
              localStorage.setItem("authKey", JSON.stringify(response.data.data));
              //   fulfillUser(response.data.data);
              navigate("/");
              toast.success("Welcome to Our Site!");
            })
            .catch((error) => {
              if (error.response) {
                toast.error(error.response.data.message);
              } else {
                toast.error("Can't Connect to Our Server");
              }
              console.log(error);
            });
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form id="form-login">
            <div className="form-group">
              <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={handleChange} />
              {/* <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small> */}
            </div>

            <div className="form-group mt-3">
              <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleChange} />
              {/* <small id="passworderror" className="text-danger form-text"></small> */}
            </div>

            <div className="btn-login">
              <button onClick={handleSubmit} type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>

      <div className="login-text">
        <p>
          No Account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
