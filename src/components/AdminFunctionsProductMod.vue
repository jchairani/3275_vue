<template>
  <div class="edit-form">
   <h1>Update Product Info</h1>
   <h2>Product ID: {{ productId }}</h2>
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
      <div class="form-group">
        <label for="status">Status</label>
        <br>
        <select class="dropdown" v-model="productDataRequest.isReady">
          <option disabled value="">Please select one</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <br>
      <button type="submit" class="badge bg-secondary" @click="add">
        Update Product Info
      </button>
      <p>{{ message }}</p>
   </form>
  </div>
  
</template>

<script>
import ProductService from "../services/ProductService";
import LogService from "../services/LogService";

export default {
  name: "adminFunctionsProductMod",
  data() {
    return {
      productDataRequest: { ram: "", processor: "", operatingSystem: "", gpu: "", storage: "", brandName: "", isReady: true},
      message: "",
      productId: "",
      userId: "",
      logDataRequest: { content: ""},
    };
  },
  methods: {
    add() {
      ProductService.modify(this.productId, this.productDataRequest)
      .then((response) => {
          var product = response.data;
          console.log(product);
          this.userId = localStorage.getItem("uid");
          this.logDataRequest.content = "User with id " + this.userId + " update the product with id " + this.productId;
          LogService.add(this.logDataRequest);
          alert("Product Updated Succesfully");
          this.productDataRequest.ram = "";
          this.productDataRequest.processor = "";
          this.productDataRequest.operatingSystem = "";
          this.productDataRequest.gpu = "";
          this.productDataRequest.storage = "";
          this.productDataRequest.brandName = "";
          this.productDataRequest.isReady = "";
        })
        .catch((e) => {
          alert("Failed to Update Product");
          this.productDataRequest.ram = "";
          this.productDataRequest.processor = "";
          this.productDataRequest.operatingSystem = "";
          this.productDataRequest.gpu = "";
          this.productDataRequest.storage = "";
          this.productDataRequest.brandName = "";
          this.productDataRequest.isReady = "";
          this.message = e.response.data.message;
        });
    }
    
  },
  mounted() {
    this.message = "";
    this.productId = localStorage.getItem("productIdUpdate");
  },
};
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>