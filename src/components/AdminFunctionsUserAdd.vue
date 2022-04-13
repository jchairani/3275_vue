<template>
  <div class="edit-form">
   <h1>Adding New User</h1>
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
      <br>
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

export default {
  name: "adminFunctionsUserAdd",
  data() {
    return {
      userDataRequest: { username: "", password: "", admin: ""},
      message: "",
    };
  },
  methods: {
    add() {
      UserService.add(this.userDataRequest)
      .then((response) => {
          var product = response.data;
          console.log(product);
          alert("User Added Succesfully");
          this.$router.push({ name: "AdminFunctionsUser" });
        })
        .catch((e) => {
          alert("Failed to Add User");
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