import React from "react";
import "./Login.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../trackling.png";
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Back to home
  </Tooltip>
);

function Login() {
  return (
    <div id="background-login" className="content-login">
      <div className="head-login">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="title fw-bold">Login</div>

        <Link to='/'>
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
            <Button variant="link">
              <BsFillArrowLeftCircleFill />
            </Button>
          </OverlayTrigger>
        </Link>

      </div>

      <form id="form-login">
        <div className="form-group">
          <input type="text" className="form-control" id="username" name="username" placeholder="Username" />
          {/* <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small> */}
        </div>

        <div className="form-group mt-3">
          <input type="password" className="form-control" id="password" placeholder="Password" />
          {/* <small id="passworderror" className="text-danger form-text"></small> */}
        </div>

        <div className="btn-login">
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </div>
      </form>

      <div className="login-text">
        <p>No Account? <Link to='/signup'>Signup</Link></p>
      </div>
    </div>
  );
}

export default Login;
