<template>
  <div class="hello">
    <ReadOnly />
  </div>
</template>

<script>
import Setup from './Setup.vue'
import RefAndReactive from './RefAndReactive.vue'
import ToRefs from './ToRefs.vue'
import ToRef from './ToRef.vue'
import ReadOnly from './ReadOnly.vue'
export default {
  name: 'HelloWorld',
  components:{
    Setup,
    RefAndReactive,
    ToRefs,
    ToRef,
    ReadOnly
  },
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">

</style>
