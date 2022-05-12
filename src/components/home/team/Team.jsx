import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './Team.css'

function Team() {
    return (
        <section id="members">
            <div className="members">
                <h2>MEET THE TEAM</h2>
                <p>These are all extraordinary people who contributed to the creation of this website</p>
                <hr />
            </div>

            <Container className='mt-5'>
                <Row xs={1} md={2} lg={3} className="g-3 d-flex justify-content-center">
                    <Col>
                        <div className="card border-0 shadow">
                            <img src="https://api.lorem.space/image/face?w=500&h=350" className="img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card border-0 shadow">
                            <img src="https://api.lorem.space/image/face?w=500&h=350" className="img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card border-0 shadow">
                            <img src="https://api.lorem.space/image/face?w=500&h=350" className="img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card border-0 shadow">
                            <img src="https://api.lorem.space/image/face?w=500&h=350" className="img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card border-0 shadow">
                            <img src="https://api.lorem.space/image/face?w=500&h=350" className="img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card border-0 shadow">
                            <img src="https://api.lorem.space/image/face?w=500&h=350" className="img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card border-0 shadow">
                            <img src="https://api.lorem.space/image/face?w=500&h=350" className="img-fluid" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

        </section>

    )
}

export default Team