<template>
  <div
    class="x-loading"
    v-show="show"
  >
    <f-svg/>
  </div>
</template>

<script>
import FSvg from './svg'
export default {
  name: 'FLoading',
  data () {
    return {
      show: false
    }
  },
  components: {
    FSvg
  }
}
</script>

<style>

</style>
