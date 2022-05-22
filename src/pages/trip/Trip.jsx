import React from 'react'
import Footer from '../../components/footer/Footer'
import BannerTrip from '../../components/trip/BannerTrip'
import Navbar from '../../components/navbar/NavbarMain'

function Trip() {
  return (
    <div>
      <Navbar />
      <BannerTrip />
      <div>Trips</div>
      <Footer />
    </div>
  )
}

export default Trip