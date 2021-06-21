<template>
    <p>Child 组件</p>
    <p>子组件 name ： -->{{name}}</p>   
    <button @click='handleClick'>change Name IN Child</button>
</template>

<script>
import {inject} from 'vue'
export default {
    
    setup(props,{emit}){
        const name = inject('name')
       
        const handleClick = ()=>{
           // name.value = 'lisi'// readonly 的属性
           // 事件触发 让父组件改变值 ，这才符合单向数据流的规范
           emit('chanName','老王八')
        }
        return {
            handleClick,
            name
        }
    }
}
</script>

<style>

</style>