import React, { useState, useEffect } from "react";
import NavbarMain from "../../components/navbar/NavbarMain";
import Footer from "../../components/footer/Footer";
import "./DetailRecommendationTrip.css";
import { Container, Row, Col, Card, Image, Button, Modal, Spinner } from "react-bootstrap";
import Axios from "axios";
import { API_URL } from "../../config/url";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import OtherTripList from "../../components/other_trip/OtherTrip";
import NoData from "../../no-data.gif";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { Formik, Form } from "formik";
import moment from "moment";

function DetailRecommendationTrip() {
	const { recommendationId } = useParams();
	const navigate = useNavigate();
	const [dataOtherTrip, setDataOtherTrip] = useState([]);
	const [trip, setTrip] = useState({});
	const [spinner, setSpinner] = useState(false)

	// For Modal Operation
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// For Modal Operation

	const getDataOtherTrip = () => {
		setSpinner(true)
		Axios.get(`${API_URL}/trip/other_trip/${recommendationId}`)
			.then((response) => {
				setDataOtherTrip(response.data.data);
				setTimeout(() => {
					setSpinner(false)
				}, 1800)
			})
			.catch((error) => {
				console.log(error.data.message);
			});
	};

	useEffect(() => {
		Axios.get(`${API_URL}/recomendation/detail/${recommendationId}`)
			.then((response) => {
				const apiData = response.data.data;
				setTrip({
					recomendation_id: apiData.recomendation_id,
					adminMainId: apiData.adminMainId,
					trip_image: API_URL + apiData.trip_image,
					destination: apiData.destination,
					description: apiData.description,
				});
			})
			.catch((error) => {
				if (error.response) {
					toast.error(error.response.data.message);
				} else {
					toast.error("Something Wrong");
				}
				navigate("/");
			});
		getDataOtherTrip();
		window.scrollTo({top: 0, behavior: "smooth"})
	}, [recommendationId]);

	const OtherTrip = () => {
		if(spinner) {
			return(
				<Spinner animation="border" role="status" variant="info">
  					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)
		} else{
			if (dataOtherTrip.length > 0) {
				return (
					<>
						<OtherTripList data={dataOtherTrip} />
						<Link
							style={{ textDecoration: "none", color: "#188CBD", fontSize: "20px" }}
							className="float-end mt-3 link-trip"
							to="/trips"
						>
							See Other
							<RiArrowRightCircleFill size={30} />
						</Link>
					</>
				);
			} else {
				return <img className="img-fluid" style={{ width: "500px" }} src={NoData} alt="No-data" />;
			}
		}
		
	};

	return (
		<div className="bg-content">
			<NavbarMain />
			<Container className="detailtrip-container py-5">
				<Row>
					<Col lg="5">
						<Card style={{ width: "100%" }}>
							<Image
								src={trip.trip_image}
								className="img-fluid rounded shadow-4 detail-trip-img"
								alt="..."
							/>
						</Card>
					</Col>
					<Col lg>
						<h1>{trip.destination}</h1>
						<div>
							<Row className="justify-content-start mx-0 my-4">
								<div className="p-0">
									<Button className="btn" variant="primary" onClick={handleShow} active>
										CREATE THIS TRIP
									</Button>
								</div>
							</Row>
						</div>
					</Col>
				</Row>
				<hr className="my-5" />
				<Row className="mb-3">
					<h3>Description</h3>
					<br />
					<p>{trip.description}</p>
				</Row>
				<Row className="mt-3">
					<Col lg="4">
						<h3>Posted By</h3>
						<div className="posted">
							<Image
								src={"https://cdn-icons-png.flaticon.com/512/147/147142.png"}
								className="img-fluid rounded-circle shadow-4 image-profile"
								alt="..."
							/>
							<div className="name-profile">
								<p className="mb-0">
									<b>Admin</b>
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<hr className="my-5" />
				<Row>
					<div className="other-trip">
						<h2>READY TRIP</h2>
						<p>Trips made by the community</p>
					</div>
					<div className="text-center">{OtherTrip()}</div>
				</Row>
			</Container>
			<Footer />
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>CREATE THIS TRIP</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Formik
						initialValues={{
							trip_name: "",
							destination: trip.destination,
							start_date: "",
							end_date: "",
							max_member: "",
							description: trip.description,
							image: trip.trip_image,
						}}
						onSubmit={(values) => {
							if (values.max_member < 2) {
								toast.error("Max member must be minimal 2");
							} else if (values.start_date > values.end_date) {
								toast.error("Please input the right date");
							} else {
								Axios.post(`${API_URL}/trip/add_recommendation`, values)
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
						{({ handleSubmit, handleChange }) => (
							<Form>
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
									/>
								</div>
								<div className="btn-create">
									<button
										onClick={handleSubmit}
										type="submit"
										className="btn btn-primary w-100 mt-3"
									>
										Create Trip
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default DetailRecommendationTrip;
