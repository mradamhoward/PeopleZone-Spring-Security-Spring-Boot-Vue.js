import { createRouter, createWebHistory } from 'vue-router';
//import TheHome from '../components/TheHome.vue';
import SearchResults from '../components/SearchResults.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Logout from '../views/Logout.vue';
import PersonViewMore from '../components/PersonViewMore.vue';
import AddPerson from '../components/AddPerson.vue';
import UploadFiles from '../components/UploadFiles.vue';
import Pay from '../components/Pay.vue';

const routes = [
  {
    path: '/search',
    name: 'Search Results',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SearchResults,
    meta: { requiredAuth: true }
  },
  {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiredAuth: false }
    },
    {
      path: '/home',
      component: Home,
      meta: { requiredAuth: false }
    },
    {
      path: '/login',
      component: Login,
      meta: { requiredAuth: false }
    },
    {
      path: '/register',
      component: Register,
      meta: { requiredAuth: false }
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('../views/Profile.vue'),
      meta: { requiredAuth: true }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: { requiredAuth: true }
    },
    {
      path: '/person/:personId',
      name: 'viewMore',
      component: PersonViewMore,
      meta: { requiredAuth: true }
    },
    {
      path: '/person/add',
      name: 'addPerson',
      component: AddPerson,
      meta: { requiredAuth: true }
    ,
  },
  {
    path: '/upload/file',
    name: 'fileUpload',
    component: UploadFiles,
    meta: { requiredAuth: true }
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
    meta: { requiredAuth: false }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
