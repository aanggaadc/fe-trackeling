import React from 'react'
import './TripForm.css'
import Navbar from '../../components/navbar/NavbarMain'
import Footer from '../../components/footer/Footer'
import { Formik, Form } from 'formik'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '../../config/url'
import { useNavigate } from "react-router-dom";


function TripForm() {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <div className='tripform-background'>
                <Navbar />
                <div className="container tripform-container mt-5">
                    <div className='tripform-title text-center'>
                        <h2>CREATE TRIP</h2>
                    </div>

                    <div className="tripform">
                        <Formik
                            initialValues={{
                                trip_name: "",
                                destination: "",
                                start_date: "",
                                end_date: "",
                                max_member: "",
                                description: ""
                            }}

                            onSubmit={(values) => {
                                console.log(values)
                                Axios.post(`${API_URL}/trip/create`, values)
                                    .then((response) => {
                                        console.log(response)
                                        toast.success("Trip Successfully created!!")
                                        navigate('/')
                                    })
                                    .catch((error) => {
                                        if (error.response) {
                                            toast.error(error.response.data.message)
                                        } else {
                                            toast.error("Cannot Connect to Server")
                                        }
                                    })
                            }}
                        >
                            {({ handleSubmit, handleChange }) => (
                                <Form id="form-trip">
                                    <div className="form-group">
                                        <input type="text"
                                            className="form-control"
                                            id="tripname"
                                            name="trip_name"
                                            placeholder="Trip Name"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text"
                                            className="form-control"
                                            id="destination"
                                            name="destination"
                                            placeholder="Destination"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label for='startdate' >Start Date</label>
                                        <input type="date"
                                            className="form-control"
                                            id="startdate"
                                            name="start_date"
                                            placeholder="Start Date"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label for='enddate' >End Date</label>
                                        <input type="date"
                                            className="form-control"
                                            id="enddate"
                                            name="end_date"
                                            placeholder="End Date"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="number"
                                            className="form-control"
                                            id="maxmember"
                                            name="max_member"
                                            placeholder="Max Member"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea
                                            name="description"
                                            placeholder="Trip Description"
                                            onChange={handleChange}
                                            required />
                                    </div>

                                    <div className="btn-create mt-3">
                                        <button onClick={handleSubmit} type="submit" className="btn btn-primary mt-3">
                                            CREATE
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default TripForm