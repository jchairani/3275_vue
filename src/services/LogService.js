import http from "../http-common.js"

class LogService{
    getAll(){
        return http.get(`/logs`);
    }

    add(data) {
        return http.post(`/logs`, data);
    }
    
}

export default new LogService();