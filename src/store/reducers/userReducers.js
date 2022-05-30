const reducer = (state = {
    user_id: "",
    email: "",
    username: "",
    token:"",
    avatar:"",
}, action) => {
    switch (action.type) {
        case "login":
            return {
                user_id: action.payload.user_id,
                email: action.payload.email,
                username: action.payload.username,
                avatar: action.payload.avatar,
                token: action.payload.token
            }
        case "logout":
            return {
                user_id: "",
                email: "",
                username: "",
                avatar: "",
                token: ""
            }
        default:
        return state
    }
}


export default reducer