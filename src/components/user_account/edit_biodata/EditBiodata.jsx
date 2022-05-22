import React, { useState } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import "./EditBiodata.css";

function EditBiodata({ setFile }) {
	const [initialValues, setInitialValues] = useState("");

	return (
		<div className="edit-biodata">
			<h1>Edit Biodata</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				<form action="" id="form-editBiodata">
					<div className="form-row">
						<div className="form-fullname">
							<label for="exampleFormControlInput1" class="form-label">
								Full Name
							</label>
							<input
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder="Michael Jackson"
							/>
						</div>
						<div className="form-phone">
							<label for="exampleFormControlInput1" class="form-label">
								Phone
							</label>
							<input
								type="number"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder="081234567890"
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-age">
							<label for="exampleFormControlInput1" class="form-label">
								Age
							</label>
							<input
								type="number"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder="24"
							/>
						</div>
						<div className="form-location">
							<label for="exampleFormControlInput1" class="form-label">
								Location
							</label>
							<input
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
								placeholder="Bali"
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-sex">
							<label for="specificSex" class="visually-hidden">
								Sex
							</label>
							<select name="sex" id="specificSex">
								<option value="">- Pick Your Sex -</option>
								<option value="">Female</option>
								<option value="">Male</option>
							</select>
						</div>
					</div>
					<div className="form-row">
						<div className="form-interest">
							<label for="specificInterest" class="visually-hidden">
								Interest
							</label>
							<select name="interest" id="specificInterest">
								<option value="">- Interest -</option>
								<option value="">Music</option>
								<option value="">Movie</option>
								<option value="">Sport</option>
								<option value="">Food</option>
								<option value="">Photography</option>
							</select>
						</div>
					</div>
					<div className="form-row">
						<div className="form-avatar">
							<label htmlFor="file">
								<FaUpload /> Upload Avatar
							</label>
							<input
								type="file"
								id="file"
								accept="image/*"
								style={{ display: "none" }}
								onChange={(e) => {
									setFile(e.target.files[0]);
								}}
							/>
						</div>
					</div>
					<div className="btn-submitBiodata">
						<button type="submit">Submit</button>
					</div>
				</form>
			</Formik>
			<div className="change-formToAccount">
				Change to{" "}
				<Link to={"/user/edit/account/123"} style={{ color: "#ef9b23", fontWeight: "bold" }}>
					Edit Account
				</Link>
			</div>
		</div>
	);
}

export default EditBiodata;
