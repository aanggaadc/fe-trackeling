import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import "./Home.css";
import Navbar from "../../components/navbar/NavbarMain";
import Banner from "../../components/home/banner/Banner";
import Footer from "../../components/footer/Footer";
import TripRecomendation from "../../components/trip_recomendation/TripRecomendation";
import TripUser from "../../components/home/trip_user/TripUser";
import Team2 from "../../components/home/team/Team2";
import Axios from "axios";
import { API_URL } from "../../config/url";
import { Link } from "react-router-dom";
import { RiArrowRightCircleFill } from "react-icons/ri";
import NoData from "../../no-data.gif";

function Home() {
	const [dataTrip, setDataTrip] = useState([]);
	const [dataRecomendation, setDataRecomendation] = useState([]);
	const [spinner, setSpinner] = useState(false)
	const [pageStateRecomendation, setPageStateRecomendation] = useState({
		pageNumber: 1,
		pageSize: 8,
		destination: "",
	});
	const pageState = {
		pageNumber: 1,
		pageSize: 4,
	};
	const [active, setActive] = useState("")

	const onSetActiveMenuItem = (item) => {
		if (item !== active) {
			setActive(item)
		} else {
			setActive("")
		}
	}

	const getRecomendationList = () => {
		setSpinner(true)
		Axios.post(`${API_URL}/recomendation/list`, pageStateRecomendation)
			.then((response) => {
				setDataRecomendation(response.data.data.items);
				setTimeout(() => {
					setSpinner(false);
				  }, 2000);
			})
			.catch((error) => {
				console.log(error.data.message);
			});
	};

	const getTripList = () => {
		Axios.post(`${API_URL}/trip/list`, pageState)
			.then((response) => {
				setDataTrip(response.data.data.items);
			})
			.catch((error) => {
				console.log(error.data.message);
			});
	};

	useEffect(() => {
		getRecomendationList();
		getTripList();
		document.title= "HOME"
	}, [pageStateRecomendation]);

	const recomendation = () => {
		if(spinner){
			return (
				<Spinner animation="border" role="status" variant="info">
  					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)
		}else{
			if (dataRecomendation.length > 0) {
				return (
					<TripRecomendation data={dataRecomendation} />
				);
			} else {
				return <img className="img-fluid" style={{ width: "500px" }} src={NoData} alt="No-data" />;
			}
		}
		
	};

	const trip = () => {
		if(spinner){
			return (
				<Spinner animation="border" role="status" variant="info">
  					<span className="visually-hidden">Loading...</span>
				</Spinner>
			)
		}else{
			if (dataTrip.length > 0) {
				return (
					<>
						<TripUser data={dataTrip} />
						<Link
							style={{ textDecoration: "none", color: "#188CBD", fontSize: "20px" }}
							className="float-end mt-3 link-trip"
							to="trips"
						>
							See all
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
		<div>
			<Navbar />
			<Banner />

			<main id="main">
				<section id="recomendation" className="section-with-bg">
					<div className="container mt-5">
						<div className="recomendation">
							<h2>OUR RECOMMENDATION</h2>
							<p>Here are interesting places to visit, you can thank us later!</p>
						</div>

						<div className="tags">
							<Button
								onClick={() => {
									setPageStateRecomendation({ ...pageStateRecomendation, destination: "bali" });
									onSetActiveMenuItem("button1")
								}}
								className={active === "button1" ? "tags-btn-active" : "tags-btn"}
							>
								{" "}
								Bali
							</Button>
							<Button
								onClick={() => {
									setPageStateRecomendation({ ...pageStateRecomendation, destination: "bandung" });
									onSetActiveMenuItem("button2")
								}}
								className={active === "button2" ? "tags-btn-active" : "tags-btn"}
							>
								{" "}
								Bandung
							</Button>
							<Button
								onClick={() => {
									setPageStateRecomendation({ ...pageStateRecomendation, destination: "semarang" });
									onSetActiveMenuItem("button3")
								}}
								className={active === "button3" ? "tags-btn-active" : "tags-btn"}
							>
								{" "}
								Semarang
							</Button>
							<Button
								onClick={() => {
									setPageStateRecomendation({ ...pageStateRecomendation, destination: "jakarta" });
									onSetActiveMenuItem("button4")
								}}
								className={active === "button4" ? "tags-btn-active" : "tags-btn"}
							>
								{" "}
								Jakarta
							</Button>
							<Button
								onClick={() => {
									setPageStateRecomendation({
										...pageStateRecomendation,
										destination: "labuan bajo",
									});
									onSetActiveMenuItem("button5")
								}}
								className={active === "button5" ? "tags-btn-active" : "tags-btn"}
							>
								{" "}
								Labuan Bajo
							</Button>
						</div>

						<div className="mt-3 text-center">{recomendation()}</div>

						<hr className="line" />
					</div>
				</section>

				<section id="trips" className="section-with-bg">
					<div className="container mt-5">
						<div className="recomendation">
							<h2>New TRIPS</h2>
							<p>Latest Trips Available to Join</p>
						</div>

						<div className="text-center">{trip()}</div>
					</div>
				</section>
			</main>

			<Team2 />
			<Footer />
		</div>
	);
}

export default Home;
