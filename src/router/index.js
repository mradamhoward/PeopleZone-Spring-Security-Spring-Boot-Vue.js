import { createRouter, createWebHistory } from 'vue-router';
//import TheHome from '../components/TheHome.vue';
import SearchResults from '../components/SearchResults.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Logout from '../views/Logout.vue';
import PersonViewMore from '../components/PersonViewMore.vue';
import AddPerson from '../components/AddPerson.vue';

const routes = [
  {
    path: '/search',
    name: 'Search Results',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SearchResults
  },
  {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/person/:personId',
      name: 'viewMore',
      component: PersonViewMore
    }
    ,
    {
      path: '/person/add',
      name: 'addPerson',
      component: AddPerson
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
