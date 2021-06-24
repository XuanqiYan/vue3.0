<template>
    <h1>异步加载组件的loading状态</h1> 
    <suspense>
        <template #default>
            <AsyncChild />
        </template>
        <template #fallback>
            <div>
                Loading...
            </div>
        </template>    
    </suspense>     
</template>

<script>
import AsyncChild from './AsyncChild.vue'
import {onErrorCaptured} from 'vue'
export default {
    components:{AsyncChild} ,
    setup(){
        onErrorCaptured((err)=>{
            console.log('错误信息:',err.message)
        })
        return {}
    }   

}
</script>

<style>

</style>