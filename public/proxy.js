const data = {
    name:'zhangsan',
    address:{
        city:'beijing',
        code:10010
    },
    nums:[1,2,3]
}
const nums =[1,2,3]



function reactive(target){
    if(typeof target !=='object' || target ==null) return 
    //针对数组
    const proxyArray = {
        get: function (target, key, receiver) {
            console.log('get的key为 ===>' + key);
            return Reflect.get(target, key, receiver);
        },
        set(target, key, value, receiver){
            console.log('set的key为 ===>' + key, value);
            return Reflect.set(target, key, value, receiver);
        }
    }

    const proxyConfig = {
        get(target,key,receiver){
           
            //只监听自身的对象上的属性
            const ownKeys = Reflect.ownKeys(target)
            if(!ownKeys.includes(key)) return 
            const result =  Reflect.get(target,key,receiver)
            console.log(`get :${key}  : ${result}`)
            //return reactive(result) //result
            return result
        },
        //新增 改值
        set(target,key,value,receiver){
            let result = null
            const ownKeys = Reflect.ownKeys(target)
            if(ownKeys.includes(key)){
                //修改
                if(value == target[key]) return
                result =  Reflect.set(target,key,value,receiver)
                console.log(`set :${key}  : ${result}`)
            }else{
                //新增
                result =  Reflect.set(target,key,value,receiver)
                console.log(`add :${key}  : ${result}`)
            }
          
            return result
        },
        deleteProperty(target,key){
            const result = Reflect.deleteProperty(target,key)
            console.log(`delete :${key}  : ${result}`)
            return result
        } 
    }

    let config = null
    if(Array.isArray(target)){
        config = proxyArray
    }else{
        config = proxyConfig
    }
   

    const proxyData =  new Proxy(target,config)

    return proxyData
}

const proxyData = reactive(data)