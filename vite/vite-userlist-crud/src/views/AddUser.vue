<template>
  <div class="about">
    <h1>Add New User Page</h1>
    <input type="text" placeholder="Firstname" v-model="User.firstName" />
    <br /><br />
    <input type="text" placeholder="Lastname" v-model="User.lastName" />
    <br /><br />
    <input type="text" placeholder="Email" v-model="User.email" /> <br /><br />

    <button @click="addToAPI">Add New User</button>
    <router-link to="/">
      <button>Back to User Page</button>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddUser",
  data() {
    return {
      User: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    addToAPI() {
      var url = "http://127.0.0.1:5001/users";
      axios
        .post(url, this.User)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error();
        });
    },
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
