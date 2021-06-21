<template>
    <h1>setup详解</h1>
    <p>{{name}}--{{age}}</p>
    <button @click='changeAge'>change  Age</button>
    <button @click='changeName'>change Name</button>
    <button @click='test'>调用setup中的test1</button>
</template>

<script>
/*
    1.setup 取代了 beforeCreate 和 create 生命周期钩子 
    2.不可以使用this,默认指向undefined
    3.setup中定义的数据 方法 必须return  ，如果不return  不能在模板中直接使用
    4.setup中没有办法直接调用外部的方法, 外部的方法 是可以直接通过this.$options.setup() 访问setup中return 的内容的
    5.执行 setup 时，组件实例尚未被创建。因此，你只能访问以下 property：
            props
            attrs
            slots
            emit
            换句话说，你将无法访问以下组件选项：
            data
            computed
            methods
    
*/
import {getCurrentInstance} from 'vue'
export default {
    data(){
        return {
            age:21// vue2.0  响应式  
        }
    },
    setup(){
        let name = 'zhangsan'  // 不是响应式
        const changeName = ()=>{
            name='lisi'
        }
        const test1 = ()=>{
            console.log(name)
        }
        const _this = getCurrentInstance()
        //_this.type.methods.changeAge()
        return {
            name,
            changeName,test1
        }
    },
    methods:{
        test(){   
            console.log(this.$options.setup().test1())
        },
        changeAge(){
            this.age = 22
        }
    }

}
</script>

<style>

</style>