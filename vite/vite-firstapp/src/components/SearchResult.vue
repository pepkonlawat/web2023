<script setup>
import { computed, onMounted, onBeforeMount } from "vue";
import titles from "../post-data.json";

const props = defineProps({
  query: String,
});

onMounted(() => {
  console.log("mounted");
});

const filteredTitles = computed(() => {
  return titles.filter((s) =>
    s.Name.toLowerCase().includes(props.query.toLowerCase())
  );
});
</script>
<template>
  <div>
    <p>Showing {{ filteredTitles.length }} results for {{ query }}</p>
    <ul>
      <li v-for="title in filteredTitles" :key="title.Page">
        <a v-bind:href="title.Page"> {{ title.Name }}</a>
      </li>
    </ul>
  </div>
</template>
<style></style>
