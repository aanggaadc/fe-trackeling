import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import Navbar from "../../components/navbar/NavbarMain";
import Banner from "../../components/home/banner/Banner";
import Footer from "../../components/footer/Footer";
import TripRecomendation from "../../components/home/trip_recomendation/TripRecomendation";
import TripUser from "../../components/home/trip_user/TripUser";
import Team2 from "../../components/home/team/Team2";
import Axios from 'axios'
import { API_URL } from '../../config/url'
import { Link } from 'react-router-dom'
import { RiArrowRightCircleFill } from "react-icons/ri";

function Home() {
	const [data, setData] = useState([])
	const pageState = {
		pageNumber: 1,
		pageSize: 4
	}

	useEffect(() => {
		Axios.post(`${API_URL}/trip/list`, pageState)
			.then((response) => {
				setData(response.data.data.items)
			}).catch((error) => {
				console.log(error.data.message)
			})
	}, [])

	const customButton = {
		backgroundColor: "#0e1b4d",
		color: "white",
		borderRadius: "5px",
		borderStyle: "none",
	};

	return (
		<div>
			<Navbar />
			<Banner />

			<main id="main">
				<section id="recomendation" className="section-with-bg">
					<div className="container mt-5">
						<div className="recomendation">
							<h2>OUR RECOMENDATION</h2>
							<p>Here are interesting places to visit, you can thank us later!</p>
						</div>

						<div className="tags">
							<Button style={customButton}> Bali</Button>
							<Button style={customButton}> Bandung</Button>
							<Button style={customButton}> Semarang</Button>
							<Button style={customButton}> Jakarta</Button>
							<Button style={customButton}> Labuan Bajo</Button>
						</div>

						<div className="mt-3">
							<TripRecomendation />
							<Link style={{ textDecoration: "none", color: "#188CBD", fontSize: "20px" }} className="float-end mt-3" to='recomendation'>See all <RiArrowRightCircleFill size={30} /></Link>

						</div>

						<hr className="line" />
					</div>
				</section>

				<section id="trips" className="section-with-bg">
					<div className="container mt-5">
						<div className="recomendation">
							<h2>New TRIPS</h2>
							<p>Latest Trips Available to Join</p>
						</div>

						<TripUser data={data} />
						<Link style={{ textDecoration: "none", color: "#188CBD", fontSize: "20px" }} className="float-end mt-3 link-trip" to='trips'>See all<RiArrowRightCircleFill size={30} /></Link>
					</div>
				</section>
			</main>

			<Team2 />
			<Footer />
		</div>
	);
}

export default Home;
