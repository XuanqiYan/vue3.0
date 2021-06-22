<template>
    <h1>ref 和 reactive 实现响应式</h1>
    <p>{{name}}</p>
    <p>{{obj.age}} -- {{obj.classid}}</p>
    <p>{{arr}}</p>
</template>

<script>
/*
    ref 实际可以把一个基础类型数据 变成响应式对象
        原理：ref 是vue3.0 提供的响应式函数 --> proxy 代理的对象
        注意：
            1.在setup 内部 通过.value 访问和设置  值的，但是在模板中不需要.value
                因为模板在vue编译的过程中，只要看到是一个ref响应式对象，自动调用.value属性
            2.reactive 对象中，也不需要.value , vue会自动封装.value的调用
    
    reactive 可以把一个对象 变成响应式对象
        原理：reactive 是vue3.0 提供的响应式函数 --> proxy 代理的对象
*/
import {reactive, ref} from 'vue'
export default {
    setup(){
        //let name = 'zhangsan' //不是响应式

        // ref 是把 'zhangsan' --> proxy({value:'zhangsan'})
        let name = ref('zhangsan')
       
        // const obj = { // 不是响应式的
        //     age:21,
        //     classid:'H5'
        // }
        // reactive 把一个对象{age:21}  --> proxy({age:21})
        const obj = reactive({
            age:21,
            classid:'h5'
        })
        
        const arr = reactive([1,2,3,4])  // 不是响应式的
    
        setTimeout(()=>{
            //name.value = 'lisi'
            console.log('xxxx')
            //obj.age  = 25
            //obj.classid = "html"
            arr.push(5)
            arr[0]=100

        },2000)
        return {
            name,
            obj,
            arr
        }
    }
}
</script>

<style>

</style>