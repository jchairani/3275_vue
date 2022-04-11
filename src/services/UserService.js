import http from "../http-common.js"

class UserService{
    getAll(){
        return http.get("/Users");
    }
    
}

export default new UserService();