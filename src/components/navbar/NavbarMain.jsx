import React, { useState } from "react";
import "./NavbarMain.css";
import Logo from "../../trackling.png";
import { VscListFlat } from "react-icons/vsc";
import { BiChevronDown, BiX } from "react-icons/bi";

function NavbarMain() {
	const [activeMobile, setActiveMobile] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(false);

	const toggleMobileNav = () => {
		setActiveMobile(!activeMobile);
	};

	const toggleDropdownMenu = () => {
		setActiveDropdown(!activeDropdown);
	};

	const mobileNav = () => {
		if (activeMobile == false) {
			return (
				<i className="mobile-nav-toggle">
					<VscListFlat onClick={toggleMobileNav} />
				</i>
			);
		} else {
			return (
				<i className="mobile-nav-toggle">
					<BiX onClick={toggleMobileNav} />
				</i>
			);
		}
	};

	return (
		<header id="header" className="d-flex align-items-center ">
			<div className="container-fluid container-xxl d-flex align-items-center">
				<div id="logo" className="me-auto">
					<img src={Logo} alt="Trackeling" width={200} />
				</div>

				<nav
					id="navbar"
					className={
						activeMobile
							? "navbar order-last order-lg-0 navbar-mobile"
							: "navbar order-last order-lg-0"
					}
				>
					<ul>
						<li>
							<a className="nav-link" href="#hero">
								HOME
							</a>
						</li>
						<li>
							<a className="nav-link" href="#venue">
								TRIPS
							</a>
						</li>
						<li>
							<a className="nav-link" href="#hotels">
								REGISTER
							</a>
						</li>
						<li className="dropdown">
							<a href="#">
								USERNAME
								<i>
									<BiChevronDown size={25} onClick={toggleDropdownMenu} />
								</i>
							</a>
							<ul className={activeDropdown ? "dropdown-active" : ""}>
								<li>
									<a href="#myaccount">SETTING ACCOUNT</a>
								</li>
								<li>
									<a href="#mytrip">MY TRIP</a>
								</li>
							</ul>
						</li>
					</ul>
					{mobileNav()}
				</nav>
				<a className="login scrollto" href="#login">
					LOGIN
				</a>
			</div>
		</header>
	);
}

export default NavbarMain;
