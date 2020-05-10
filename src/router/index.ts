import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    path: '/counter',
    component: () => import('../views/Counter.vue')
  },
  {
    path: '/todo',
    component: () => import('../views/Todo.vue')
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
