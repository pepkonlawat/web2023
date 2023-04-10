<template>
  <div class="signin">
    <h1>Sign-In page</h1>
    <input type="text" placeholder="Email address" v-model="user.email" /><br />
    <input
      type="password"
      placeholder="Password"
      v-model="user.password"
    /><br />
    <button @click="signIn">Sign In</button> <br />
    <button type="button" @click="signInGoogle">Google</button>
  </div>
</template>
<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
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
    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          console.log("Successfully sign in");
          console.log(auth.currentUser);
          this.$router.replace("/movies");
        })
        .catch((error) => {
          console.log(error.code + ": " + error.message);
          alert(error.code + "\n" + error.message);
        });
    },
    signInGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log("Token: " + token);
          const user = result.user;
          console.log("User: " + user);
          this.$router.replace("/movies");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
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
