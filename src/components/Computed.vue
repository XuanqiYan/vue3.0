<template>
    <h1>计算属性</h1>
    <p>原始值：{{count}} --- 计算属性:{{dubleCount}}</p>
    <button @click='count++'>increment</button>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
export default {
   setup(){
        const count =ref(10)
        // const dubleCount  = computed(()=>{
        //     return count.value*2
        // })  
        
        // 计算属性相当于被ref封装的响应式对象
        const dubleCount = computed({
            get:()=>{
                console.log('----------->','重新计算')
                return count.value*2
            },
            set:(newValue)=>{
                console.log('-->',newValue)
                count.value= newValue
            }
        })

        setTimeout(()=>{
            dubleCount.value=100
        },5000)
        return {
           count,
           dubleCount
        }
   }
}
</script>

<style>

</style>