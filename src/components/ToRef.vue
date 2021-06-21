<template>
  <h1>ToRef</h1>
  <p>{{name}} -- {{age}}</p>
</template>

<script>
import { reactive, toRefs , toRef} from '@vue/reactivity'
export default {
    setup(){
        const obj = reactive({name:'zhangsan'})

        //name = proxy({value:'zhangsan'}) 
        let {name} = toRefs(obj)

        /*
            obj = proxy({age:proxy({value:undefined})},name:proxy({value:'zhangsan'}))
            age = proxy({value:undefined})  
        */
        //针对对象中单个属性， 让这个对象拥有这个属性的响应式，即使这个属性目前不存在于对象内
        let age = toRef(obj,'age')

        console.log(age)
        setTimeout(()=>{
            //name ='lisi' //no 
            //name.value = 'lisi' //ok
            obj.name ='lisi' //ok
            obj.age = 25  //  
        },10000)
        return {
            name,age
        }
    }
}
</script>

<style>

</style>