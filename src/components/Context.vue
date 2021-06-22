<template>
    <h1>Context</h1>
    <!-- attrs -->
    <CtxForAttrs style='background-color:red' name='zhangsan' />

    <!-- slot -->
    <!-- <CtxForSlot :level='level'>
        <p>nice</p>
    </CtxForSlot> -->

    <CtxForSlot1 :level='level'>
        <p>nice</p>
    </CtxForSlot1>


</template>

<script>
import { reactive, ref , toRefs , toRef} from '@vue/reactivity'
import CtxForAttrs from './CtxForAttrs.vue'
import CtxForSlot from './CtxForSlot.vue'
import CtxForSlot1 from './CtxForSlot1.vue'
export default {
    components:{CtxForAttrs ,CtxForSlot,CtxForSlot1},
    setup(props){
        const level = ref(2)
        return {
            level
            
        }
    }
}
</script>

<style>

</style>