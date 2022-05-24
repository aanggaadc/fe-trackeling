const reducer = (
  state = {
    user_id: "",
    username: "",
    email: "",
    token: "",
  },
  action
) => {
  switch (action.type) {
    case "login":
      return {
        user_id: action.payload.user_id,
        username: action.payload.username,
        email: action.payload.email,
        token: action.payload.token,
      };

    case "logout":
      return {
        user_id: "",
        username: "",
        email: "",
        token: "",
      };

    default:
      return state;
  }
};

export default reducer;
