<script setup>
import Header from "../components/Header.vue";
import { onMounted, ref } from "vue";
import {
  collection,
  onSnapshot,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
const cities = ref({});
const cityID = ref({});
const imagePath = ref("src/assets/");
onMounted(() => {
  const db = getFirestore();
  const colRef = collection(db, "cities");
  onSnapshot(colRef, (snapshot) => {
    cities.value = snapshot.docs.map((doc) => doc.data());
    cityID.value = snapshot.docs.map((doc) => doc.id);
    console.log(cities.value);
    console.log(cityID.value);
  });
});
</script>
<template>
  <Header />
  <div class="container text-center">
    <h5>EGCI437 Practice</h5>
    <div class="card text-center">
      <div class="card-header">List of Cities</div>
      <div class="card-body">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="(city, key) in cities">
            <div class="card">
              <img
                :src="imagePath + city.image"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{{ city.name }}</h5>
                <p class="card-text">
                  {{ city.detail }}
                </p>
                <router-link :to="'/detail/' + city.name">
                  <a href="#" class="btn btn-success">Detail</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
