<template>
    <h1>ReadOnly</h1>
    <p>父组件: name --> {{name}}</p>
    <button @click='handleClick'>change Name In Farther</button>

    <Child @chanName='handleClick' />
</template>

<script>
import { ref ,readonly, reactive, provide} from 'vue'
import Child from './Child.vue'

export default {
    components:{Child},
    setup(){
        const name = ref('zhangsan')
        provide('name',readonly(name))
        const handleClick = (value)=>{ // mouseEvent '老王八'
           name.value = (typeof value === 'object' ? '小王八':value)
        }

        // const obj = readonly(reactive({
        //     age:21
        // }))
        // setTimeout(()=>{
        //     name.value ='lisi'
        //     //obj.age = 25
        // },2000)
        return {
            name,
            handleClick
        }
    }
}
</script>

<style>

</style>