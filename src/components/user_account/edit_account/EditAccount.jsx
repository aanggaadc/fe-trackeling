import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditAccount.css";

function EditForm() {
	const [initialValues, setInitialValues] = useState("");

	return (
		<div className="edit-account">
			<h1>Edit Account</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				<form action="" id="form-editAccount">
					<div className="form-row">
						<div className="form-username">
							<label for="exampleFormControlInput1" class="form-label">
								Username
							</label>
							<input
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder="kingofpop"
							/>
						</div>
						<div className="form-email">
							<label for="exampleFormControlInput1" class="form-label">
								Email
							</label>
							<input
								type="email"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder="moonwalker@email.com"
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-pwd">
							<label for="exampleFormControlInput1" class="form-label">
								Password
							</label>
							<input
								type="password"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder=""
							/>
						</div>
						<div className="form-confirmPwd">
							<label for="exampleFormControlInput1" class="form-label">
								Confirm Password
							</label>
							<input
								type="password"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder=""
							/>
						</div>
					</div>
					<div className="btn-submitAccount">
						<button type="submit">Submit</button>
					</div>
				</form>
			</Formik>
			<div className="change-formToBiodata">
				Change to{" "}
				<Link to={"/user/edit/biodata/12"} style={{ color: "#ef9b23", fontWeight: "bold" }}>
					Edit Biodata
				</Link>
			</div>
		</div>
	);
}

export default EditForm;
