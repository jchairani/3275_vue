<template>
  <div class="edit-form">
    <h1>ACCIO</h1>
    <h4>ASSET MANAGAMENT</h4>
    <h4>Login</h4>
    <form>
      <div class="form-group">
        <label for="userId">User ID</label>
        <input
          type="text"
          class="form-control"
          id="user"
          v-model="userLoginRequest.username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="userLoginRequest.password"
        />
      </div>
      <br>
      <button type="submit" class="badge bg-secondary" @click="login">
        Login
      </button>
      <p>{{ message }}</p>
      <button type="submit" class="badge bg-secondary" @click="reg">
        New User Registration
      </button>
    </form>
  </div>
</template>

<script>
import LoginService from "../services/LoginService";

export default {
  name: "userLogin",
  data() {
    return {
      userLoginRequest: { username: "", password: "" },
      message: "",
    };
  },
  methods: {
    login() {
      LoginService.login(this.userLoginRequest)
        .then((response) => {
          var user = response.data;
          localStorage.setItem("uid", user.id);
          localStorage.setItem("uname", user.username);
          if (user.admin == 'admin') {
            this.$router.push({ name: "AdminFunctions" });
          } else {
            this.$router.push({ name: "UserAssetManagement" });
          }
          
        })
        .catch((e) => {
          alert("User doesn't exist");
          this.userLoginRequest.userId = "";
          this.userLoginRequest.password = "";
          this.message = e.response.data.message;
        });
    },
    reg() {
      this.$router.push({ name: "UserRegistration" });
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