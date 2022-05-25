import React, { useState } from "react";
import "./NavbarMain.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../trackling.png";
import { VscListFlat } from "react-icons/vsc";
import { BiChevronDown, BiX } from "react-icons/bi";
import useAuth from '../../utils/auth'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../store/index'

function NavbarMain() {
	const [activeMobile, setActiveMobile] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(false);
	const authData = useAuth()
	const navigate = useNavigate()
	const dispatch = useDispatch();
	const { clearUser } = bindActionCreators(actionCreators, dispatch)

	const toggleMobileNav = () => {
		setActiveMobile(!activeMobile);
	};

	const toggleDropdownMenu = () => {
		setActiveDropdown(!activeDropdown);
	};

	const mobileNav = () => {
		if (activeMobile === false) {
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

	const handleLogout = () => {
		clearUser()
		navigate('/')
		toast.success("You are logged out, see ya!!")
		localStorage.removeItem('authKey')
	}

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
							<Link className="nav-link" to="/">
								HOME
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/trips">
								TRIPS
							</Link>
						</li>
						{authData ? <>
							<li>
								<Link className="nav-link" to="/trip/create">
									CREATE TRIP
								</Link>
							</li>
							<li className="dropdown">
								<a href="#">
									HI, {authData.username.toUpperCase()}!
									<i>
										<BiChevronDown size={25} onClick={toggleDropdownMenu} />
									</i>
								</a>
								<ul className={activeDropdown ? "dropdown-active" : ""}>
									<li>
										<Link to="/user/edit/account/12">SETTING ACCOUNT</Link>
									</li>
									<li>
										<Link to="/user/mytrip/12">MY TRIP</Link>
									</li>
								</ul>
							</li>
						</> : <li>
							<Link className="nav-link" to="/signup">
								REGISTER
							</Link>
						</li>}


					</ul>
					{mobileNav()}
				</nav>
				{authData ?
					<button onClick={handleLogout} className="logout scrollto">
						LOGOUT
					</button>
					:
					<Link style={{ textDecoration: "none" }} to="/login">
						<a className="login scrollto">
							LOGIN
						</a>
					</Link>
				}
			</div>
		</header>
	);
}

export default NavbarMain;
