import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import BlogList from '../views/BlogList.vue';
import BlogDetail from '../views/BlogDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/blogs', name: 'BlogList', component: BlogList },
  { path: '/blogs/:id', name: 'BlogDetail', component: BlogDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
