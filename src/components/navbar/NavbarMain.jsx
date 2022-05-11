import React, { useState } from 'react'
import './NavbarMain.css'
import Logo from '../../trackling.png'
import { VscListFlat } from "react-icons/vsc";


function NavbarMain() {
    const [isActive, setActive] = useState(false)

    const toggleMobileNav = () => {
        setActive(!isActive)
    }

    return (
        <header id="header" className="d-flex align-items-center ">
            <div className="container-fluid container-xxl d-flex align-items-center">

                <div id="logo" className="me-auto">
                    <img src={Logo} alt="Trackeling" width={200} />
                </div>

                <nav id="navbar" className={isActive ? "navbar order-last order-lg-0 navbar-mobile" : "navbar order-last order-lg-0"}>
                    <ul>
                        <li><a className="nav-link" href="#hero">HOME</a></li>
                        <li><a className="nav-link" href="#venue">TRIPS</a></li>
                        <li><a className="nav-link" href="#hotels">REGISTER</a></li>
                        {/* <li class="dropdown"><a href="#"><span>Tempat & Atraksi</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="atraksi.html">Atraksi</a></li>
                                <li><a href="destinasi.html">Destinasi</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle">
                        <VscListFlat onClick={toggleMobileNav} />
                    </i>
                </nav>
                <a className="login scrollto" href="#login">LOGIN</a>
            </div>
        </header >
    )
}

export default NavbarMain