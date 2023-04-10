<script setup>
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
  <div class="citylist">
    <h4>City List</h4>
    <div class="container">
      <h2>Panel Heading</h2>
      <div class="panel panel-default">
        <div class="panel-heading">Panel Heading</div>
        <div class="panel-body">
          <div class="card-group">
            <div
              class="card"
              v-for="(city, key) in cities"
              :key="key"
              style="width: 18rem"
            >
              <img
                :src="imagePath + city.image"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  bs5-pa
</template>

<style scoped></style>
