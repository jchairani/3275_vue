<template>
  <nav class="navbar navbar-dark bg-primary">
    <a class="navbar-brand" href="#" id="navUser">User</a>
    <span class="navbar-brand mb-0 h1" id="navTitle">Asset Management</span>
    <span class="navbar-text">
      <button type="button" class="btn btn-light" @click="cart" id="navCart">
        Cart
      </button>
    </span>
  </nav>
  <br />
  <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <div class="row">
          <!-- to add content to the right in a row -->
          <div class="ml-auto col-auto" id="filterText">RAM</div>
          <div class="ml-auto col-auto">
            <select v-model="chosenRAM">
              <option v-for="(item, index) in ram" :key="index">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="ml-auto col-auto" id="filterText">Processor</div>
          <div class="ml-auto col-auto">
            <select v-model="chosenProcessor">
              <option v-for="(item, index) in processor" :key="index">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="ml-auto col-auto" id="filterText">OS</div>
          <div class="ml-auto col-auto">
            <select v-model="chosenOS">
              <option v-for="(item, index) in os" :key="index">
                {{ item }}
              </option>
            </select>
          </div>
          <!-- to add content to the right in a row-->
        </div>
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ram</th>
                <th scope="col">Processor</th>
                <th scope="col">Operating System</th>
                <th scope="col">isReady</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.id }}</td>
                <td>{{ product.ram }}</td>
                <td>{{ product.processor }}</td>
                <td>{{ product.operatingSystem }}</td>
                <td>{{ product.isReady }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-sm-3">
        <p>Sed ut perspiciatis...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../services/ProductService";
export default {
  name: "userAssetManagement",
  data() {
    return {
      products: [],
      ram: [],
      processor: [],
      os: [],
      message: "",
      chosenRAM: null,
    };
  },
  methods: {
    cart() {
      this.$router.push({ name: "UserShoppingCart" });
    },
    getAllRam() {
      ProductService.getRam()
        .then((response) => {
          this.ram = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    getAllProcessor() {
      ProductService.getProcessor()
        .then((response) => {
          this.processor = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    getAllOperatingSystem() {
      ProductService.getOs()
        .then((response) => {
          this.os = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
    getAllProducts() {
      ProductService.getAll()
        .then((response) => {
          this.products = response.data;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
  },
  mounted() {
    this.getAllProducts();
    this.getAllRam();
    this.getAllProcessor();
    this.getAllOperatingSystem();
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

#navCart {
  margin-right: 20px;
}

#navTitle {
  margin-left: 15px;
  font-size: 30px;
  font-weight: 100;
}
#navUser {
  margin-left: 15px;
  font-size: 25px;
}
.navbar-brand mb-0 h1 {
  text-align: center;
}
#filterText {
  font-size: 20px;
}

select {
  width: 120px;
  height: 100;
}
</style>