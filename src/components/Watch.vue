<template>
    <h1>Watch</h1>
    <p>{{name}} -- {{age}}  --{{classid}}</p>
    <input type="text" v-model='name'>
    <input type="text" v-model='age'>
    <input type="text" v-model='classid'>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
    setup(){
        // data methods 生命周期  computed  wtach
        //ref 响应式对象
        const name = ref('zhangsan')
        /*
            1.lazy 具备的惰性 ，初始化的时候并没有执行watch 监听
            2.immediate:true 取消惰性
            3.回调函数中可以获取现在的值和之前的值
        */
    //ref
        watch(name,(currentValue,oldValue)=>{
            //console.log(currentValue,oldValue)
        },{
            immediate:true
        })

        const obj  = reactive({
            age:21,
            classid:'h5'
        
        })
        
    //reactive  监听单个属性
        // watch( ()=> obj.age ,(currentValue,oldValue)=>{
        //     console.log('age:',currentValue,oldValue)
        // })
       
    //reactive  监听多个属性
        watch([
            ()=>obj.classid,
            ()=>obj.age
        ],([currentClassid,currentAge],[oldClassid,oldAge])=>{
            console.log('classid:',currentClassid,oldClassid)
            console.log('age:',currentAge,oldAge) 
        })
        //age he  obj.age 同时直向同一个对象 proxy({value:21})
        const {age,classid} = toRefs(obj)
        // watch( age ,(currentValue,oldValue)=>{
        //     console.log('-->2',currentValue,oldValue)
        // })


        return {
            name,
            age,
            classid
        } 
    }

}
</script>

<style>

</style>