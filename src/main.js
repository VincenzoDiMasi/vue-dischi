import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css' 
import App from './App.vue'
import { formToJSON } from 'axios'
import {router} from './components/router/'

const app = createApp(App);
app.use(router);
app.mount('#app');




