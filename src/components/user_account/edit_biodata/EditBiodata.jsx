import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import "./EditBiodata.css";
import useAuth from "../../../utils/auth";
import Axios from "axios";
import { API_URL } from "../../../config/url";

function EditBiodata({ setFile, userProfile }) {
	const authData = useAuth();

	return (
		<div className="edit-biodata">
			<h1>Edit Biodata</h1>
			<Formik
				initialValues={{
					age: userProfile.age,
					sex: userProfile.sex,
					location: userProfile.location,
					interest: userProfile.interest,
					phone_number: userProfile.phone_number,
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ values, handleSubmit, handleChange }) => (
					<form action="" id="form-editBiodata">
						<div className="form-row">
							<div className="form-fullname">
								<label for="fullname" class="form-label">
									Full Name
								</label>
								<input type="text" class="form-control" id="fullname" placeholder="" />
							</div>
							<div className="form-phone">
								<label for="phone" class="form-label">
									Phone
								</label>
								<input
									type="number"
									class="form-control"
									id="phone"
									placeholder=""
									value={values.phone_number}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-age">
								<label for="age" class="form-label">
									Age
								</label>
								<input
									type="number"
									class="form-control"
									id="age"
									placeholder=""
									value={values.age}
								/>
							</div>
							<div className="form-location">
								<label for="location" class="form-label">
									Location
								</label>
								<input
									type="text"
									class="form-control"
									id="location"
									placeholder=""
									value={values.location}
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
				)}
			</Formik>
			<div className="change-formToAccount">
				Change to{" "}
				<Link
					to={`/user/account/${authData.user_id}`}
					style={{ color: "#ef9b23", fontWeight: "bold" }}
				>
					Edit Account
				</Link>
			</div>
		</div>
	);
}

export default EditBiodata;
