import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/Admin.vue"),
  },

  {
    path: "/admin/users",
    name: "listUsers",
    component: () => import("@/views/users/ListUsers.vue"),
  },
  
  {
    path: "/admin/users/add",
    name: "addUser",
    component: () => import("@/views/users/AddUser.vue"),
  },
  {
    path: "/admin/users/:userId",
    name: "editUser",
    component: () => import("@/views/users/EditUser.vue"),
  },

  // Redirect to 404 page, if no match found
  {
    path: "*",
    component: () => import("@/views/Error404.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
