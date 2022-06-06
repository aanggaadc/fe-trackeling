import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <section id="banner">
            <div className="banner-container">
                <h1 className="mb-4 pb-0"> Make Your Travel <span>Dreams</span> <br /> Come True Here</h1>
                <a href='#about' className='about-btn'>ABOUT US</a>
            </div>
        </section>
    )
}

export default Banner