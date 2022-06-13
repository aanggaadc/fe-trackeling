import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { API_URL } from "../../config/url";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

function TripRecomendation({ data }) {
  return (
    <div className="container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5
          }
        }}
        pagination={{
          clickable: true
        }}
        scrollbar={{ draggable: true }}
        modules={[Pagination]}
        className='swiper'>
        <Row xs={1} md={2} lg={4} className="g-2">

          {data.map((item, index) => (
            <SwiperSlide>
              <Col key={index}>

                <Card className="text-center shadow h-100">
                  <div className="card-trip">
                    <Card.Img variant="top" src={`${API_URL}/${item.trip_image}`} className="card-imgTrip" />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h3 style={{ fontWeight: "Bold" }}>{item.destination}</h3>
                    </Card.Title>
                    {/* <Card.Text>
                                    <h4>{item.destination}</h4>
                                </Card.Text> */}
                    <Link to={`/recomendation/detail/${item.recomendation_id}`}>
                      <Button className="mt-2 trip-button">Detail</Button>
                    </Link>
                  </Card.Body>
                </Card>

              </Col>
            </SwiperSlide>
          ))}

        </Row>
      </Swiper>
    </div >
  );
}

export default TripRecomendation;
