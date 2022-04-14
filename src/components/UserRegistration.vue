<template>
  <div class="edit-form">
   <h1>User Registration</h1>
   <form>
     <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="userDataRequest.username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="userDataRequest.password"
        />
      </div>
      <br>
      <button type="submit" class="badge bg-secondary" @click="add">
        Add User
      </button>
      <p>{{ message }}</p>
   </form>
  </div>
  
</template>

<script>
import UserService from "../services/UserService";

export default {
  name: "UserRegistration",
  data() {
    return {
      userDataRequest: { username: "", password: "", admin: "user"},
      message: "",
    };
  },
  methods: {
    add() {
      UserService.add(this.userDataRequest)
      .then((response) => {
          var product = response.data;
          console.log(product);
          alert("User Created Succesfully");
          this.$router.push({ name: "UserLogin" });
        })
        .catch((e) => {
          alert("Failed to Create User");
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