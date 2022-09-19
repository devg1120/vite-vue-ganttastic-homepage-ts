<template>
  <prism v-bind="$props" id="prism">
    <slot/>
  </prism>
</template>

<script>
//import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  components:{
    Prism
  },
  props:{
    ...Prism.props
  }
}
</script>

<style scoped>
  #prism >>> code {
    width: 100% !important;
    padding-bottom: 5px;
  }
  @media only screen and (max-width: 600px) {
  #prism >>> * {
    font-size: 0.65em;
  }
}
</style>
