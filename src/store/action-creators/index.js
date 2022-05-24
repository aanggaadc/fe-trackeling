export const userLogin = (data) => {
    return (dispatch) => {
        dispatch({
            type: "login",
            payload: data
        })
    }
}

export const userLogout = () => {
    return (dispatch) => {
        dispatch({
            type: "logout"
        })
    }
}