import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// 按需加载elementui 
//import {ElButton} from 'element-plus'
//import ElementPlus from 'element-plus';
//import 'element-plus/lib/theme-chalk/index.css';

const app =createApp(App) 
app.use(store)
//app.use(ElementPlus)
app.mount('#app')


app.directive('focus', {
    mounted:(el)=>{
      el.focus()
    }
  })
