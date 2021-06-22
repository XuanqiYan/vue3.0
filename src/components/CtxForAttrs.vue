<template>
    <div>
        <h1 >Attrs</h1>
        <h1 >no-props</h1>
    </div>
</template>

<script>
export default {
    inheritAttrs:false,
    //props:['name'], 
    setup(props,{attrs}){
        /*
            1. attrs 接受no-props属性，不声明props属性就是no-props
            2. 这些属性都会默认拷贝到子模板的最外层dom节点上，如果不存在在外层节点，不拷贝了 
              也可以使用 inheritAttrs:false, 拒绝拷贝到最外层节点
            3. v-bind='$attrs' 手动绑定到某个dom节点上
            4. 指定单独的属性绑定 v-bind:name='attrs.name'
        */
        console.log('attrs:',attrs.name)
       
        return {
            attrs   
        }
    }
}
</script>

<style>

</style>