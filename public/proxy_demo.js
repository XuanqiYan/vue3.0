
const data = {
    name:'zhangsan',
    address:{
        city:'beijing',
        code:10010
    }
}


const proxyData = new Proxy(data,{
    //target 原始数据  key 属性名  reaciver proxyData
    get(target,key,receiver){  
        const result =  Reflect.get(target,key,receiver)
        console.log(`get :${key}  : ${result}`)
        return result
    },
    set(target,key,value,receiver){
       const result =  Reflect.set(target,key,value,receiver)
       console.log(`set :${key}  : ${result}`)
       return result
    },
    deleteProperty(target,key){
        const result = Reflect.deleteProperty(target,key)
        console.log(`delete :${key}  : ${result}`)
        return result
    }
})

// proxyData.name = 'lisi'
// proxyData.age= 21
//delete proxyData.name

