const useAuth = () => {
  const authData = localStorage.getItem("auth");

  if (!authData) {
    return null;
  } else {
    return JSON.parse(authData);
  }
};

module.exports = useAuth;
