<template>
  <div>
    <Computed />
  </div>
</template>

<script>
import Setup from './Setup.vue'
import RefAndReactive from './RefAndReactive.vue'
import ToRefs from './ToRefs.vue'
import ToRef from './ToRef.vue'
import ReadOnly from './ReadOnly.vue'
import Context from './Context.vue'
import TodoList from './TodoList.vue'
import Computed from './Computed.vue'
export default {
  name: 'HelloWorld',
  components:{
    Setup,
    RefAndReactive,
    ToRefs,
    ToRef,
    ReadOnly,
    Context,
    TodoList,
    Computed
  },
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">

</style>
