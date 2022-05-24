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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ImageTwo}
                alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ImageThree}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </section>
  )
}

export default BannerTrip