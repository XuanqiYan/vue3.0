<template>
  <div>
    <Directive v-if='flag' />
    <button @click='flag = !flag'>hidden</button>
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
import Watch from './Watch.vue'
import WatchEffect from './WatchEffect.vue'
import Hooks from './Hooks.vue'
import Directive from './Directive.vue'
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
    Computed,
    Watch,
    WatchEffect,
    Hooks,
    Directive
  },
  props: {
    msg: String
  },
  data(){
    return {
      flag:true
    }
  }
}
</script>


<style scoped lang="scss">

</style>
