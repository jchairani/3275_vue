<template>
  <div>
    <h1>Admin Functions</h1>
  <h2>Welcome Admin</h2>
  <button type="submit" class="badge badge-success" @click="user">
        Modify Users
      </button>

  <button type="submit" class="badge badge-success" @click="products">
        Modify Products and Inventory
      </button>

  <button type="submit" class="badge badge-success" @click="report">
        Generate Report
      </button>

  </div>
  
</template>

<script>
export default {
  name: "adminFunctions",
  data() {
    return {
    
    };
  },
  methods: {
    report() {
      this.$router.push({ name: "AdminReportGeneration" });
      
    },
    products() {
      this.$router.push({ name: "AdminFunctionsProduct" });
      
    },
    user() {
      this.$router.push({ name: "AdminFunctionsUser" });
      
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