const useAuth = () => {
	const authData = localStorage.getItem("authKey");

	if (!authData) {
		return null;
	} else {
		return JSON.parse(authData);
	}
};

module.exports = useAuth;
