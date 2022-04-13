<template>
  <div>    
      <h1>User Modification</h1>
      <br>
      <form><button type="button" class="badge bg-secondary" @click="addItem()">Add New User</button></form>
      <br>
      
          <table class="table" >
            <thead class="thead-dark">
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Role</th>
                <th scope="col">Delete Action</th>
                <th scope="col">Update Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.admin }}</td>
                <td><form><button type="button" class="badge bg-secondary" @click="deleteItem(user.id)">Delete</button></form></td>
                <td><form><button type="button" class="badge bg-secondary" @click="modify(user.id)">Update</button></form></td>
              </tr>
            </tbody>
          </table>
          <br><br>
          <button type="submit" class="badge bg-secondary" @click="goBack">
        Go Back
      </button>
      
  </div>
</template>

<script>
import http from "../http-common.js";
import UserService from "../services/UserService";

export default {
  name: "adminFunctionsUser",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    deleteItem(id) {
      if(confirm("Do you really want to delete?")){
        UserService.delete(id);
        this.refreshData();
        this.$router.go();
      }
      

    },

    modify(id) {
      localStorage.setItem("userIdUpdate", id);
      this.$router.push({ name: "AdminFunctionsUserMod" });
    },

    addItem() {
      this.$router.push({ name: "AdminFunctionsUserAdd" });
    },
    refreshData() {
      http.
      get("/Users")
      .then(response => {
        this.users = response.data;
      });
    },
    goBack() {
      this.$router.push({ name: "AdminFunctions" });
    }
    

  },
  mounted() {
    http
      .get("/Users")
      .then((reponse) => {
        this.users = reponse.data;
        console.log(this.users);
      })
      .catch((e) => {
        console.log(e.reponse.data);
      });
    
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