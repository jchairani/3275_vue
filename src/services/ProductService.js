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
    getRamBySize(size){
        return http.get(`/products/ram/${size}`);
    }
    getProcessorByName(name){
        return http.get(`/products/processor/${name}`);
    }
    getOSByName(name){
        return http.get(`/products/operatingSystem/${name}`);
    }
}

export default new ProductService();