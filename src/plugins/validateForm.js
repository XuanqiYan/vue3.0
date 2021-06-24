

export default {
    install:(app)=>{
        app.mixin({
            created(){
                //获取到组件中的 rules 属性 
                // this 是每一个组件的实例化对象
                if(!this.$options.rules) return 
                for( let key in this.$options.rules){
                    let item = this.$options.rules[key]
                    //key 验证属性名称，也等于变量名称
                    this.$watch(key,(value)=>{
                        if(!item.validate(value)){ 
                            console.log(item.message)
                        }
                    },{
                        immediate:true
                    })
                    
                }
            }
            
        })
    }
}