
//重写数组原型方法 push + 通知视图更新

//Array.prototype 和 arr.__proto__ 同时都指向原型对象
// 创建新对象，并且让对象原型指向于Array.prototype ,在扩展新的方法不会影响原型方法
const arrProto = Object.create(Array.prototype);

['push','pop'].forEach(methodName =>{
    arrProto[methodName] = function(){
        // 调用本来的方法执行数组的操作
        Array.prototype[methodName].call(this,...arguments)
        // 通知视图更新  
        console.log('更新试图')   
    }
})



function defineReactive  (target,key,oldValue){
    reactive(oldValue)
    Object.defineProperty(target,key,{
        get(){
            console.log('get :',key)
            return oldValue //target[key]
        },
        set(value){
            reactive(value)
            console.log(`set ${key}  属性：`,value) 
            oldValue = value
        }
    }) 
}

//响应式监听 数据
function reactive(target){
    
    if( typeof target !== 'object' || target ==null ) return 
    
    if(Array.isArray(target)) {
        target.__proto__ = arrProto
        return 
    }

    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

const  obj = {
    name:'zhangsan',
    age:21,
    address:{
        city:'beijing',
        code:'10010',
        demo:'xxx'
    },
    nums:[1,2,3]

}

reactive(obj)






