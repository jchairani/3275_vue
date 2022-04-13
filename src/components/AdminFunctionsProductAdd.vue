<template>
  <div class="edit-form">
   <h1>Adding New Product</h1>
   <form>
     <div class="form-group">
        <label for="ram">Ram Size</label>
        <input
          type="number"
          class="form-control"
          id="ram"
          v-model="productDataRequest.ram"
        />
      </div>
      <div class="form-group">
        <label for="processor">Processor</label>
        <input
          type="text"
          class="form-control"
          id="processor"
          v-model="productDataRequest.processor"
        />
      </div>
      <div class="form-group">
        <label for="operatingSystem">Operating System</label>
        <input
          type="text"
          class="form-control"
          id="operatingSystem"
          v-model="productDataRequest.operatingSystem"
        />
      </div>
      <div class="form-group">
        <label for="gpu">gpu</label>
        <input
          type="text"
          class="form-control"
          id="gpu"
          v-model="productDataRequest.gpu"
        />
      </div>
      <div class="form-group">
        <label for="storage">storage</label>
        <input
          type="number"
          class="form-control"
          id="storage"
          v-model="productDataRequest.storage"
        />
      </div>
      <div class="form-group">
        <label for="brandName">brandName</label>
        <input
          type="text"
          class="form-control"
          id="brandName"
          v-model="productDataRequest.brandName"
        />
      </div>
      <br>
      <button type="submit" class="badge bg-secondary" @click="add">
        Add Product
      </button>
      <p>{{ message }}</p>
   </form>
  </div>
  
</template>

<script>
import ProductService from "../services/ProductService";
import LogService from "../services/LogService";

export default {
  name: "adminFunctionsProductAdd",
  data() {
    return {
      productDataRequest: { ram: "", processor: "", operatingSystem: "", gpu: "", storage: "", brandName: "", isReady: true},
      message: "",
      userId: "",
      logDataRequest: { content: ""},
    };
  },
  methods: {
    add() {
      ProductService.add(this.productDataRequest)
      .then((response) => {
          var product = response.data;
          console.log(product);
          this.userId = localStorage.getItem("uid");
          this.logDataRequest.content = "User with id " + this.userId + " add a new product";
          LogService.add(this.logDataRequest);
          alert("Product Added Succesfully");
          this.productDataRequest.ram = "";
          this.productDataRequest.processor = "";
          this.productDataRequest.operatingSystem = "";
          this.productDataRequest.gpu = "";
          this.productDataRequest.storage = "";
          this.productDataRequest.brandName = "";
        })
        .catch((e) => {
          alert("Failed to Add Product");
          this.productDataRequest.ram = "";
          this.productDataRequest.processor = "";
          this.productDataRequest.operatingSystem = "";
          this.productDataRequest.gpu = "";
          this.productDataRequest.storage = "";
          this.productDataRequest.brandName = "";
          this.message = e.response.data.message;
        });
    }
    
  },
  mounted() {
    this.message = "";
  },
};
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>