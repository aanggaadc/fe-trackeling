import React from "react";
import "./Team2.css";
import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Rizky from './rizky.jpg'
import Juan from './juan.jpg'
import Ninda from './ninda.jpeg'
import Angga from './angga.JPG'
import Didi from './didi.jfif'
import Alfiandy from './alfiandy.jpg'
import Kisbayu from './kisbayu.jpg'
import Alifadel from './alifadel.jpg'

function Team2() {
	return (
		<section id="members">
			<div className="container">
				<div className="members-header">
					<h2>MEET THE TEAM</h2>
					<p>These are all extraordinary people who contributed to the creation of this website</p>
					<hr />
				</div>

				<div className="row d-flex justify-content-center mt-5">
					<div className="col-lg-3 col-md-6">
						<div className="members">
							<img src={Didi} alt="juan" className="img-fluid" />
							<div className="details">
								<h3>Didi</h3>
								<p>Mentor</p>
								<div className="social">
									{/* <a href="#twitter">
										<BsTwitter />
									</a> */}
									<a href="https://github.com/didihottest">
										<BsGithub />
									</a>
									{/* <a href="#instagram">
										<BsInstagram />
									</a> */}
									<a href="https://www.linkedin.com/in/mdidims/">
										<BsLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="members">
							<img src={Juan} alt="Speaker 2" className="img-fluid" />
							<div className="details">
								<h3>Juan</h3>
								<p>Frontend Developer</p>
								<div className="social">
									{/* <a href="#twitter">
										<BsTwitter />
									</a> */}
									<a href="https://github.com/deriscode">
										<BsGithub />
									</a>
									{/* <a href="#instagram">
										<BsInstagram />
									</a> */}
									<a href="https://www.linkedin.com/in/juan-d-7b565123b/">
										<BsLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="members">
							<img src={Angga} alt="Speaker 3" className="img-fluid" />
							<div className="details">
								<h3>Angga</h3>
								<p>Fullstack Developer</p>
								<div className="social">
									{/* <a href="#twitter">
										<BsTwitter />
									</a> */}
									<a href="https://github.com/aanggaadc">
										<BsGithub />
									</a>
									{/* <a href="#instagram">
										<BsInstagram />
									</a> */}
									<a href="https://www.linkedin.com/in/anggara-setiawan-b605a021b/">
										<BsLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="members">
							<img src={Rizky} alt="Speaker 4" className="img-fluid" />
							<div className="details">
								<h3>Rizky</h3>
								<p>Fullstack Developer</p>
								<div className="social">
									{/* <a href="#twitter">
										<BsTwitter />
									</a> */}
									<a href="https://github.com/RizkyPDA">
										<BsGithub />
									</a>
									{/* <a href="#instagram">
										<BsInstagram />
									</a> */}
									<a href="https://www.linkedin.com/in/muhammadrizkyrs/">
										<BsLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="members">
							<img src={Ninda} alt="Speaker 6" className="img-fluid" />
							<div className="details">
								<h3>Ninda</h3>
								<p>Fullstack Developer</p>
								<div className="social">
									{/* <a href="#twitter">
										<BsTwitter />
									</a> */}
									<a href="https://github.com/shafiraninda">
										<BsGithub />
									</a>
									{/* <a href="#instagram">
										<BsInstagram />
									</a> */}
									<a href="https://www.linkedin.com/in/nindasa/">
										<BsLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="members">
							<img src={Alfiandy} alt="Speaker 4" className="img-fluid" />
							<div className="details">
								<h3>Alfiandy</h3>
								<p>Fullstack Developer</p>
								<div className="social">
									<a href="https://twitter.com/Alifiandyn">
										<BsTwitter />
									</a>
									<a href="https://github.com/alifiandyn">
										<BsGithub />
									</a>
									<a href="https://www.instagram.com/alifiandyn/">
										<BsInstagram />
									</a>
									<a href="https://www.linkedin.com/in/alifiandy-nugraha-4859161a4/">
										<BsLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="members">
							<img src={Kisbayu} alt="Speaker 6" className="img-fluid" />
							<div className="details">
								<h3>Kisbayu</h3>
								<p>Fullstack Developer</p>
								<div className="social">
									{/* <a href="#twitter">
										<BsTwitter />
									</a> */}
									<a href="https://github.com/kisbayu">
										<BsGithub />
									</a>
									{/* <a href="#instagram">
										<BsInstagram />
									</a> */}
									<a href="https://www.linkedin.com/in/kisbayuadji/">
										<BsLinkedin />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="members">
							<img src={Alifadel} alt="Speaker 6" className="img-fluid" />
							<div className="details">
								<h3>Alifadel</h3>
								<p>Fullstack Developer</p>
								<div className="social">
									{/* <a href="#twitter">
										<BsTwitter />
									</a> */}
									<a href="https://github.com/Aliffadel">
										<BsGithub />
									</a>
									{/* <a href="#instagram">
										<BsInstagram />
									</a> */}
									{/* <a href="#linkedid">
										<BsLinkedin />
									</a> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team2;
