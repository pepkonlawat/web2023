<template>
  <div class="row">
    <h2>SignUp</h2>
    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3" />
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
      <input type="email" class="form-control" placeholder="email" />
      <br />
      <input type="password" class="form-control" placeholder="password" />
      <br />
      <button class="btn btn-success">SignUp</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
