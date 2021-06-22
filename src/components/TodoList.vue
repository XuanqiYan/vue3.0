<template>
    <h1>TodoList</h1>
    <header class='header'>
        <input type='text' :value='inputValue'  ref='tagInp'/>
        <button  @click='AddTodo'>Add</button>
    </header>
    <ul>
        <li v-for='(item,index) in todos' :key='index'>{{item.name}}</li>
    </ul>

   
</template>

<script>

import Todo from '@/hooks/todo.js'
export default {
    setup(){
        return {
           ...Todo()
        }
    }
}
</script>

<style>
.header{
    width:500px;
    margin:0 auto;
}
</style>