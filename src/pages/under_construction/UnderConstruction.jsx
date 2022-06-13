import React from 'react'
import Image from './UnderConstruction.png'
import Navbar from '../../components/navbar/NavbarMain'
import Footer from '../../components/footer/Footer'
import './UnderConstruction.css'

function UnderConstruction() {
    return (
        <>
            <Navbar />
            <div className='container-fluid uc-container'>
                <img src={Image} alt="under-construction" />
                <h1> UNDER CONSTRUCTION </h1>
                <h3 className="text-center"> We are currently working on this page <br /> come back later!</h3>
            </div>
            <Footer />
        </>
    )
}

export default UnderConstruction