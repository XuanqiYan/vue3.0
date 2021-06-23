<template>
    <div v-pos:top='distance'   style='position:absolute' >
        <input type="text"  v-focus >
    </div>
    <button @click='changeDistance'>change distance</button>
   
    
</template>

<script>
import { onMounted, onUpdated, ref } from '@vue/runtime-core'
export default {
    //局部指令
    directives:{
        // focus:{
        //     mounted:(el)=>{
        //         el.focus()   
        //     }
        // },
        pos:{
            mounted:(el,binding)=>{
                el.style[binding.arg]=`${binding.value}px`
            },
            updated:(el,binding)=>{
                el.style[binding.arg]=`${binding.value}px`
            }
        }
    },
    setup(){
        const distance = ref(50)
        const changeDistance = ()=>{
            distance.value +=10
        }
        return {
            distance,changeDistance
        }

    // 自定义实现 input 的  foucs 
        // const inp = ref(null)
        // onMounted(()=>{
        //     console.log(inp.value)
        //     //inp.value.focus()
        // })
        // return {
        //     inp
        // }

    }    
}
</script>

<style>

</style>