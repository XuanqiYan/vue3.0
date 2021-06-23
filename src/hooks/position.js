import { reactive, toRefs , onMounted, onUnmounted } from 'vue'

export const  getPosition = ()=>{
    const position = reactive({
        x:0,
        y:0
    })
    const setMousePosition = (e)=>{
        console.log('-----》获取鼠标坐标')
        position.x =  e.pageX
        position.y =  e.pageY
    }
    // const timer = setInterval(()=>{
    //     console.log('定时器执行')
    // },1000)
    //组件在挂在完毕后添加点击事件
    onMounted(()=>{
        document.addEventListener('click',setMousePosition)
    })

    //取消监听事件 必须要写 以防内存泄漏 
    onUnmounted(()=>{
        document.removeEventListener('click',setMousePosition)
        //clearInterval(timer)
    })

    return {
        ...toRefs(position)
    }
}