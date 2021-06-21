<template>
   <h1>toRefs </h1>
   <p>{{name}} -- {{age}} -- {{abc}}</p>
</template>

<script>
/*
    对reactive 对象直接解构 会丢失其属性的响应式
        注意: 在setup中遇到 解构一个reactive对象的时候,如果不想丢失其属性的响应式
        必须使用 toRefs 将reactive对象 转化
*/
const demo = ()=>{
    const obj1 = reactive({
        abc:'abc'
    })
    setTimeout(()=>{
        obj1.abc='abc....'
    },2000)
    return toRefs(obj1)
}

import { reactive,toRefs } from 'vue'
export default {
    setup(){
        // reactive 将 {name:'zhangsan',age:21} --> proxy({name:'zhangsan',age:21})
        const obj =  reactive({
            name:'zhangsan',
            age:22
        })
        setTimeout(()=>{
            console.log('xxx')
            obj.name = 'lisi'
            
            obj.age = 25
        },3000)
        //解构属性 const {name,age} = proxy({name:'zhangsan',age:21})  --> name='zhangsan'  age=21
        //const {name,age}  = obj

        //解构赋值 toRefs 将 proxy({name:'zhangsan',age:21}) --> proxy({name:proxy({value:'zhangsan'}),age:proxy({value:21})})
        // const {name,age}  = proxy({name:proxy({value:'zhangsan'}),age:proxy({value:21})})
        // name = proxy({value:'zhangsan'}) 和 age = proxy({value:21})
        const {name ,age}  =  toRefs(obj)

        const {abc} = demo()
        return {
            name,age,abc
        }
    }
}
</script>

<style>

</style>