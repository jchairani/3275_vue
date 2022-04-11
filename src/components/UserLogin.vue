<template>
  <div class="edit-form">
    <h4>ACCIO ASSET MANAGAMENT</h4>
    <h4>Login</h4>
    <form>
      <div class="form-group">
        <label for="studentId">User ID</label>
        <input
          type="text"
          class="form-control"
          id="student"
          v-model="studentLoginRequest.username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="studentLoginRequest.password"
        />
      </div>
      <br>
      <button type="submit" class="badge bg-secondary" @click="login">
        Login
      </button>
      <p>{{ message }}</p>
    </form>
  </div>
</template>

<script>
import LoginService from "../services/LoginService";

export default {
  name: "userLogin",
  data() {
    return {
      studentLoginRequest: { username: "", password: "" },
      message: "",
    };
  },
  methods: {
    login() {
      LoginService.login(this.studentLoginRequest)
        .then((response) => {
          var student = response.data;
          localStorage.setItem("sid", student.id);
          this.$router.push({ name: "UserAssetManagement" });
        })
        .catch((e) => {
          alert("User doesn't exist");
          this.studentLoginRequest.studentId = "";
          this.studentLoginRequest.password = "";
          this.message = e.response.data.message;
        });
    },
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