import React from 'react'
import { Button } from 'react-bootstrap'
import './Home.css'
import Navbar from '../../components/navbar/NavbarMain'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import CardTrip from '../../components/trip_card/TripCard'
import Team from '../../components/team/Team'


function Home() {
    const customButton = {
        backgroundColor: '#0e1b4d',
        color: 'white',
        borderRadius: '5px',
        borderStyle: "none"
    }

    return (
        <div>
            <Navbar />
            <Banner />

            <main id='main'>
                <section id="recomendation" className="section-with-bg">
                    <div className="container mt-5">
                        <div className="recomendation">
                            <h2>OUR RECOMENDATION</h2>
                            <p>Berikut adalah tempat-tempat yang menarik untuk dikunjungi</p>
                        </div>

                        <div className='tags'>
                            <Button style={customButton}> Bali</Button>
                            <Button style={customButton}> Bandung</Button>
                            <Button style={customButton}> Semarang</Button>
                            <Button style={customButton}> Jakarta</Button>
                            <Button style={customButton}> Labuan Bajo</Button>
                        </div>

                        <div className='mt-3'>
                            <CardTrip />
                        </div>


                        <hr className='line mt-5' />
                    </div>
                </section>

                <section id="trips" className="section-with-bg">
                    <div className="container mt-5">
                        <div className="recomendation">
                            <h2>New TRIPS</h2>
                            <p>Latest Trips Available to Join</p>
                        </div>

                        <CardTrip />
                    </div>
                </section>
            </main>

            <Team />
            <Footer />
        </div>
    )
}

export default Home