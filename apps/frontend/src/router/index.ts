import { createRouter, createWebHistory } from 'vue-router';
import TaskView from '../views/TaskView.vue';
import EisenhowerView from '../views/EisenhowerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: TaskView,
    },
    {
      path: '/eisenhower',
      name: 'eisenhower',
      component: EisenhowerView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
