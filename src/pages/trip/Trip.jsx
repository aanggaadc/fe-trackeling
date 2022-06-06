import React, { useState, useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import BannerTrip from '../../components/trip/BannerTrip'
import Navbar from '../../components/navbar/NavbarMain'
import { Form, Formik } from 'formik'
import Axios from 'axios'
import { API_URL } from '../../config/url'
import { toast } from 'react-toastify'
import { Button, Card, Col, ProgressBar, Pagination, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Trip.css";
import NoData from '../../no-data.gif'

function Trip() {
  const customButton = {
    backgroundColor: "#188CBD",
    color: "white",
    borderRadius: "5px",
    borderStyle: "none",
  };
  const [totalPages, setTotalPages] = useState(0)
  const [currentPages, setCurrentPages] = useState(1)
  const [pageState, setPageState] = useState({
    pageNumber: 1,
    pageSize: 8,
  })
  const [filter, setFilter] = useState({
    trip_name: "",
    destination: "",
    start_date: "",
    end_date: "",
    count_member: "",
    max_member: ""
  })

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const [trip, setTrip] = useState([{
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
    trip_status: ""
  }]);

  const getTrips = () => {
    Axios.post(`${API_URL}/trip/filter`, (trip, pageState))
      .then((response) => {
        const data = response.data.data.items
        setTrip(data.map((item) => {
          return {
            trip_id: item.trip_id,
            owner_id: item.owner_id,
            trip_image: API_URL + item.trip_image,
            destination: item.destination,
            trip_name: item.trip_name,
            start_date: item.start_date,
            end_date: item.end_date,
            count_member: item.count_member,
            max_member: item.max_member,
            description: item.description,
            trip_status: item.trip_status
          }
        }))
        setTotalPages(response.data.data.total_pages)
        setCurrentPages(response.data.data.current_page)
      })
      .catch((error) => {
        if (error.response) {
          toast.error(error.response.data.data.message)
        } else {
          toast.error("Internal Server Error")
        }
      })
  }
  useEffect(() => {
    getTrips()
  }, [pageState])

  const nextPage = () => {
    setCurrentPages(currentPages + 1)
    setPageState({ ...pageState, pageNumber: pageState.pageNumber + 1 })
  }

  const prevPage = () => {
    setCurrentPages(currentPages - 1)
    setPageState({ ...pageState, pageNumber: pageState.pageNumber - 1 })
  }

  const handlePagination = () => {
    if (trip.length > 0) {
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

  const isData = trip.length > 0

  return (
    <div>
      <Navbar />
      <BannerTrip />
      <div className='search mx-5 my-5'>
        <div className="search-title text-center">
          <h2>SEARCH TRIP</h2>
        </div>
        <Formik
          initialValues={{
            trip_name: "",
            destination: "",
            start_date: "",
            end_date: "",
            count_member: "",
            max_member: ""
          }}

          onSubmit={(values) => {
            Axios.post(`${API_URL}/trip/filter`, values)
              .then((response) => {
                const data = response.data.data.items
                console.log(response.data.data.items)
                setTrip(data.map((item) => {
                  return {
                    trip_id: item.trip_id,
                    owner_id: item.owner_id,
                    trip_image: API_URL + item.trip_image,
                    destination: item.destination,
                    trip_name: item.trip_name,
                    start_date: item.start_date,
                    end_date: item.end_date,
                    count_member: item.count_member,
                    max_member: item.max_member,
                    description: item.description,
                    trip_status: item.trip_status
                  }
                }))
                setTotalPages(response.data.data.total_pages)
                setCurrentPages(response.data.data.current_page)
              })
              .catch((error) => {
                if (error.response) {
                  toast.error(error.response.data.message)
                } else {
                  toast.error("Internal Error Server")
                }
              })
          }}
        >
          {({ handleSubmit, handleChange, resetForm }) => (
            <Form id="filter-trip">
              <div className="searchform">
                <div className="form-row col-9">
                  <div className="form-search">
                    <label for="trip_name">Search Trip by Trip Name</label>
                    <input type="text"
                      className="form-control"
                      id="trip_name"
                      name="trip_name"
                      onChange={(e) => {
                        handleChange(e)
                        setFilter({ ...filter, trip_name: e.target.value })
                      }}
                      value={filter.trip_name} />
                  </div>
                  <div className="form-search">
                    <label for="destination">Search Trip by Destination</label>
                    <input type="text"
                      className="form-control"
                      id="destination"
                      name="destination"
                      onChange={(e) => {
                        handleChange(e)
                        setFilter({ ...filter, destination: e.target.value })
                      }}
                      value={filter.destination} />
                  </div>
                  <div className="form-search">
                    <label for="start_date">Search Trip by Start Date</label>
                    <input type="date"
                      className="form-control"
                      id="start_date"
                      name="start_date"
                      onChange={(e) => {
                        handleChange(e)
                        setFilter({ ...filter, start_date: e.target.value })
                      }}
                      value={filter.start_data} />
                  </div>
                </div>
                <div className="form-row col-9">
                  <div className="form-search">
                    <label for="end_date">Search Trip by End Date</label>
                    <input type="date"
                      className="form-control"
                      id="end_date"
                      name="end_date"
                      onChange={(e) => {
                        handleChange(e)
                        setFilter({ ...filter, end_date: e.target.value })
                      }}
                      value={filter.end_date} />
                  </div>
                  <div className="form-search">
                    <label for="count_member">Search Trip by Current Member</label>
                    <input type="number"
                      className="form-control"
                      id="count_member"
                      name="count_member"
                      onChange={(e) => {
                        handleChange(e)
                        setFilter({ ...filter, count_member: e.target.value })
                      }}
                      value={filter.count_member} />
                  </div>
                  <div className="form-search">
                    <label for="max_member">Search Trip by Max Member</label>
                    <input type="number"
                      className="form-control"
                      id="max_member"
                      name="max_member"
                      onChange={(e) => {
                        handleChange(e)
                        setFilter({ ...filter, max_member: e.target.value })
                      }}
                      value={filter.max_member} />
                  </div>
                </div>
              </div>
              <div className='btn-filter-trip mt-3 text-center'>
                <button style={{ color: "white" }} onClick={handleSubmit} type="submit" className='btn btn-primary mt-3'>
                  FIND TRIP
                </button>
                <button style={{ color: "white" }}
                  onClick={() => {
                    setFilter({
                      trip_name: "",
                      destination: "",
                      start_date: "",
                      end_date: "",
                      count_member: "",
                      max_member: ""
                    })
                    resetForm()
                  }}
                  type="submit"
                  className='btn btn-warning mt-3 mx-3'>
                  CLEAR
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="container mb-3">
        <Row xs={1} md={2} lg={4} className="g-4">
          {isData ? Array.from(trip).map((_, idx) => (
            <Col key={idx}>
              <Card className="text-center shadow">
                <Card.Img variant="top" src={_.trip_image} />
                <Card.Body>
                  <Card.Title>{_.trip_name}</Card.Title>
                  <Card.Text>
                    <p>{_.destination}</p>
                    <p>{_.start_date} ~ {_.end_date}</p>
                  </Card.Text>
                  <ProgressBar variant="info" now={((_.count_member) / (_.max_member)) * 100} label={`${_.count_member}/${_.max_member}`} />
                  <Link to={`/trip/detail/${_.trip_id}`}>
                    <Button className="mt-2" style={customButton}>
                      Detail
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )) :
            <img className="img-fluid" style={{ width: "500px", margin: "auto" }} src={NoData} alt="No-data" />}
        </Row>
      </div>
      <div className="container">
        <div className="row">
          {handlePagination()}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Trip