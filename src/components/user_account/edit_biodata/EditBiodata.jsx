import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import "./EditBiodata.css";
import useAuth from "../../../utils/auth";
import Axios from "axios";
import { API_URL } from "../../../config/url";
import { toast } from "react-toastify";

function EditBiodata({ setFile, userProfile, getUserProfile, updateReduxState }) {
	const authData = useAuth();

	// useEffect(() => {
	// 	Axios.get(`${API_URL}/user/${authData.user_id}`)
	// 		.then((response) => {
	// 			// console.log("RESPONSE PROFILE", response);
	// 			const apiData = response.data.data;
	// 			setUserProfile({
	// 				username: apiData.username,
	// 				email: apiData.email,
	// 				age: apiData.profile.age,
	// 				sex: apiData.profile.sex,
	// 				location: apiData.profile.location,
	// 				interest: apiData.profile.interest,
	// 				phone_number: apiData.profile.phone_number,
	// 				avatar_url: apiData.profile.avatar_url,
	// 			});
	// 		})
	// 		.catch((error) => {
	// 			console.log("ERROR PROFILE", error);
	// 		});
	// }, [userProfile]);

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
				enableReinitialize={true}
				onSubmit={(values) => {
					if (
						values.phone_number === "" ||
						values.age === "" ||
						values.location === "" ||
						values.sex === "" ||
						values.interest === ""
					) {
						toast.error("Please Input All Data!");
					} else {
						const formData = new FormData();
						formData.append("age", values.age);
						formData.append("sex", values.sex);
						formData.append("location", values.location);
						formData.append("interest", values.interest);
						formData.append("phone_number", values.phone_number);
						formData.append("avatar", values.avatar);

						Axios.put(`${API_URL}/user/profile/edit`, formData)
							.then((response) => {
								console.log("BERHASIL BIODATA", response);
								toast.success(response.data.message);
								getUserProfile();
								updateReduxState();
							})
							.catch((error) => {
								if (error.response) {
									// console.log(error.response);
									toast.error(error.response.data.message);
								} else if (error.response.status === 413) {
									toast.error("Please upload image below 1MB");
								} else {
									toast.error("Cannot Connect to Server");
								}
							});
					}
				}}
			>
				{({ values, handleSubmit, handleChange, setFieldValue }) => (
					<form action="" id="form-editBiodata">
						<div className="form-row">
							{/* <div className="form-fullname">
								<label for="fullname" class="form-label">
									Full Name
								</label>
								<input type="text" class="form-control" id="fullname" placeholder="" />
							</div> */}
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
									name="phone_number"
									onChange={handleChange}
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
									name="age"
									onChange={handleChange}
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
									name="location"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-sex">
								<label for="specificSex" class="visually-hidden">
									Sex
								</label>
								<select id="specificSex" value={values.sex} name="sex" onChange={handleChange}>
									<option value="">- Pick Your Sex -</option>
									<option value="Female">Female</option>
									<option value="Male">Male</option>
								</select>
							</div>
						</div>
						<div className="form-row">
							<div className="form-interest">
								<label for="specificInterest" class="visually-hidden">
									Interest
								</label>
								<select
									id="specificInterest"
									value={values.interest}
									name="interest"
									onChange={handleChange}
								>
									<option value="">- Interest -</option>
									<option value="Food">Food</option>
									<option value="Movie">Movie</option>
									<option value="Music">Music</option>
									<option value="Photography">Photography</option>
									<option value="Sport">Sport</option>
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
									name="avatar"
									onChange={(e) => {
										setFieldValue("avatar", e.currentTarget.files[0]);
										setFile(e.target.files[0]);
									}}
								/>
							</div>
						</div>
						<div className="btn-submitBiodata">
							<button onClick={handleSubmit} type="submit">
								Submit
							</button>
						</div>
					</form>
				)}
			</Formik>
			<div className="change-formToAccount">
				Change to{" "}
				<Link to={`/user/account`} style={{ color: "#ef9b23", fontWeight: "bold" }}>
					Edit Account
				</Link>
			</div>
		</div>
	);
}

export default EditBiodata;
