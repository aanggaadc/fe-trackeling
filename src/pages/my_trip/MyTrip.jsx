import { Button, Card, Col, Form, Pagination, ProgressBar, Row } from "react-bootstrap";
import React from "react";
import Footer from "../../components/footer/Footer";
import NavbarMain from "../../components/navbar/NavbarMain";
import "./MyTrip.css";

function MyTrip() {
	const customButton = {
		backgroundColor: "#188CBD",
		color: "white",
		borderRadius: "5px",
		borderStyle: "none",
	};

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
				<Row xs={1} md={2} lg={4} className="g-4">
					{Array.from({ length: 8 }).map((_, idx) => (
						<Col key={idx}>
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
					))}
				</Row>
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
