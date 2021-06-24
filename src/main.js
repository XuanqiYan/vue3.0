import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// 按需加载elementui 
//import {ElButton} from 'element-plus'
//import ElementPlus from 'element-plus';
//import 'element-plus/lib/theme-chalk/index.css';

// 使用插件
import validateForm from './plugins/validateForm.js' 


const app =createApp(App) 
app.use(store)
//app.use(ElementPlus)
app.use(validateForm)
app.mount('#app')


app.directive('focus', {
    mounted:(el)=>{
      el.focus()
    }
})

/*
  async 和 await
  async 
    只能放在函数前，内部函数返回的就是一个promise ，
    后续可以通过 then catch 监听这个promise 
  await 
    必须放在一个async 修饰的函数内
    等待异步请求完毕后 ，才执行 await 后面的代码
    await 是获取 promise 结束后的数据 resolve('数据')
  promise 的 三种状态
    pending - 进行中
    fulfilled - 成功
    rejected - 失败  
*/
async function demo(){
   return 'nice'
}

//console.log(demo())
demo().then(res=>{
  console.log(res)
})

async function demo1(){
  const res = await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('123')
    },3000)
  })
  console.log(res)
}

demo1()

async function demo2(){
  const url = "https://dog.ceo/api/breeds/image/random"
  const response =  await fetch(url)
  const data = await response.json()
  console.log(data)
  return data
}

// demo2().then(res=>{
//   console.log(res.message)
// })
