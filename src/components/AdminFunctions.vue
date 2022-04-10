<template>
  <h1>This is the Admin Functions Management Components</h1>
  <h2>Last commit</h2>
  <h3>Last Last Commit</h3>
  <h4>Super last commit</h4>
  <button type="submit" class="badge badge-success" @click="report">
        Generate Report
      </button>
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