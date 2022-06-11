import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {
    return (
        <section id="banner">
            <div className="banner-container">
                <h1 className="mb-4 pb-0"> Make Your Travel <span>Dreams</span> <br /> Come True Here</h1>
                <Link to='/trips' className='about-btn'>GO EXPLORE</Link>
            </div>
        </section>
    )
}

export default Banner