const reducer = (state = {
    user_id: "",
    email: "",
    username: "",
    token:""
}, action) => {
    switch (action.type) {
        case "login":
            return {
                user_id: action.payload.user_id,
                email: action.payload.email,
                username: action.payload.username,
                token: action.payload.token
            }
        case "logout":
            return {
                user_id: "",
                email: "",
                username: "",
                token: ""
            }
        default:
        return state
    }
}

export default reducer