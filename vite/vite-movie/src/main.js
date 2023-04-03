import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFX8oZChNh9ERvuqNo1j4LBWhk2AY_hgI",
  authDomain: "startpro-382606.firebaseapp.com",
  projectId: "startpro-382606",
  storageBucket: "startpro-382606.appspot.com",
  messagingSenderId: "437729007101",
  appId: "1:437729007101:web:b2dfefb1184a0641513594",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
