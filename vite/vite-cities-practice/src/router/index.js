import { createRouter, createWebHistory } from "vue-router";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import CityList from "../views/CityList.vue";
import Detail from "../views/Detail.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "citylist",
      component: CityList,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/detail/:city",
      name: "detail",
      component: Detail,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    if (await getCurrentUser()) {
      console.log("You are authorized to access this area.");
      next();
    } else {
      console.log("You are not authorized to access this area.");
      next("signin");
    }
  } else {
    next();
  }
});

export default router;
