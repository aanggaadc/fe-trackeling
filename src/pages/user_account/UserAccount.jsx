import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavbarMain from "../../components/navbar/NavbarMain";
import { BsGenderMale } from "react-icons/bs";
import "./UserAccount.css";
import EditAccount from "../../components/user_account/edit_account/EditAccount";
import EditBiodata from "../../components/user_account/edit_biodata/EditBiodata";
import { useLocation } from "react-router-dom";

function UserAccount() {
	const location = useLocation();

	const [file, setFile] = useState("");
	console.log(file);

	return (
		<div id="background-profile">
			<NavbarMain />
			<div className="container container-profile">
				<div className="account-profile">
					<div className="left-profile">
						<div className="title-profile">
							<h1 style={{ color: "#25abe3", filter: "brightness(95%)", textAlign: "center" }}>
								My Profile
							</h1>
						</div>
						<div className="photo mt-4">
							<img
								src={
									file
										? URL.createObjectURL(file)
										: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
								}
								alt=""
								className="img-fluid"
							/>
						</div>
						<div className="info-profile">
							<div className="info-detail mt-3">
								<div className="info-detail-left">Username:</div>
								<div className="info-detail-right">michaeljackson</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Email:</div>
								<div className="info-detail-right">moonwalker@email.com</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Phone:</div>
								<div className="info-detail-right">081234567890</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Age:</div>
								<div className="info-detail-right">35 years old</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Sex:</div>
								<div className="info-detail-right gender">
									Male
									<BsGenderMale />
								</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Location:</div>
								<div className="info-detail-right">Jakarta Pusat</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Interest:</div>
								<div className="info-detail-right">Music</div>
							</div>
						</div>
					</div>
					<div className="right-profile">
						{location.pathname === "/user/edit/account/123" && <EditAccount />}
						{location.pathname === "/user/edit/biodata/123" && <EditBiodata setFile={setFile} />}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default UserAccount;
