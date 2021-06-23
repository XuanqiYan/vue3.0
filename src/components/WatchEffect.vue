<template>
    <h1>WatchEffect (副作用)</h1>
    <p>name ： {{name}} --- age : {{age}}</p>
    <input type="text" v-model="name">
    <input type="text" v-model="age">
    <button @click='changeTitle'>change title</button>
</template>

<script>
import { reactive, ref, toRef } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
/*
    纯函数:由固定输入就会有固定输出
    副作用：没有固定输出这个函数就是有副作用
    const time = ()=>{
        return axios.get('/api')
        return new Date()
    }
*/
export default {
    //setup 只执行一次
    setup(){
        const age = ref(21)
        const obj = reactive({name:'zhangsan'})
        const name = toRef(obj,'name')
        /*
            1.没有惰性，在组件初次渲染的时候就会执行
            2.watchEffect 自动检测内部的属性，收集依赖
            3.只能获取到当前值
            4.5000ms 以后取消监听 可以借助stop变量来取消监听，wtach和 watchEffect都可以取消
        */
        const stop = watchEffect(()=>{
            //console.log('abc')
            console.log("name:",name.value)
            setTimeout(()=>{
                stop()
            },5000)
            //console.log('age：',age.value)    
        })
        const tit = ref('abc')
        const changeTitle = ()=>{
            tit.value +='nice~'   
        }

        watchEffect(()=>{
            document.title = tit.value
        })
        return {
            name,age,
            changeTitle
        }
    }
}
</script>

<style>

</style>