export const fulfillUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "login",
      payload: user,
    });
  };
};

export const clearUser = () => {
  return (dispatch) => {
    dispatch({
      type: "logout",
      payload: null,
    });
  };
};
