<template>
  <div class="about">
    <h1>Update User Page</h1>
    <input type="text" placeholder="Firstname" v-model="User.firstName" />
    <br /><br />
    <input type="text" placeholder="Lastname" v-model="User.lastName" />
    <br /><br />
    <input type="text" placeholder="Email" v-model="User.email" /> <br /><br />

    <router-link to="/">
      <button @click="updateToAPI">Update User</button>
      <button>Back to User Page</button>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UpdateUser",
  data() {
    return {
      User: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  mounted() {
    var url = "http://127.0.0.1:5001/users/" + this.$route.params.userId;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.User = response.data;
      })
      .catch((error) => {
        console.error();
      });
  },
  methods: {
    updateToAPI() {
      var url = "http://127.0.0.1:5001/users/" + this.$route.params.userId;
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
