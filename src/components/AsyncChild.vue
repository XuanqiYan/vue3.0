<template>
    <img :src="data.message" >
</template>

<script>
export default {
    // setup(){
    //     // 必须返回一个promise 对象
    //     return new Promise((resolve,reject)=>{
    //         //模拟真实的网络请求的延迟
    //         setTimeout(()=>{
    //             resolve({
    //                 result:'ok'
    //             })
    //         },3000)
    //     })
    // }

    async setup(){
        const url = "https://dog.ceo/api/breeds/image/random"
        const response =  await fetch(url)
        const data =  await response.json()
        if(data.code==404){
            throw new Error({message:"服务器错误"})
        }
        return {
            data
        }
    }

}
</script>

<style>

</style>