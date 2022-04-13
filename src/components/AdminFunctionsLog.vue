<template>
  <div>
    <h1>Activity Log</h1>
    <hr>
    <br><br>
    

    <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Log ID</th>
                <th scope="col">Content</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="log in logs" :key="log.id">
                <td>{{ log.id }}</td>
                <td>{{ log.content }}</td>
              </tr>
            </tbody>
          </table>
          
          <br><br>
          <button type="submit" class="badge bg-secondary" @click="goBack">
        Go Back
      </button>
      <p>{{ message }}</p>

  </div>
</template>

<script>
import http from "../http-common.js";
import LogService from "../services/LogService";

export default {
  name: "adminFunctionsLog",
  data() {
    return {
      logs: [],
      logDataRequest: { content: ""},
      message: "",
      userId: "",
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "AdminFunctions" });
    }
  },
  mounted() {
    this.message = "";
    this.userId = localStorage.getItem("uid");
    this.logDataRequest.content = "User with id " + this.userId + " view the log";
    LogService.add(this.logDataRequest);
    http
      .get("/logs")
      .then((reponse) => {
        this.logs = reponse.data;
        console.log(this.logs);
      })
      .catch((e) => {
        console.log(e.reponse.data);
      });
      this.message = "";
      this.userId = localStorage.getItem("uid");

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