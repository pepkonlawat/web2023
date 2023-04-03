<script setup>
import { ref, onMounted } from "vue";
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";
const movies = ref({});
const movieID = ref({});
const movieInput = ref();
const editMovies = ref([]);
onMounted(() => {
  const db = getFirestore();
  const colRef = collection(db, "movies");
  onSnapshot(colRef, (snapshot) => {
    movies.value = snapshot.docs.map((doc) => doc.data());
    movieID.value = snapshot.docs.map((doc) => doc.id);
    console.log(movies.value);
    console.log(movieID.value);
  });
});
async function addMovie() {
  const db = getFirestore();
  const docRef = doc(collection(db, "movies"));
  const dataObj = { name: movieInput.value };
  const insertRef = await setDoc(docRef, dataObj);
}
async function updateMovie(key) {
  const db = getFirestore();
  const docRef = doc(db, "movies/" + movieID.value[key]);
  const dataObj = { name: editMovies.value[key] };
  const insertRef = await updateDoc(docRef, dataObj);
}
async function deleteMovie(key) {
  const db = getFirestore();
  const docRef = doc(db, "movies/" + this.movieIds[key]);
  const deleteRef = await deleteDoc(docRef);
}
</script>
<template>
  <div class="movieslist">
    <h2>Movie มาแล้วจ้า</h2>
    <div class="mb-3">
      <label for="" class="form-label">Name</label>
      <input
        v-model="movieInput"
        @keyup.enter="addMovie"
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=""
      />
      <small id="helpId" class="form-text text-muted">Help text</small>
    </div>

    <button @click="addMovie" type="button" class="btn btn-primary">Add</button>

    <ul>
      <li v-for="(movie, key) in movies" :key="key">
        {{ movie.name }}
        <input
          v-model="editMovies[key]"
          @keyup.enter="updateMovie(key)"
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
        />
        <button @click="deleteMovie(key)" type="button" class="btn btn-danger">
          delete
        </button>
      </li>
    </ul>
  </div>
</template>
