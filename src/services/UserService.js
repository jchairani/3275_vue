import http from "../http-common.js"

class UserService{
    getAll(){
        return http.get(`/Users`);
    }

    delete(id) {
        return http.delete(`/Users/${id}`);
    }

    modify(id, data) {
        return http.put(`/Users/${id}`, data);
    }

    add(data) {
        return http.post(`/Users`, data);
    }
    
}

export default new UserService();