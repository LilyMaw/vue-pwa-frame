import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import CreatePost from "../pages/post/CreatePost.vue";
import PostDetail from "../pages/post/PostDetail.vue";
import UpdatePost from "../pages/post/UpdatePost.vue";
import UserList from "../pages/user/UserList.vue";
import UserDetail from "../pages/user/UserDetail.vue";
import CreateUser from "../pages/user/CreateUser.vue";
import ConfirmUser from "../pages/user/ConfirmUser.vue";
import UpdateUser from "../pages/user/UpdateUser.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/post/list",
    name: "post-list",
    component: PostList,
  },
  {
    path: "/create/post",
    name: "create-post",
    component: CreatePost,
  },
  {
    path: "/post/detail/:postId",
    name: "post-detail",
    component: PostDetail,
  },
  {
    path: "/update/post/:postId",
    name: "update-post",
    component: UpdatePost,
  },
  {
    path: "/user/list",
    name: "user-list",
    component: UserList,
    meta: { requiresAuth: true }
  },
  {
    path: "/user/detail/:userId",
    name: "user-detail",
    component: UserDetail,
    meta: { requiresAuth: true }
  },
  {
    path: "/create/user",
    name: "create-user",
    component: CreateUser,
    meta: { requiresAuth: true }
  },
  {
    path: "/confirm/user",
    name: "confirm-user",
    component: ConfirmUser,
    meta: { requiresAuth: true }
  },
  {
    path: "/update/user/:userId",
    name: "update-user",
    component: UpdateUser,
    meta: { requiresAuth: true }
  },
  {
    path: "/*",
    redirect: "/post/list",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
  const loggedIn = store.getters.isLoggedIn;
  if (!loggedIn && to.name != "login") {
    return next("/login");
  }
  next();
});

router.beforeEach((to, from, next) => {
    const roleId = store.getters.userRoleId;
    if (to.meta.requiresAuth && roleId != 1) {
      return next("/post/list");
    } 
    next();
});
export default router;
