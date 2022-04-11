<template>
  <div>
    <h1>This is the report Generation Components</h1>
    <h2>Report</h2>
    <ul v-for="product in products" :key="product.id">
      <li>{{ product.id }}: ({{ product.brand }}) {{ product.isReady }} {{ product.gpu }}</li>
      <ul v-for="user in product.users" :key="user.id">
        <li>{{ user.username }} {{ user.id }}</li>
      </ul>
    </ul>
  </div>
</template>

<script>
import http from "../http-common.js";

export default {
  name: "reportGeneration",
  data() {
    return {
      products: [],
    };
  },
  methods: {},
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

h2 {
  color: white;
  background-color: blue;
}
</style>