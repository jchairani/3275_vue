import http from "../http-common.js"

class UserService{
    getAll(){
        return http.get(`/Users`);
    }

    delete(id) {
        return http.delete(`/Users/${id}`);
    }
    
}

export default new UserService();