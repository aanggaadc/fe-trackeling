import React, { useState, useEffect } from "react";
import NavbarMain from "../../components/navbar/NavbarMain";
import Footer from "../../components/footer/Footer";
import "./DetailTrip.css";
import { Container, Row, Col, Card, Image, ProgressBar, Button, Carousel } from "react-bootstrap";
import Axios from "axios";
import { API_URL } from "../../config/url";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
<<<<<<< HEAD
import { useSelector } from 'react-redux'
=======
import OtherTripList from "../../components/detail_trip/OtherTrip";
import NoData from "../../no-data.gif";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
>>>>>>> 88afd857eb6bea145e3382cf96848aa7325e4681

function DetailTrip() {
  const { tripId } = useParams();
  const navigate = useNavigate();
<<<<<<< HEAD
  const [status, setStatus] = useState()
  const [dataRecomendation, setDataRecomendation] = useState([])
  const pageState = {
    pageNumber: 1,
    pageSize: 4
  }
  const { user } = useSelector((state) => {
    return state
  })
=======
  const [dataOtherTrip, setDataOtherTrip] = useState([]);
>>>>>>> 88afd857eb6bea145e3382cf96848aa7325e4681
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
  const memberPercent = (trip.count_member * 100) / trip.max_member;
  const sisa = 100 - memberPercent;
  const isOwner = user.user_id === trip.owner_id

  const getDataOtherTrip = () => {
    Axios.get(`${API_URL}/trip/other_trip/${tripId}`)
      .then((response) => {
        console.log(response.data.data);
        setDataOtherTrip(response.data.data);
      })
<<<<<<< HEAD
  }

  const getVerfication = () => {
    Axios.get(`${API_URL}/trip/join_verification/${tripId}`)
      .then((response) => {
        setStatus(response.data.status)
      }).catch((error) => {
        console.log(error)
      })
  }
=======
      .catch((error) => {
        console.log(error.data.message);
      });
  };
>>>>>>> 88afd857eb6bea145e3382cf96848aa7325e4681

  const getTrip = () => {
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
<<<<<<< HEAD
  }

  const joinTrip = () => {
    Axios.post(`${API_URL}/trip/join/${tripId}`)
      .then((response) => {
        console.log(response)
        toast.success(`You Are Succesfully Join ${trip.trip_name} Trip!!!`)
        navigate('/')
      }).catch((error) => {
        if (error.response) {
          toast.error(error.response.data.message)
        } else {
          toast.error("Something Wrong")
        }
      })
  }

  const handleTripButton = () => {
    if (isOwner) {
      return (
        <>
          <Button className="btn-detailtrip" variant="primary" active>
            Edit
          </Button>
          <Button className="btn-detailtrip ml-4" variant="danger" active>
            Delete
          </Button>
        </>
      )
    } else {
      if (status == "UNJOIN") {
        return (
          <Button onClick={joinTrip} className="btn-detailtrip ml-4" variant="info" active>
            Join
          </Button>
        )
      } else {
        return (
          <Button className="btn-detailtrip ml-4" variant="info" disabled>
            Already Join
          </Button>
        )
      }
    }
  }

  useEffect(() => {
    getVerfication()
    getTrip()
    getRecomendationList()
  }, [tripId]);

=======
    getDataOtherTrip();
  }, [tripId]);

  const OtherTrip = () => {
    if (dataOtherTrip.length > 0) {
      return (
        <>
          <OtherTripList data={dataOtherTrip} />
          <Link style={{ textDecoration: "none", color: "#188CBD", fontSize: "20px" }} className="float-end mt-3 link-trip" to="/trips">
            See Other
            <RiArrowRightCircleFill size={30} />
          </Link>
        </>
      );
    } else {
      return <img className="img-fluid" style={{ width: "500px" }} src={NoData} alt="No-data" />;
    }
  };

  const memberPercent = (trip.count_member * 100) / trip.max_member;
  const sisa = 100 - memberPercent;
>>>>>>> 88afd857eb6bea145e3382cf96848aa7325e4681
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
              <div className="w-75">
                <div className="member-info">
                  <IoIosPerson />
                  {trip.count_member}/{trip.max_member}
                </div>
              </div>
            </div>
            <div>
              <Row className="justify-content-start mx-0 my-4">
<<<<<<< HEAD
                {handleTripButton()}
=======
                <div className="p-0">
                  <Link to={`/trip/edit/${tripId}`}>
                    <Button className="btn-detailtrip" variant="primary" active>
                      Edit
                    </Button>
                  </Link>
                  <Button className="btn-detailtrip ml-4" variant="danger" active>
                    Delete
                  </Button>
                </div>
>>>>>>> 88afd857eb6bea145e3382cf96848aa7325e4681
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
          <div className="other-trip">
            <h2>OTHER TRIP</h2>
            <p>Other exciting places to visit</p>
          </div>
          <div className="text-center">{OtherTrip()}</div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default DetailTrip;
