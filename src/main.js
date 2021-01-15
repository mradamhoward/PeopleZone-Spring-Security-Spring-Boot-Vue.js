import { createApp } from 'vue'
import router from './router/index.js';
import App from './App.vue'
import TheNav from './components/TheNav.vue'
import  { store } from './store/index.js';
import VueParticles from 'vue-particles';

var app = createApp(App);

router.beforeEach((to, from, next) => {
    if(to.path !== '/login' && to.meta.requiredAuth && !store.getters.isAuthenticated){
        next('/login');
        return
    } else if (from.path === '/login' && to.meta.requiredAuth && store.getters.isAuthenticated){
        next();
        return
    } else if (!to.meta.requiredAuth && store.getters.isAuthenticated){
        next();
        return
    } else if (to.meta.requiredAuth && store.getters.isAuthenticated){
        next();
        return
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
