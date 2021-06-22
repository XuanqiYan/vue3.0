import { reactive, ref } from '@vue/reactivity'
export default ()=>{
    const todos = reactive([
        {
            name:'zhangsan',
            completed:false
        } 
    ])

    const tagInp = ref(null)
    const inputValue = ref('nice') 
    const AddTodo = ()=>{
        const _value = tagInp.value.value
        if(!_value) return 
        todos.push({name:_value,completed:false})
        inputValue.value=''
    }
    return {
        todos,
        tagInp,
        AddTodo,
        inputValue
    }
}