<template>
    <h1>使用封装好的Hook 点击获取鼠标x,y坐标</h1>
    <p>{{x}}  --  {{y}}</p>
</template>

<script>

import {getPosition} from '@/hooks/position.js'
export default {
    setup(){
        const {x,y} = getPosition()
        return {
           x,y
        } 
    }
}
</script>

<style>

</style>