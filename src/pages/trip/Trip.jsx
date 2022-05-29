import React, {useState} from 'react'
import Footer from '../../components/footer/Footer'
import BannerTrip from '../../components/trip/BannerTrip'
import Navbar from '../../components/navbar/NavbarMain'
import { Form, Formik } from 'formik'
import Axios from 'axios'
import { API_URL } from '../../config/url'
import { toast } from 'react-toastify'
// import { useNavigate } from "react-router-dom";

function Trip() {
  // const navigate = useNavigate()
  let [Search, setSearch ] = useState({
    trip_name: '',
    destination: '',
    start_date: '',
    end_date: '',
    count_member: '',
    max_member: ''    
  })

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setSearch((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
    // let data = Axios.get(`${API_URL}/trip/filter?trip_name=${Search.trip_name}&destination=${Search.destination}&start_date=${Search.start_date}&end_date=${Search.end_date}`)
    // return data
  }
  return (
    <div>
      <Navbar />
      <BannerTrip />
      <div className='search mx-5 my-5'>
        {/* <Form className="search-trip">
          <div className="form-row">
            <Form.Group className="filter">
              <Form.Label>Search Trips By Trip Name</Form.Label>
              <Form.Control type="text" placeholder="Search Trips By Trip Name" />
              <Form.Text className="text" onChange={handleChange}>Search by Trip Name</Form.Text>
            </Form.Group>
            <Form.Group className="filter">
              <Form.Label>Search Trips By Start Date</Form.Label>
              <Form.Control type="text" placeholder="Search Trips By Start Date" />
              <Form.Text className="text" onChange={handleChange}>Search by Start Date</Form.Text>
            </Form.Group>
            <Form.Group className="filter">
              <Form.Label>Search Trips By End Date</Form.Label>
              <Form.Control type="text" placeholder="Search Trips By End Date" />
              <Form.Text className="text" onChange={handleChange}>Search by End Date</Form.Text>
            </Form.Group>
          </div>
          <div className='form-row'>
            <Form.Group className='filter'>
              <Form.Label>Search Trips By Destination</Form.Label>
              <Form.Control type="text" placeholder="Search Trips By Destination" />
              <Form.Text className="text" onChange={handleChange}>Search by Destination</Form.Text>
            </Form.Group>
            <Form.Group className="filter">
              <Form.Label>Search Trips By Current Member</Form.Label>
              <Form.Control type="text" placeholder="Search Trips By Current Member" />
              <Form.Text className="text-muted" onChange={handleChange}>Search by Current Member</Form.Text>
            </Form.Group>
            <Form.Group className="filter">
              <Form.Label>Search Trips By Max Member</Form.Label>
              <Form.Control type="text" placeholder="Search Trips By Max Member" />
              <Form.Text className="text" onChange={handleChange}>Search by Max Member</Form.Text>
            </Form.Group>
          </div>
        </Form>
        <Form id="search-trip-form col-4 flex">
          <div className="form-group">
            <label for="trip_name">Search Trip by Trip Name</label>
            <input type="text" 
              className="form-control"
              id="trip_name" 
              name="trip_name"
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label for="destination">Search Trip by Destination</label>
            <input type="text" 
              className="form-control"
              id="destination" 
              name="destination"
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label for="start_date">Search Trip by Start Date</label>
            <input type="text" 
              className="form-control"
              id="start_date" 
              name="start_date"
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label for="end_date">Search Trip by End Date</label>
            <input type="text" 
              className="form-control"
              id="end_date" 
              name="end_date"
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label for="count_member">Search Trip by Current Member</label>
            <input type="text" 
              className="form-control"
              id="count_member" 
              name="count_member"
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label for="max_member">Search Trip by Max Member</label>
            <input type="text" 
              className="form-control"
              id="max_member" 
              name="max_member"
              onChange={handleChange} />
          </div>

          onChange={(Search)=>{
            Axios.get(`${API_URL}/trip/filter?trip_name=${Search.trip_name}&destination=${Search.destination}&start_date=${Search.start_date}&end_date=${Search.end_date}`)
              .then((response) => {
                console.log(response)
              })
              .catch((error) => {
                if(error.response){
                  toast.error(error.response.data.message)
                } else {
                  toast.error("Cannot Connect to Server")
                }
              })
          }}
        </Form> */}
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
            Axios.get(`${API_URL}/trip/filter?trip_name=${values.trip_name}&destination=${values.destination}&start_date=${values.start_date}&end_date=${values.end_date}`)
              .then((response)=>{
                console.log(response)
              })
              .catch((error)=>{
                if(error.response){
                  toast.error(error.response.data.message)
                }else{
                  toast.error("Internal Error Server")
                }
              })
          }}
        >
          {({handleChange})=>(
            <Form className="tripform">
              <div className="form-row row">
                <div className="form-group">
                  <label for="trip_name">Search Trip by Trip Name</label>
                  <input type="text" 
                      className="form-control"
                      id="trip_name" 
                      name="trip_name"
                      onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label for="destination">Search Trip by Destination</label>
                  <input type="text" 
                    className="form-control"
                    id="destination" 
                    name="destination"
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label for="start_date">Search Trip by Start Date</label>
                  <input type="text" 
                    className="form-control"
                    id="start_date" 
                    name="start_date"
                    onChange={handleChange} />
                </div>
              </div>
              <div className="form-row row">
                <div className="form-group">
                  <label for="end_date">Search Trip by End Date</label>
                  <input type="text" 
                    className="form-control"
                    id="end_date" 
                    name="end_date"
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label for="count_member">Search Trip by Current Member</label>
                  <input type="text" 
                    className="form-control"
                    id="count_member" 
                    name="count_member"
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label for="max_member">Search Trip by Max Member</label>
                  <input type="text" 
                    className="form-control"
                    id="max_member" 
                    name="max_member"
                    onChange={handleChange} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div>Trips</div>
      <Footer />
    </div>
  )
}

export default Trip