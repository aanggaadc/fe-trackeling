import React, { useState, useEffect } from "react";
import "./EditTrip.css";
import Navbar from "../../components/navbar/NavbarMain";
import Footer from "../../components/footer/Footer";
import { Formik, Form } from "formik";
import Axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../config/url";
import { useNavigate, useParams } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import moment from "moment";

function EditTrip() {
	const navigate = useNavigate();
	const { tripId } = useParams();
	const [image, setImage] = useState("");
	const [data, setData] = useState({});

	function getTripData() {
		Axios.get(`${API_URL}/trip/detail/${tripId}`)
			.then((response) => {
				setData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
				if (error.response) {
					toast.error(error.response.data.message);
				} else {
					toast.error("Cannot Connect to Server");
				}
			});
	}

	useEffect(() => {
		getTripData();
	}, []);

	return (
		<>
			<Navbar />
			<div className="editform-background">
				<div className="container tripform-container">
					<div className="tripform-title text-center mt-3">
						<h2>EDIT TRIP</h2>
					</div>

					<div className="tripform">
						<Formik
							initialValues={{
								trip_name: data.trip_name,
								destination: data.destination,
								start_date: data.start_date,
								end_date: data.end_date,
								max_member: data.max_member,
								description: data.description,
								trip_status: data.trip_status,
								image: "",
							}}
							enableReinitialize={true}
							onSubmit={(values) => {
								if (values.max_member < 2) {
									toast.error("Max member must be minimal 2");
								} else if (values.start_date > values.end_date) {
									toast.error("Please input the right date");
								} else {
									const formData = new FormData();
									formData.append("trip_name", values.trip_name);
									formData.append("destination", values.destination);
									formData.append("start_date", values.start_date);
									formData.append("end_date", values.end_date);
									formData.append("max_member", values.max_member);
									formData.append("description", values.description);
									formData.append("trip_status", values.trip_status);
									formData.append("image", values.image);

									Axios.put(`${API_URL}/trip/edit/${tripId}`, formData)
										.then((response) => {
											console.log(response);
											toast.success("Trip Successfully Edited!!");
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
							{({ handleSubmit, handleChange, setFieldValue, values }) => (
								<Form id="form-trip">
									<div className="form-group">
										<label for="tripname">Trip Name</label>
										<input
											type="text"
											className="form-control"
											id="tripname"
											name="trip_name"
											value={values.trip_name}
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
											value={values.destination}
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
											value={values.start_date}
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
											value={values.end_date}
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
											value={values.max_member}
											onChange={handleChange}
											required
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
											<FaUpload size={22} /> Edit Trip Image{" "}
										</label>{" "}
										<br /> <br />
										<img
											src={image ? URL.createObjectURL(image) : `${API_URL}/${data.trip_image}`}
											alt="trip image"
											className="img-fluid image-trip"
										/>
									</div>
									<div className="form-group mt-3">
										<textarea
											name="description"
											placeholder="Trip Description"
											onChange={handleChange}
											value={values.description}
											required
										/>
									</div>
									<div className="form-group mt-3">
										<label htmlFor="tripstatus">Trip Status</label> <br /> <br />
										<select
											id="tripstatus"
											value={values.trip_status}
											name="trip_status"
											onChange={handleChange}
										>
											<option value="Open">Open</option>
											<option value="Close">Close</option>
										</select>
									</div>

									<div className="btn-create mt-3">
										<button onClick={handleSubmit} type="submit" className="btn btn-primary mt-3">
											SUBMIT
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

export default EditTrip;
