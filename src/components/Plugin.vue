<template>
    <h1>定义插件</h1>
    <p>{{name}} --- {{age}}</p>
    <input type="text" v-model="name">
    <input type="text" v-model="age">
</template>

<script>
// 希望定义一个插件 plugin 解决 项目中表单的属性验证
import { ref } from '@vue/reactivity'

export default {
   
    //定义name 和 age的 格式检查
    rules:{
        name:{
            validate:(name)=> name.length  > 4 ,
            message:'name字段长度至少是4个'
        },
        age:{
            validate:(age)=> age > 18 ,
            message:'age至少18'
        }
    },
    setup(){
        const name = ref('zhangsan') 
        const age  = ref(21)   
        return{
            // ref    
            name,age
        }
    }
}
</script>

<style>

</style>