import React from "react";
import "./Signup.css";
import Logo from "../../trackling.png";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Back to home
  </Tooltip>
);

function Signup() {
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
            <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
              <Button variant="link">
                <BsFillArrowLeftCircleFill />
              </Button>
            </OverlayTrigger>
            ,
          </div>
        </div>

        <div className="right-signup">
          <div className="title">Sign Up</div>
          <form id="form-signup">
            <div className="form-group">
              <input type="email" className="form-control" id="EmailInput" name="EmailInput" aria-describedby="emailHelp" placeholder="Enter email" />
              {/* <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small> */}
            </div>
            <div className="form-group mt-3">
              <input type="number" className="form-control" id="phoneNumber" placeholder="Input No. HP" />
              {/* <small id="passworderror" className="text-danger form-text"></small> */}
            </div>
            <div className="form-group mt-3">
              <input type="number" className="form-control" id="age" placeholder="Usia" />
              {/* <small id="passworderror" className="text-danger form-text"></small> */}
            </div>
            <div className="form-group mt-3">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              {/* <small id="passworderror" className="text-danger form-text"></small> */}
            </div>
            <div className="form-group mt-3">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
              {/* <small id="passworderror" className="text-danger form-text"></small> */}
            </div>

            <div className="btn-signup">
              <button type="submit" className="btn btn-primary mt-3">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
