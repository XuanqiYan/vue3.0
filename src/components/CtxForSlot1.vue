<template>
</template>

<script>
import { h } from 'vue'
/*
   
    vNode --> 虚拟dom ,用js来描述真实dom的对象
    模板编译 --> 使用h函数 将模板中的真实的dom 转化成虚拟dom的过程， 得到就是虚拟dom
    <div a=1 b=2 >
       <span>xxxx</span>
       <span>xxxx</span>
    </div> 

    //js 方式描述真实dom
    h("div",{a:1,b:2},[ 
        h('span',{},['xxxx']),
        h('span',{},['xxxx']) 
    ])  返回的就是虚拟 dom 
    
    第一次组件过程：
        // h 函数的本质是createElement 函数，这个函数的作用就是生成虚拟dom 叫做VNode
        // render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上
        // template模版 解析  
            --> 解析成 render 函数
            --> render函数 调用h函数 
            --> h函数返回虚拟dom
            --> 生成真实dom 
            --> 展示到页面上

    //在线编译工具
    vue3.0  ：https://vue-next-template-explorer.netlify.app/
    vue2.0  ：https://template-explorer.vuejs.org/
        
*/
export default {
    props:['level'],
    setup(props,{slots}){
        const S_VNode = slots.default() // default() 返回虚拟dom 

        const vNode =  h("div",{a:1,b:2},[ 
           h(`h${props.level}`,{},[S_VNode]),
           h('span',{},['xxxx']) 
        ])

        return ()=> vNode
    }
}


</script>

<style>

</style>