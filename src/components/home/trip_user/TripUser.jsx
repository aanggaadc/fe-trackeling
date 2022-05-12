import React from 'react'
import { Col, Card, Button, Row, ProgressBar } from 'react-bootstrap'

function TripUser() {
    const customButton = {
        backgroundColor: '#188CBD',
        color: 'white',
        borderRadius: '5px',
        borderStyle: "none"
    }
    return (
        <div className='container'>
            <Row xs={1} md={2} lg={4} className="g-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='text-center shadow'>
                            <Card.Img variant="top" src="https://picsum.photos/seed/picsum/400/200" />
                            <Card.Body>
                                <Card.Title>Trip Name</Card.Title>
                                <Card.Text>
                                    <p>Location</p>
                                    <p>Date</p>
                                </Card.Text>
                                <ProgressBar variant="info" now={60} label={'6/10'} />
                                <Button className='mt-2' style={customButton}>Detail</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default TripUser