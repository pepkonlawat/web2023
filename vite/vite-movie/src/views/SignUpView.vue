<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const user = ref({
  email: "",
  password: "",
});
function signUp() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, user.value.email, user.value.password)
    .then((userCredentail) => {
      console.log("Successfully signed up");
      router.replace("/movies");
    })
    .catch((error) => {
      console.log(error.code + ": " + error.message);
      alert(error.code + "\n" + error.message);
    });
}
</script>
<template>
  <h1>Sign up</h1>
  <div class="mb-3">
    <label for="" class="form-label">Email</label>
    <input
      v-model="user.email"
      type="email"
      class="form-control"
      name=""
      id=""
      aria-describedby="emailHelpId"
      placeholder="abc@mail.com"
    />
    <small id="emailHelpId" class="form-text text-muted">Help text</small>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Password</label>
    <input
      v-model="user.password"
      type="password"
      class="form-control"
      name=""
      id=""
      placeholder=""
    />
  </div>
  <button @click="signUp()" type="button" class="btn btn-primary">
    signup
  </button>
</template>
