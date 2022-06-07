import { Button, Card, Col, Pagination, Form, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import NavbarMain from "../../components/navbar/NavbarMain";
import Axios from "axios";
import "./MyTrip.css";
import { API_URL } from "../../config/url";
import { Formik } from 'formik'
import NoData from '../../no-data.gif'

function MyTrip() {
	const [data, setData] = useState([]);
	const isData = data.length > 0
	const [totalPages, setTotalPages] = useState(0)
	const [currentPages, setCurrentPages] = useState(1)
	const [filter, setFilter] = useState({
		destination: "",
		start_date: "",
		end_date: ""
	})
	const [pageState, setPageState] = useState({
		pageNumber: 1,
		pageSize: 8,
	})

	const pageNumbers = []
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i)
	}

	useEffect(() => {
		Axios.post(`${API_URL}/trip/get_user_trip`, pageState)
			.then((response) => {
				setData(response.data.data.items);
				setTotalPages(response.data.data.total_pages)
				setCurrentPages(response.data.data.current_page)
			})
			.catch((error) => {
				console.log(error.data.message);
			});
	}, [pageState, filter]);

	const nextPage = () => {
		setCurrentPages(currentPages + 1)
		setPageState({ ...pageState, pageNumber: pageState.pageNumber + 1 })
	}

	const prevPage = () => {
		setCurrentPages(currentPages - 1)
		setPageState({ ...pageState, pageNumber: pageState.pageNumber - 1 })
	}

	const handlePagination = () => {
		if (data.length > 0) {
			return (
				<div className="col-12">
					<Pagination className="mytrip-pagination">
						<Pagination.First onClick={() => {
							setCurrentPages(1)
							setPageState({ ...pageState, pageNumber: 1 })
						}} />
						<Pagination.Prev onClick={prevPage} disabled={currentPages === 1} />
						{pageNumbers.map((num) => {
							return (
								<Pagination.Item key={num}
									active={num === currentPages}
									onClick={() => {
										setCurrentPages(num)
										setPageState({ ...pageState, pageNumber: num })
									}}>
									{num}
								</Pagination.Item>
							)
						})}
						{/* <Pagination.Ellipsis /> */}
						<Pagination.Next onClick={nextPage} disabled={currentPages === totalPages} />
						<Pagination.Last onClick={() => {
							setCurrentPages(totalPages)
							setPageState({ ...pageState, pageNumber: totalPages })
						}} />
					</Pagination>
				</div >
			)
		}
	}

	return (
		<div>
			<NavbarMain />
			<div className="container container-mytrip">
				<div className="mytrip-title text-center">
					<h1>MY TRIP</h1>
					<p>This is your created or joined trip list</p>
				</div>
				<Formik
					initialValues={{
						pageNumber: 1,
						pageSize: 8,
						destination: "",
						start_date: "",
						end_date: "",

					}}

					onSubmit={(values) => {
						Axios.post(`${API_URL}/trip/get_user_trip`, values)
							.then((response) => {
								setData(response.data.data.items);
								setTotalPages(response.data.data.total_pages)
								setCurrentPages(response.data.data.current_page)
							})
							.catch((error) => {
								console.log(error.data.message);
							});
					}}>
					{({ handleSubmit, handleChange, resetForm }) => (
						<Form className="mytrip-filters">
							<div className="form-row">
								<Form.Group className="mb-3 mytrip-search" controlId="formGroupEmail">
									<Form.Label>Destination</Form.Label>
									<Form.Control type="text"
										placeholder="Search by Destination"
										name="destination"
										value={filter.destination}
										onChange={(e) => {
											handleChange(e)
											setFilter({ ...filter, destination: e.target.value })
										}}
									/>
								</Form.Group>
							</div>
							<div className="form-row">
								<Form.Group className="mb-3 mytrip-search" controlId="formGroupPassword">
									<Form.Label>Start Date</Form.Label>
									<Form.Control type="date"
										placeholder="Search by Start Date"
										name="start_date"
										value={filter.start_date}
										onChange={(e) => {
											handleChange(e)
											setFilter({ ...filter, start_date: e.target.value })
										}} />
									<Form.Text className="text-muted">Search by Start Date</Form.Text>
								</Form.Group>
								<Form.Group className="mb-3 mytrip-search" controlId="formGroupPassword">
									<Form.Label>End Date</Form.Label>
									<Form.Control type="date"
										placeholder="Search by End Date"
										name="end_date"
										value={filter.end_date}
										onChange={(e) => {
											handleChange(e)
											setFilter({ ...filter, end_date: e.target.value })
										}} />
									<Form.Text className="text-muted">Search by End Date</Form.Text>
								</Form.Group>
							</div>
							<div className="form-row btn-clearField">
								<button onClick={handleSubmit}>Search</button>
								<button onClick={(e) => {
									setFilter({
										destination: "",
										start_date: "",
										end_date: ""
									})
									resetForm()
									e.preventDefault()
								}}>Clear</button>
							</div>
						</Form>
					)}
				</Formik>

			</div>
			<div className="container">
				<Row xs={1} md={2} lg={4} className="g-4">
					{isData ?
						data.map((item, index) => {
							const memberPercent = (item.trip.count_member * 100) / item.trip.max_member
							return (
								<Col key={index}>
									<Card className="text-center shadow">
										<Card.Img variant="top" src={`${API_URL}/${item.trip.trip_image}`} />
										<Card.Body>
											<Card.Title><h3 style={{ fontWeight: "Bold" }}>{item.trip.trip_name}</h3></Card.Title>
											<Card.Text>
												<h4>{item.trip.destination}</h4>
												<p>{item.trip.start_date} to {item.trip.end_date}</p>
											</Card.Text>
											<ProgressBar variant="info" now={memberPercent} label={`${memberPercent}%`} />
											<Link to={`/trip/detail/${item.tripTripId}`}>
												<Button className="mt-2 trip-button" >
													Detail
												</Button>
											</Link>
										</Card.Body>
									</Card>
								</Col>
							);
						}) :
						<img
							className="img-fluid"
							style={{ width: "500px", margin: "auto" }}
							src={NoData}
							alt="No-data"
						/>
					}
				</Row>
			</div>
			<div className="container">
				<div className="row">
					{handlePagination()}
				</div>
			</div>
			<div className="mt-4">
				<Footer />
			</div>
		</div >
	);
}

export default MyTrip;
