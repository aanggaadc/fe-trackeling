import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import NavbarMain from "../../components/navbar/NavbarMain";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import "./UserAccount.css";
import EditAccount from "../../components/user_account/edit_account/EditAccount";
import EditBiodata from "../../components/user_account/edit_biodata/EditBiodata";
import { useLocation, useParams } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../config/url";
import useAuth from "../../utils/auth";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/index";

function UserAccount() {
	const location = useLocation();
	const dispatch = useDispatch();
	const [file, setFile] = useState("");
	const { fillUser } = bindActionCreators(actionCreators, dispatch);

	const [userProfile, setUserProfile] = useState({
		username: "",
		email: "",
		age: "",
		sex: "",
		location: "",
		interest: "",
		phone_number: "",
		avatar_url: "",
	});

	const getUserProfile = () => {
		Axios.get(`${API_URL}/user/single`)
			.then((response) => {
				// console.log("RESPONSE PROFILE", response);
				const apiData = response.data.data;
				setUserProfile({
					username: apiData.username,
					email: apiData.email,
					age: apiData.profile.age,
					sex: apiData.profile.sex,
					location: apiData.profile.location,
					interest: apiData.profile.interest,
					phone_number: apiData.profile.phone_number,
					avatar_url: apiData.profile.avatar_url,
				});
			})
			.catch((error) => {
				console.log("ERROR PROFILE", error);
			});
	};

	const updateReduxState = () => {
		Axios.get(`${API_URL}/user/single`)
			.then((response) => {
				fillUser(response.data.redux);
				localStorage.setItem("authKey", JSON.stringify(response.data.redux));
			})
			.catch((error) => {
				console.log("ERROR PROFILE", error);
			});
	};

	useEffect(() => {
		getUserProfile();
	}, []);

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
								src={file ? URL.createObjectURL(file) : `${API_URL}/${userProfile.avatar_url}`}
								alt=""
								className="img-fluid"
							/>
						</div>
						<div className="info-profile">
							<div className="info-detail mt-3">
								<div className="info-detail-left">Username:</div>
								<div className="info-detail-right">{userProfile.username}</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Email:</div>
								<div className="info-detail-right">{userProfile.email}</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Phone:</div>
								<div className="info-detail-right">{userProfile.phone_number}</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Age:</div>
								<div className="info-detail-right">{userProfile.age}</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Sex:</div>
								<div className="info-detail-right gender">
									{userProfile.sex}
									{userProfile.sex === "Female" && <BsGenderFemale />}
									{userProfile.sex === "Male" && <BsGenderMale />}
									{userProfile.sex === null && "Still Empty :("}
								</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Location:</div>
								<div className="info-detail-right">
									{userProfile.location}
									{userProfile.location === null && "Still Empty :("}
								</div>
							</div>
							<div className="info-detail">
								<div className="info-detail-left">Interest:</div>
								<div className="info-detail-right">
									{userProfile.interest}
									{userProfile.interest === null && "Still Empty :("}
								</div>
							</div>
						</div>
					</div>
					<div className="right-profile">
						{location.pathname === `/user/account` && (
							<EditAccount
								userProfile={userProfile}
								getUserProfile={getUserProfile}
								updateReduxState={updateReduxState}
							/>
						)}
						{location.pathname === `/user/biodata` && (
							<EditBiodata
								setFile={setFile}
								userProfile={userProfile}
								getUserProfile={getUserProfile}
								updateReduxState={updateReduxState}
							/>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default UserAccount;
