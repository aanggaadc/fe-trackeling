import React from 'react'
import './TripForm.css'
import Navbar from '../../components/navbar/NavbarMain'
import Footer from '../../components/footer/Footer'
import { Formik, Form } from 'formik'
import Axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '../../config/url'
import { useNavigate } from "react-router-dom";
import useAuth from '../../utils/auth'


function TripForm() {
    const authData = useAuth()
    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <div className='tripform-background'>
                <div className="container tripform-container mt-5">
                    <div className='tripform-title text-center'>
                        <h2>CREATE TRIP</h2>
                    </div>

                    <div className="tripform">
                        <Formik
                            initialValues={{
                                id_user: `${authData.user_id}`,
                                trip_name: "",
                                destination: "",
                                start_date: "",
                                end_date: "",
                                max_member: "",
                                description: "",
                                image: ""
                            }}

                            onSubmit={(values) => {
                                const formData = new FormData()
                                formData.append("id_user", values.id_user)
                                formData.append("trip_name", values.trip_name)
                                formData.append("destination", values.destination)
                                formData.append("start_date", values.start_date)
                                formData.append("end_date", values.end_date)
                                formData.append("max_member", values.max_member)
                                formData.append("description", values.description)
                                formData.append("image", values.image)

                                Axios.post(`${API_URL}/trip/add`, formData)
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
                            {({ handleSubmit, handleChange, setFieldValue }) => (
                                <Form id="form-trip">
                                    <div className="form-group">
                                        <label for='tripname' >Trip Name</label>
                                        <input type="text"
                                            className="form-control"
                                            id="tripname"
                                            name="trip_name"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label for='destination' >Destination</label>
                                        <input type="text"
                                            className="form-control"
                                            id="destination"
                                            name="destination"
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
                                        <label for='maxmember' >Max Member</label>
                                        <input type="number"
                                            className="form-control"
                                            id="maxmember"
                                            name="max_member"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Upload Trip Image</label><br />
                                        <input type='file'
                                            id='image'
                                            name="image"
                                            accept='image/*'
                                            onChange={(e) => {
                                                setFieldValue('image', e.currentTarget.files[0])
                                            }}
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
        </>

    )
}

export default TripForm