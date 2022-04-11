<template>
  <div>    
      <h1>User Modification</h1>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Role</th>
                <th scope="col">Delete Action</th>
                <th scope="col">Modification Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.admin }}</td>
                <td><button type="submit" class="badge bg-secondary" @click="deleteItem(user.id)">Delete</button></td>
                <td><button type="submit" class="badge bg-secondary" @click="modify(user.id)">Update</button></td>
              </tr>
            </tbody>
          </table>
  </div>
</template>

<script>
import http from "../http-common.js";

export default {
  name: "adminFunctionsUser",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    deleteItem(id) {
      alert(id);
    },

    modify(id) {
      alert(id);
    },

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