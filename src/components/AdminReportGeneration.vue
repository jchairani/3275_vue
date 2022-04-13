<template>
  <div>
    <h1>Admin Report</h1>
    <hr>
    <h2>Report Summary for All Products and Users in the database</h2>
    
    <h3>Inventory Report</h3>
    <h4>The total number of Item in the inventory is {{this.products.length}}</h4>
    <h5>With {{c1}} Products In Storage (Status = true)</h5>
    <h5>And {{this.products.length-c1}} Products being lent out ((Status = false)</h5>

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
              </tr>
            </tbody>
          </table>
          

      <h3>User Report</h3>
      <h4>The total number of User in the Database is {{this.users.length}}</h4>
      <h5>With {{c2}} Admins</h5>
      <h5>And {{this.users.length-c2}} Users</h5>


          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.admin }}</td>
              </tr>
            </tbody>
          </table>
          <br><br>
          <button type="submit" class="badge bg-secondary" @click="goBack">
        Go Back
      </button>

  </div>
</template>

<script>
import http from "../http-common.js";

export default {
  name: "reportGeneration",
  data() {
    return {
      products: [],
      users: [],
      c1: 0,
      c2: 0,
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "AdminFunctions" });
    }
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
    
    http
      .get("/Users")
      .then((reponse) => {
        this.users = reponse.data;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].admin == 'admin') {
            this.c2 = this.c2 +1;
          }
        } 

        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].isReady) {
            this.c1 = this.c1 +1;
          }
        } 
        console.log(this.users);
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