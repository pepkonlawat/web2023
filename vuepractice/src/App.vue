<script>
export default {
  data() {
    return {
      searchQuery: "",
      results: [],
      isSearching: false,
    };
  },
  watch: {
    searchQuery: function (query) {
      this.isSearching = true;
      var vm = this;

      setTimeout(function () {
        vm.results = ["JavaScript", "PHP", "MySQL"];
        vm.isSearching = false;
      }, 500);
    },
  },
};
</script>

<template>
  <input type="text" v-model="searchQuery" />

  <p v-if="isSearching">Searching...</p>
  <div v-else>
    <ol>
      <li v-for="result in results">{{ result }}</li>
    </ol>
  </div>
</template>
