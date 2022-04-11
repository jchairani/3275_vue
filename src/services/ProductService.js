import http from "../http-common.js"

class ProductService{
    getRam(){
        return http.get("/products/ram");
    }
    getProcessor(){
        return http.get("/products/processor");
    }
    getOs(){
        return http.get("/products/os");
    }
    getAll(){
        return http.get("/products");
    }
}

export default new ProductService();