import React from "react";
import "./Signup.css";
import Logo from "../../trackling.png";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Formik, Form } from 'formik'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '../../config/url'

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Back to home
  </Tooltip>
);

function Signup() {
  const navigate = useNavigate()
  return (
    <div id="background-signup">
      <div className="container-signup">
        <div className="left-signup">
          <div className="logo">
            <img src={Logo} alt="" className="img-fluid" />
          </div>
          <div className="text">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Login
              </Link>
            </p>

            <Link to='/'>
              <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                <Button variant="link">
                  <BsFillArrowLeftCircleFill />
                </Button>
              </OverlayTrigger>
            </Link>
          </div>
        </div>

        <div className="right-signup">
          <div className="title fw-bold">Sign Up</div>
          <Formik
            initialValues={{
              username: "",
              email: "",
              age: "",
              phone_number: "",
              password1: "",
              password2: ""
            }}

            onSubmit={(values) => {
              console.log(values)
              Axios.post(`${API_URL}/user/create`, values)
                .then((response) => {
                  console.log(response)
                  toast.success("You Are Successfully Registered")
                  navigate('/')
                })
                .catch((error) => {
                  if (error.response) {
                    toast.error(error.response.data.message)
                  } else {
                    toast.error("Cannot Connect to Server")
                  }
                })
            }}
          >
            {({ handleSubmit, handleChange, setFieldValue }) => (
              <Form id="form-signup">
                <div className="form-group">
                  <input type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => {
                      setFieldValue('username', e.target.value)
                    }}
                    required />
                </div>
                <div className="form-group mt-3">
                  <input type="email"
                    className="form-control"
                    id="emaiil"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group mt-3">
                  <input type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phone_number"
                    placeholder="Phone number"
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group mt-3">
                  <input type="text"
                    className="form-control"
                    id="age"
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group mt-3">
                  <input type="password"
                    className="form-control"
                    id="password1"
                    name="password1"
                    placeholder="Password"
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group mt-3">
                  <input type="password"
                    className="form-control"
                    id="password2"
                    name="password2"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required />
                </div>

                <div className="btn-signup">
                  <button onClick={handleSubmit} type="submit" className="btn btn-primary mt-3">
                    Signup
                  </button>
                </div>
              </Form>
            )}

          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Signup;
