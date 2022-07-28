import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "../views/index/IndexPage"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: IndexPage}
  ]
})