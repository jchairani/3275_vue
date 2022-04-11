<template>
  <div>
    <h1>Product Modification</h1>
    

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
                <th scope="col">Modification Action</th>
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
// import UserService from "../services/UserService";

export default {
  name: "adminFunctionsProducts",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    deleteItem(id) {
      alert(id);
    },

    modify(id) {
      alert(id);
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