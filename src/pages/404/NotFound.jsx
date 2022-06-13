import React from 'react'
import Navbar from '../../components/navbar/NavbarMain'
import Footer from '../../components/footer/Footer'
import Image from './NotFound.png'
import './NotFound.css'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <Navbar />
            <div className="container-fluid notfound-container">
                <img src={Image} alt="notfound" />
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>Oops! Looks like you lost</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>
                    <Link to="/">Go To Homepage</Link>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default NotFound