<template>
  <div class="signup">
    <h1>Sign-Up page</h1>
    <input type="text" placeholder="Email address" v-model="user.email" /><br />
    <input
      type="password"
      placeholder="Password"
      v-model="user.password"
    /><br />
    <button @click="signUp">Sign Up</button>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          console.log("Successfully register");
          this.$router.replace("/movies");
        })
        .catch((error) => {
          console.log(error.code + ": " + error.message);
          alert(error.code + "\n" + error.message);
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
