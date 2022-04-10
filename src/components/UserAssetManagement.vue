<template>
  <h1>This is the User Asset Management Components</h1>
  <button type="submit" class="badge badge-success" @click="cart">
        Cart
      </button>
</template>

<script>
export default {
  name: "userAssetManagement",
  data() {
    return {
    
    };
  },
  methods: {
    cart() {
      this.$router.push({ name: "UserShoppingCart" });
      
    },
  },
  mounted() {
    
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