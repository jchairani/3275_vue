<template>
  <div>
    <h1>Admin Functions</h1>
  <h2>Welcome Admin</h2>
  <button type="submit" class="badge bg-secondary" @click="user">
        Modify Users
      </button><br><br>

  <button type="submit" class="badge bg-secondary" @click="products">
        Modify Products and Inventory
      </button><br><br>

  <button type="submit" class="badge bg-secondary" @click="report">
        Generate Report
      </button><br><br>

  <button type="submit" class="badge bg-secondary" @click="log">
        Get all activity Log
      </button><br><br>

  <button type="submit" class="badge bg-secondary" @click="goBack">
        Sign out
      </button><br><br>    

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
    goBack() {
      this.$router.push({ name: "UserLogin" });
    },
    log() {
      this.$router.push({ name: "AdminFunctionsLog" });
    }
  },
  mounted() {
    
  },
};
</script>

<style scoped>
h1 {
  color: red;
}



button {
  width: 250px;
}
</style>