function tokenReducer(token, action) {
    switch(action.type){
        case "token/setToken":{
            return action.payload;
        }
        case "token/unsetToken":{
            return null;
        }
        default: return token;
    }
}
export default tokenReducer;