import { createRouter, createWebHistory } from "vue-router";
import Users from "../views/Users.vue";
import AddUser from "../views/AddUser.vue";
import UpdateUser from "../views/UpdateUser.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/users",
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/users",
    },
    {
      path: "/users",
      name: "Users",
      component: Users,
    },
    {
      path: "/adduser",
      name: "AddUser",
      component: AddUser,
    },
    {
      path: "/updateuser",
      name: "UpdateUser",
      component: UpdateUser,
    },
  ],
});

export default router;
