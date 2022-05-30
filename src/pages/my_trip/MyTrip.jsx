import { Button, Card, Col, Form, Pagination, ProgressBar, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import NavbarMain from "../../components/navbar/NavbarMain";
import Axios from "axios";
import "./MyTrip.css";
import { API_URL } from "../../config/url";
import useAuth from "../../utils/auth";

function MyTrip() {
	const authData = useAuth();

	const [data, setData] = useState([]);

	console.log("DATA", data);

	const customButton = {
		backgroundColor: "#188CBD",
		color: "white",
		borderRadius: "5px",
		borderStyle: "none",
	};

	useEffect(() => {
		Axios.get(`${API_URL}/trip/get_user_trip?id_user=${authData.user_id}`)
			.then((response) => {
				// console.log("BERHASIL PAGINATION", response.data.data.items);
				setData(response.data.data.items);
			})
			.catch((error) => {
				console.log("ERROR PAGINATION", error.data.message);
			});
	}, []);

	return (
		<div>
			<NavbarMain />
			<div className="container container-mytrip">
				<div className="mytrip-title text-center">
					<h1>MY TRIP</h1>
					<p>This is your created or joined trip list</p>
				</div>
				<Form className="mytrip-filters">
					<div className="form-row">
						<Form.Group className="mb-3 mytrip-search" controlId="formGroupEmail">
							<Form.Label>Destination</Form.Label>
							<Form.Control type="text" placeholder="Search by Destination" />
						</Form.Group>
					</div>
					<div className="form-row">
						<Form.Group className="mb-3 mytrip-search" controlId="formGroupPassword">
							<Form.Label>Start Date</Form.Label>
							<Form.Control type="date" placeholder="Search by Start Date" />
							<Form.Text className="text-muted">Search by Start Date</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3 mytrip-search" controlId="formGroupPassword">
							<Form.Label>End Date</Form.Label>
							<Form.Control type="date" placeholder="Search by End Date" />
							<Form.Text className="text-muted">Search by End Date</Form.Text>
						</Form.Group>
					</div>
					<div className="form-row btn-clearField">
						<button>Clear Field</button>
					</div>
				</Form>
			</div>
			<div className="container">
				{data.map((item, index) => {
					return (
						<Row xs={1} md={2} lg={4} className="g-4">
							<Col key={index}>
								<Card className="text-center shadow">
									<Card.Img variant="top" src="https://picsum.photos/seed/picsum/400/200" />
									<Card.Body>
										<Card.Title>Trip Name</Card.Title>
										<Card.Text>
											<p>Location</p>
											<p>Date</p>
										</Card.Text>
										<ProgressBar variant="info" now={60} label={"6/10"} />
										<Button className="mt-2" style={customButton}>
											Detail
										</Button>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					);
				})}
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Pagination className="mytrip-pagination">
							<Pagination.First />
							<Pagination.Prev />
							<Pagination.Item>{1}</Pagination.Item>
							<Pagination.Ellipsis />

							<Pagination.Item>{10}</Pagination.Item>
							<Pagination.Item>{11}</Pagination.Item>
							<Pagination.Item active>{12}</Pagination.Item>
							<Pagination.Item>{13}</Pagination.Item>
							<Pagination.Item>{14}</Pagination.Item>

							<Pagination.Ellipsis />
							<Pagination.Item>{20}</Pagination.Item>
							<Pagination.Next />
							<Pagination.Last />
						</Pagination>
					</div>
				</div>
			</div>
			<div className="mt-4">
				<Footer />
			</div>
		</div>
	);
}

export default MyTrip;
