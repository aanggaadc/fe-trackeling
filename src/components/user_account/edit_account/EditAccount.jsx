import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../../config/url";
import "./EditAccount.css";
import { toast } from "react-toastify";

function EditAccount({ userProfile, getUserProfile, updateReduxState }) {
	return (
		<div className="edit-account">
			<h1>Edit Account</h1>
			<Formik
				initialValues={{
					username: userProfile.username,
					email: userProfile.email,
					password1: "",
					password2: "",
				}}
				enableReinitialize={true}
				onSubmit={(values, actions) => {
					console.log("VALUE", values);
					Axios.put(`${API_URL}/user/edit`, values)
						.then((response) => {
							console.log("BERHASIL", response);
							toast.success(response.data.message);
							getUserProfile()
							updateReduxState()
						})
						.catch((error) => {
							if (error.response) {
								toast.error(error.response.data.message);
							} else {
								toast.error("Cannot Connect to Server");
							}
						});
					actions.setFieldValue("password1", "");
					actions.setFieldValue("password2", "");
				}}
			>
				{({ values, handleChange, handleSubmit, setFieldValue }) => (
					<form action="" id="form-editAccount">
						<div className="form-row">
							<div className="form-username">
								<label for="username" class="form-label">
									Username
								</label>
								<input
									type="text"
									class="form-control"
									id="username"
									placeholder=""
									name="username"
									required
									value={values.username}
									onChange={handleChange}
								/>
							</div>
							<div className="form-email">
								<label for="email" class="form-label">
									Email
								</label>
								<input
									type="email"
									class="form-control"
									id="email"
									placeholder=""
									name="email"
									required
									value={values.email}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-pwd">
								<label for="pwd" class="form-label">
									Password
								</label>
								<input
									type="password"
									class="form-control"
									id="pwd"
									placeholder=""
									name="password1"
									value={values.password1}
									required
									onChange={handleChange}
								/>
							</div>
							<div className="form-confirmPwd">
								<label for="confirmpwd" class="form-label">
									Confirm Password
								</label>
								<input
									type="password"
									class="form-control"
									id="confirmpwd"
									placeholder=""
									name="password2"
									value={values.password2}
									required
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="btn-submitAccount">
							<button
								// onClick={(e) => {
								// 	e.preventDefault();
								// 	handleSubmit();
								// 	setFieldValue("password1", "");
								// 	setFieldValue("password2", "");
								// }}
								onClick={handleSubmit}
							>
								Submit
							</button>
						</div>
					</form>
				)}
			</Formik>
			<div className="change-formToBiodata">
				Change to{" "}
				<Link to={`/user/biodata`} style={{ color: "#ef9b23", fontWeight: "bold" }}>
					Edit Biodata
				</Link>
			</div>
		</div>
	);
}

export default EditAccount;
