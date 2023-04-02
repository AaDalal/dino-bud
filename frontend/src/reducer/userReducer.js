function userReducer(user, action) {
    console.log("userreducer");
    switch(action.type){
        case "user/setuser":{
            return action.payload;
        }
        case "user/unsetUser":{
            return {};
        }
        default: return user;
    }
}
export default userReducer;