<template>
  <nav class="navbar navbar-dark bg-primary">
    <a class="navbar-brand" href="#" id="navUser">User</a>
    <span class="navbar-brand mb-0 h1" id="navTitle">Shopping Cart</span>
    <span class="navbar-text">
      <button type="button" class="btn btn-light" @click="back" id="navCart">
        Add more item
      </button>
    </span>
  </nav>

  <div class="container">
    <div class="row">
      <div class="cols-sm-7">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Ram</th>
              <th scope="col">Processor</th>
              <th scope="col">Operating System</th>
              <th scope="col">isReady</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cartDetails" :key="index">
              <td>{{ product.id }}</td>
              <td>{{ product.ram }}</td>
              <td>{{ product.processor }}</td>
              <td>{{ product.operatingSystem }}</td>
              <td>{{ product.isReady }}</td>
              <td>
                <button
                  type="submit"
                  class="badge bg-secondary"
                  v-if="product.isReady === true"
                  @click="deleteCartItem(index)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-3">
        <button type="button" class="btn btn-dark" @click="checkout" id="navCart">
          Checkout
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../services/ProductService.js";
import LogService from "../services/LogService";
export default {
  name: "userShoppingCart",
  data() {
    return {
      cart: [],
      cartDetails: [],
      message: "",
      registrationRequest : {
        action: "",
        id : ""
      },
      userId: "",
      logDataRequest: { content: ""},
    };
  },
  methods: {
    checkout(){
      var productId = [];
      for(let i=0;i<this.cartDetails.length;i++){
        productId.push(this.cartDetails[i].id);
      }
      for(let i=0;i<this.cartDetails.length;i++){
        this.registrationRequest.action="add";
        this.registrationRequest.id=productId[i];
        ProductService.addUserProduct(localStorage.getItem('uname'),this.registrationRequest).then((response)=>{
          console.log(response);
          console.log("here");
          ProductService.setAvailablity(productId[i],false).then((responses)=>{
            console.log(productId[i]);
            console.log(responses);
          }).catch((e)=>{
            this.message = e.response.data.message;
          })
        }).catch((e)=>{
          this.message = e.response.data.message;
        })

        this.userId = localStorage.getItem("uid");
        this.logDataRequest.content = "User with id " + this.userId + " check out some item ";
        LogService.add(this.logDataRequest);

        localStorage.removeItem('cart');
        this.$router.push("UserAssetManagement");

      }
    },
    back() {
      this.$router.push("UserAssetManagement");
    },
    deleteCartItem(index) {
      this.cartDetails.splice(index, 1);
      console.log(this.cartDetails);
    },
    getCartDetails() {
      for (let i = 0; i < this.cart.length; i++) {
        ProductService.getProductById(this.cart[i])
          .then((response) => {
            this.cartDetails.push(response.data);
          })
          .catch((e) => {
            this.message = e.response.message;
          });
      }
    },
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    this.getCartDetails();
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
</style>