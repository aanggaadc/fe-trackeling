import React, { useState } from "react";
import NavbarMain from "../../components/navbar/NavbarMain";
import Footer from "../../components/footer/Footer";
import { Container, Row, Col, Card, Image, ProgressBar, Button } from "react-bootstrap";

function DetailTrip() {
  const terisi = 80;
  const sisa = 100 - terisi;
  return (
    <div>
      <NavbarMain />
      <Container>
        <Row className="m-40 p-5">
          <Col lg>
            <Card border="primary" style={{ width: "100%" }}>
              <Image src="https://mdbootstrap.com/img/new/slides/041.webp" className="img-fluid rounded shadow-4" alt="..." />
            </Card>
          </Col>
          <Col lg>
            <Card border="primary" style={{ width: "100%" }}>
              <Card.Body>
                <h1>End Year Trip</h1>
                <h3>Semarang</h3>
                <h5>From 5 Oktober 2022 to 7 Oktober 2022</h5>
                <div>
                  <ProgressBar>
                    <ProgressBar variant="success" now={terisi} label={`${terisi}%`} />
                    <ProgressBar variant="warning" now={sisa} label={`${sisa}%`} />
                  </ProgressBar>
                  <Row className="justify-content-end m-0">3/5</Row>
                  <Button variant="primary" size="lg" active>
                    Edit
                  </Button>{" "}
                  <Button variant="danger" size="lg" active>
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default DetailTrip;
