<template>
  <div class="movielist">
    <button @click="logout">Sign Out</button>

    <h1>Movie List</h1>
    <input
      type="text"
      placholder="movie name"
      v-model="movie"
      @keyup.enter="addMovie"
    />
    <button type="button" class="btn btn-primary" @click="addMovie">
      Add Movie
    </button>

    <ul>
      <li v-for="(amovie, key) in movies" :key="key">
        <div>
          <p>{{ amovie.name }}</p>
        </div>
        <div>
          <input
            type="text"
            v-model="editMovie[key]"
            @keyup.enter="updateMovie(key)"
          />
        </div>
        <div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteMovie(key)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  collection,
  onSnapshot,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
export default {
  name: "MovieList",
  data() {
    return {
      movies: {},
      movieIds: {},
      movie: null,
      editMovie: [],
      auth: getAuth(),
      isLoggedIn: false,
    };
  },
  mounted() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

    const db = getFirestore();
    const colRef = collection(db, "movies");
    onSnapshot(colRef, (snapshot) => {
      this.movies = snapshot.docs.map((doc) => doc.data());
      this.movieIds = snapshot.docs.map((doc) => doc.id);
      console.log(this.movies);
      console.log(this.movieIds);
    });
  },
  methods: {
    async addMovie() {
      const db = getFirestore();
      const docRef = doc(collection(db, "movies"));
      const dataObj = { name: this.movie };
      const insertRef = await setDoc(docRef, dataObj);
    },
    async updateMovie(key) {
      const db = getFirestore();
      const docRef = doc(db, "movies/" + this.movieIds[key]);
      const dataObj = { name: this.editMovie[key] };
      const updateRef = await updateDoc(docRef, dataObj);
    },
    async deleteMovie(key) {
      const db = getFirestore();
      const docRef = doc(db, "movies/" + this.movieIds[key]);
      const deleteRef = await deleteDoc(docRef);
    },
    logout() {
      signOut(this.auth)
        .then(() => {
          this.$router.replace("/signin");
        })
        .catch((error) => {
          alert(error.message);
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
