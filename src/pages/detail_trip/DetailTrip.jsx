import React, { useState, useEffect } from "react";
import NavbarMain from "../../components/navbar/NavbarMain";
import Footer from "../../components/footer/Footer";
import "./DetailTrip.css";
import TripRecomendation from "../../components/trip_recomendation/TripRecomendation";
import { Container, Row, Col, Card, Image, ProgressBar, Button, Carousel } from "react-bootstrap";
import Axios from "axios";
import { API_URL } from "../../config/url";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function DetailTrip() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [dataRecomendation, setDataRecomendation] = useState([])
  const pageState = {
    pageNumber: 1,
    pageSize: 4
  }
  const [trip, setTrip] = useState({
    trip_id: "",
    owner_id: "",
    trip_image: "",
    destination: "",
    trip_name: "",
    start_date: "",
    end_date: "",
    count_member: "",
    max_member: "",
    description: "",
    trip_status: "",
    username: "",
    avatar_url: "",
    interest: "",
    location: "",
  });

  const getRecomendationList = () => {
    Axios.post(`${API_URL}/recomendation/list`, pageState)
      .then((response) => {
        setDataRecomendation(response.data.data.items)
      }).catch((error) => {
        console.log(error.data.message)
      })
  }

  console.log(dataRecomendation)

  useEffect(() => {
    Axios.get(`${API_URL}/trip/detail/${tripId}`)
      .then((response) => {
        const apiData = response.data.data;
        setTrip({
          trip_id: apiData.trip_id,
          owner_id: apiData.owner_id,
          trip_image: API_URL + apiData.trip_image,
          destination: apiData.destination,
          trip_name: apiData.trip_name,
          start_date: apiData.start_date,
          end_date: apiData.end_date,
          count_member: apiData.count_member,
          max_member: apiData.max_member,
          description: apiData.description,
          trip_status: apiData.trip_status,
          username: apiData.username,
          avatar_url: API_URL + apiData.avatar_url,
          interest: apiData.interest,
          location: apiData.location,
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
    getRecomendationList()
  }, [tripId]);

  const memberPercent = (trip.count_member * 100) / trip.max_member;
  const sisa = 100 - memberPercent;
  return (
    <div className="bg-content">
      <NavbarMain />
      <Container className="detailtrip-container py-5">
        <Row>
          <Col lg="5">
            <Card style={{ width: "100%" }}>
              <Image src={trip.trip_image} className="img-fluid rounded shadow-4 detail-trip-img" alt="..." />
              {/* <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block detail-trip-img"
                    src="https://media.istockphoto.com/photos/pura-ulun-danu-bratan-temple-in-bali-picture-id675172642?k=20&m=675172642&s=612x612&w=0&h=-pka3tFBEpKRZGVXrKbhFcRK5IKB-xn-5MPBWQj24q4="
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block detail-trip-img" src="https://digitalnomads.world/wp-content/uploads/2021/01/bali-for-digital-nomads-1024x683.jpg" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block detail-trip-img" src="https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/indonesia--aiyoshi-shutterstock.jpg" alt="Third slide" />
                </Carousel.Item>
              </Carousel> */}
            </Card>
          </Col>
          <Col lg>
            <h1>{trip.trip_name}</h1>
            <h3>{trip.destination}</h3>
            <p>
              From {trip.start_date} to {trip.end_date}
            </p>
            <div>
              Already Join
              <ProgressBar lg className="w-75" style={{ height: "30px" }}>
                <ProgressBar variant="success" now={memberPercent} label={`${memberPercent}%`} />
                <ProgressBar variant="info" now={sisa} />
              </ProgressBar>
              {trip.count_member}/{trip.max_member}
            </div>
            <div>
              <Row className="justify-content-start mx-0 my-4">
                <Button className="btn-detailtrip" variant="primary" active>
                  Edit
                </Button>
                <Button className="btn-detailtrip ml-4" variant="danger" active>
                  Delete
                </Button>
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
              <Image src={trip.avatar_url} className="img-fluid rounded-circle shadow-4 image-profile" alt="..." />
              {/* Alifiandy */}
              <div className="name-profile">
                <p className="mb-0">
                  <b>{trip.username}</b>
                </p>
                <small className="mb-0">{trip.location}</small>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="my-5" />
        <Row>
          <div className="other-trip mb-4">
            <h2>OTHER RECOMMENDATION</h2>
          </div>
          <TripRecomendation data={dataRecomendation} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default DetailTrip;
