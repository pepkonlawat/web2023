<script setup>
import { ref } from "vue";
import SearchResult from "../components/SearchResult.vue";

const query = ref("");
const reset = (evt) => {
  query.value = "";
};
</script>
<template>
  <h2>Search Artical</h2>
  <div>
    <input type="text" v-model="query" placeholder="Filter Search" />
  </div>
  <button @click="reset">Reset</button>
  <SearchResult :query="query" />
</template>
<style scoped></style>
