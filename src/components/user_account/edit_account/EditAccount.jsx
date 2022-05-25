import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../utils/auth";
import "./EditAccount.css";

function EditAccount() {
	const authData = useAuth();

	return (
		<div className="edit-account">
			<h1>Edit Account</h1>
			<Formik
				initialValues={{
					username: authData.username,
					email: authData.email,
					password1: "",
					password2: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ values, handleSubmit, handleChange }) => (
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
									required
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
									required
								/>
							</div>
						</div>
						<div className="btn-submitAccount">
							<button type="submit">Submit</button>
						</div>
					</form>
				)}
			</Formik>
			<div className="change-formToBiodata">
				Change to{" "}
				<Link
					to={`/user/biodata/${authData.user_id}`}
					style={{ color: "#ef9b23", fontWeight: "bold" }}
				>
					Edit Biodata
				</Link>
			</div>
		</div>
	);
}

export default EditAccount;
