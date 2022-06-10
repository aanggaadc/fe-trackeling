import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { API_URL } from '../../config/url'
import { Link } from 'react-router-dom'

function TripRecomendation({ data }) {
    return (
        <div className='container'>
            <Row xs={1} md={2} lg={4} className="g-2">
                {data.map((item, index) => (
                    <Col key={index}>
                        <Card className='text-center shadow'>
                            <div className='card-trip'>
                                <Card.Img variant="top" src={`${API_URL}/${item.trip_image}`} className="card-imgTrip" />
                            </div>
                            <Card.Body>
                                <Card.Title><h3 style={{ fontWeight: "Bold" }}>{item.destination}</h3></Card.Title>
                                {/* <Card.Text>
                                    <h4>{item.destination}</h4>
                                </Card.Text> */}
                                <Link to={`/trip/detail/${item.recomendation_id}`}>
                                    <Button className='mt-2 trip-button'>Detail</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default TripRecomendation