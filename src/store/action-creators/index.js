export const fillUser = (data) => {
    return (dispatch) => {
        dispatch({
            type: "login",
            payload: data
        })
    }
}

export const clearUser = () => {
    return (dispatch) => {
        dispatch({
            type: "logout",
            payload: null
        })
    }
}