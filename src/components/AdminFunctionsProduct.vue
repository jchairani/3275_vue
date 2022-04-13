<template>
  <div>
    <h1>Product Modification</h1>
    <br>
      <form><button type="button" class="badge bg-secondary" @click="addItem()">Add New Product</button></form>
      <br>
    

    <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Brand</th>
                <th scope="col">GPU</th>
                <th scope="col">O.S</th>
                <th scope="col">Processor</th>
                <th scope="col">RAM Size</th>
                <th scope="col">Storage</th>
                <th scope="col">Status</th>
                <th scope="col">Delete Action</th>
                <th scope="col">Update Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.brandName }}</td>
                <td>{{ product.gpu }}</td>
                <td>{{ product.operatingSystem }}</td>
                <td>{{ product.processor }}</td>
                <td>{{ product.ram }}</td>
                <td>{{ product.storage }}</td>
                <td>{{ product.isReady }}</td>
                <td><button type="submit" class="badge bg-secondary" @click="deleteItem(product.id)">Delete</button></td>
                <td><button type="submit" class="badge bg-secondary" @click="modify(product.id)">Update</button></td>
              </tr>
            </tbody>
          </table>
          

     
  </div>
</template>

<script>
import http from "../http-common.js";
import ProductService from "../services/ProductService";


export default {
  name: "adminFunctionsProducts",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    deleteItem(id) {
      if(confirm("Do you really want to delete?")){
        ProductService.delete(id);
        this.refreshData();
        this.$router.go();
      }
    },

    modify(id) {
      localStorage.setItem("productIdUpdate", id);
      this.$router.push({ name: "AdminFunctionsProductMod" });
    },
    addItem() {
      this.$router.push({ name: "AdminFunctionsProductAdd" });
    },
    refreshData() {
      http.
      get("/products")
      .then(response => {
        this.users = response.data;
      });
    },

  },
  mounted() {
    http
      .get("/products")
      .then((reponse) => {
        this.products = reponse.data;
        console.log(this.products);
      })
      .catch((e) => {
        console.log(e.reponse.data);
      });
    
  },
};

</script>

<style scoped>
h1 {
  color: red;
}



h3 {
  color: white;
  background-color: gray;
}
</style>