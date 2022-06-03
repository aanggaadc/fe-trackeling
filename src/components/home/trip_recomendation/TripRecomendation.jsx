import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'

function TripRecomendation() {
    return (
        <div className='container'>
            <Row xs={1} md={2} lg={4} className="g-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='text-center shadow'>
                            <Card.Img variant="top" src="https://picsum.photos/seed/picsum/400/200" />
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <Card.Text>
                                    01/01/2022
                                </Card.Text>
                                <Button className="trip-button">Detail</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default TripRecomendation