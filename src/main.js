import { createApp } from 'vue'
import router from './router/index.js';
import App from './App.vue'
import TheNav from './components/TheNav.vue'
import  { store } from './store/index.js';
import VueParticles from 'vue-particles';
import './index.css'

var app = createApp(App);

router.beforeEach((to, from, next) => {
    console.log(store.state.auth.status.loggedIn);
    if(to.path != '/login' && to.meta.requiredAuth && !store.state.auth.status.loggedIn){
        next('/login');
    } else if (from.path == '/login' && to.meta.requiredAuth && store.state.auth.status.loggedIn){
        console.log('this hit')
        next();
    } else {
        next();
    }
})

app.use(router);
app.use(store);
  

app.config.productionTip = false;
  
app.component('app-nav', TheNav);

app.use(VueParticles);

app.mount('#app');
