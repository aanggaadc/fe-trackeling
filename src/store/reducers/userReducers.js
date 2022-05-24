const reducer = (state = {
    user_id: "",
    email: "",
    username: ""
}, action) => {
    switch (action.type) {
        case "login":
            return {
                user_id: action.payload.user_id,
                email: action.payload.email,
                username: action.payload.username
            }
        case "logout":
            return {
                user_id: "",
                email: "",
                username: ""
            }
        default:
        return state
    }
}

export default reducer