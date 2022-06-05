import React from 'react'
import { Carousel } from 'react-bootstrap'
import './BannerTrip.css'
import ImageOne from "./banner_trip1.jpg"
import ImageTwo from "./banner_trip2.jpg"
import ImageThree from "./banner_trip3.jpg"

function BannerTrip() {
  return (
    <section id="banner-trip">
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-flex w-100"
                src={ImageOne}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>MANY BENEFIT</h3>
                    <p>Join as our member to get more trip benefit!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ImageTwo}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>MORE THAN THOUSANDS TRIP</h3>
                    <p>Choose trip to join or create new trip as you wish and host the trip</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ImageThree}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>NEW ADVENTURE NEW FRIENDS</h3>
                    <p>Enjoy discover adventure while you socialize with new friends</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </section>
  )
}

export default BannerTrip