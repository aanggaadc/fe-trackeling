import React from "react";
import { Col, Card, Button, Row, ProgressBar, NavItem } from "react-bootstrap";
import { API_URL } from "../../../config/url";
import { Link } from "react-router-dom";
import './TripUser.css'

function TripUser({ data }) {
	return (
		<div className="container">
			<Row xs={1} md={2} lg={4} className="g-2">
				{data.map((item, index) => (
					<Col key={index}>
						<Card className="text-center shadow h-100">
							<div className="card-trip">
								<Card.Img
									variant="top"
									src={`${API_URL}/${item.trip_image}`}
									className="card-imgTrip"
								/>
							</div>
							<Card.Body>
								<Card.Title>
									<h3 style={{ fontWeight: "Bold" }}>{item.trip_name}</h3>
								</Card.Title>
								<Card.Text>
									<h4>{item.destination}</h4>
									<p>
										{item.start_date} ~ {item.end_date}
									</p>
								</Card.Text>
								<ProgressBar
									variant="info"
									now={(item.count_member * 100) / item.max_member}
									label={`${item.count_member}/${item.max_member}`}
								/>
								<Link to={`/trip/detail/${item.trip_id}`}>
									<Button className="mt-2 trip-button">Detail</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
}

export default TripUser;
