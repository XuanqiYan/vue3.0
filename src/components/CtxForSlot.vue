<template>
    <h1>slot</h1>
    <h1 v-if='level==1'><slot></slot></h1>
    <h2 v-if='level==2'><slot></slot></h2>
    <h3 v-if='level==3'><slot></slot></h3>
    <h4 v-if='level==4'><slot></slot></h4>
</template>

<script>
export default {
    props:['level'],
    setup(props,{slots}){
        return{

        }
    }
}
</script>

<style>

</style>