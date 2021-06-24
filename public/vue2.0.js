//重新渲染组件
// function updateView(){
//     console.log('重新渲染模板')
// }
const  obj = {
    name:'zhangsan',
    age:21,
    a:{b:1,c:{d:'1'}}
}

function defineReactive  (target,key,oldValue){
    reactive(oldValue)
    Object.defineProperty(target,key,{
        get(){
            console.log('get :',key)
            return oldValue
        },
        set(value){
            console.log(`set ${key}  属性：`,value)
            reactive(value)
            oldValue = value
            updateView()
        }
    }) 
}

//响应式监听 数据
function reactive(target){
    if( typeof target !== 'object' || target ==null ) return 
    
    if(Array.isArray(target)) return 

    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

reactive(obj)
// obj.a.b = 2
// obj.name='lisi'
// obj.a.b.c=10
// obj.aa='123'
obj.name={xx:'oo'}
obj.name.xx='32131'
console.log(obj)




