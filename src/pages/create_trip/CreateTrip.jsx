import React, { useState } from "react";
import "./CreateTrip.css";
import Navbar from "../../components/navbar/NavbarMain";
import Footer from "../../components/footer/Footer";
import { Formik, Form } from "formik";
import Axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../config/url";
import { useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import moment from "moment";

function CreateTrip() {
	const navigate = useNavigate();
	const [image, setImage] = useState("");

	return (
		<>
			<Navbar />
			<div className="tripform-background">
				<div className="container tripform-container">
					<div className="tripform-title text-center mt-3">
						<h2>CREATE TRIP</h2>
					</div>

					<div className="tripform">
						<Formik
							initialValues={{
								trip_name: "",
								destination: "",
								start_date: "",
								end_date: "",
								max_member: "",
								description: "",
								image: "",
							}}
							onSubmit={(values) => {
								if (values.max_member < 2) {
									toast.error("Max member must be minimal 2");
									navigate("/trip/create");
								} else if (values.start_date > values.end_date) {
									toast.error("Please input the right date");
									navigate("/trip/create");
								} else {
									const formData = new FormData();
									formData.append("trip_name", values.trip_name);
									formData.append("destination", values.destination);
									formData.append("start_date", values.start_date);
									formData.append("end_date", values.end_date);
									formData.append("max_member", values.max_member);
									formData.append("description", values.description);
									formData.append("image", values.image);

									Axios.post(`${API_URL}/trip/add`, formData)
										.then((response) => {
											console.log(response);
											toast.success("Trip Successfully created!!");
											navigate("/");
										})
										.catch((error) => {
											if (error.response) {
												toast.error(error.response.data.message);
											} else {
												toast.error("Cannot Connect to Server");
											}
										});
								}
							}}
						>
							{({ handleSubmit, handleChange, setFieldValue }) => (
								<Form id="form-trip">
									<div className="form-group">
										<label for="tripname">Trip Name</label>
										<input
											type="text"
											className="form-control"
											id="tripname"
											name="trip_name"
											onChange={handleChange}
											required
										/>
									</div>
									<div className="form-group mt-3">
										<label for="destination">Destination</label>
										<input
											type="text"
											className="form-control"
											id="destination"
											name="destination"
											onChange={handleChange}
											required
										/>
									</div>
									<div className="form-group mt-3">
										<label for="startdate">Start Date</label>
										<input
											type="date"
											className="form-control"
											id="startdate"
											name="start_date"
											placeholder="Start Date"
											onChange={handleChange}
											required
											min={moment().add(1, "days").format("YYYY-MM-DD")}
										/>
									</div>
									<div className="form-group mt-3">
										<label for="enddate">End Date</label>
										<input
											type="date"
											className="form-control"
											id="enddate"
											name="end_date"
											placeholder="End Date"
											onChange={handleChange}
											required
											min={moment().add(1, "days").format("YYYY-MM-DD")}
										/>
									</div>
									<div className="form-group mt-3">
										<label for="maxmember">Max Member</label>
										<input
											type="number"
											className="form-control"
											id="maxmember"
											name="max_member"
											onChange={handleChange}
											required
											min={2}
										/>
									</div>
									<div className="form-group mt-3">
										<input
											type="file"
											id="image"
											name="image"
											accept="image/*"
											style={{ position: "absolute", opacity: 0, cursor: "pointer" }}
											onChange={(e) => {
												setImage(e.target.files[0]);
												setFieldValue("image", e.currentTarget.files[0]);
											}}
											required
										/>
										<label for="file">
											{" "}
											<FaUpload size={22} /> Upload Trip Image{" "}
										</label>{" "}
										<br /> <br />
										<img
											src={
												image
													? URL.createObjectURL(image)
													: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
											}
											alt="trip image"
											className="img-fluid image-trip"
										/>
									</div>
									<div className="form-group mt-3">
										<textarea
											name="description"
											placeholder="Trip Description"
											onChange={handleChange}
											required
										/>
									</div>

									<div className="btn-create mt-3">
										<button onClick={handleSubmit} type="submit" className="btn btn-primary mt-3">
											CREATE
										</button>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default CreateTrip;
