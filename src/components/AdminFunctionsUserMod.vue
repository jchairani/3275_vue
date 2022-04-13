<template>
  <div class="edit-form">
   <h1>Editing User Info</h1>
   <h2>User ID: {{ userId }}</h2>
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
          type="text"
          class="form-control"
          id="password"
          v-model="userDataRequest.password"
        />
      </div>
      <div class="form-group">
        <label for="admin">Role</label>
        <br>
        <select class="dropdown" v-model="userDataRequest.admin">
          <option disabled value="">Please select one</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
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
import LogService from "../services/LogService";

export default {
  name: "adminFunctionsUserMod",
  data() {
    return {
      userDataRequest: { username: "", password: "", admin: ""},
      message: "",
      userId: "",
      userId1: "",
      logDataRequest: { content: ""},
    };
  },
  methods: {
    add() {
      UserService.modify(this.userId, this.userDataRequest)
      .then((response) => {
          var product = response.data;
          console.log(product);
          this.userId1 = localStorage.getItem("uid");
          this.logDataRequest.content = "User with id " + this.userId1 + " update the user with id " + this.userId;
          LogService.add(this.logDataRequest);
          alert("User Updated Succesfully");
          this.$router.push({ name: "AdminFunctionsUser" });
        })
        .catch((e) => {
          alert("Failed to Update User");
          this.message = e.response.data.message;
        });
    }
    
  },
  mounted() {
    this.message = "";
    this.userId = localStorage.getItem("userIdUpdate");
  },
};
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>