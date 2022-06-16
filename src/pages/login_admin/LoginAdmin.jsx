import React from "react";
import "./LoginAdmin.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../../trackling.png";
import { Formik } from "formik";
import Axios from "axios";
import { API_URL } from "../../config/url";
import { toast } from "react-toastify";
import { useEffect } from "react";

const renderTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Back to home
	</Tooltip>
);

function LoginAdmin() {
	const [searchParams] = useSearchParams();
	const logout = searchParams.get("logout");

	const navigate = useNavigate();

	useEffect(() => {
		if (logout) {
			toast.success("You are logged out");
		}
	}, []);

	return (
		<div id="background-login" className="content-login">
			<div className="head-login">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="title fw-bold">Admin</div>

				<Link to="/">
					<OverlayTrigger
						placement="right"
						delay={{ show: 250, hide: 400 }}
						overlay={renderTooltip}
					>
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
				onSubmit={(values) => {
					Axios.post(`${API_URL}/login-admin`, values)
						.then((response) => {
							localStorage.setItem("adminKey", JSON.stringify(response.data.data));
							navigate(`/redirect`);
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
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								placeholder="Email"
								onChange={handleChange}
							/>
						</div>

						<div className="form-group mt-3">
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								placeholder="Password"
								onChange={handleChange}
							/>
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
					Are you User? <Link to="/login">Login Here!</Link>
				</p>
			</div>
		</div>
	);
}

export default LoginAdmin;
