import { createApp } from 'vue'
import router from './router/index.js';
import App from './App.vue'
import TheNav from './components/TheNav.vue'
import  { store } from './store/index.js';


var app = createApp(App);

app.use(router);
app.use(store);
  

app.config.productionTip = false;
  
app.component('app-nav', TheNav);



app.mount('#app');
