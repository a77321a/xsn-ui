<template>
  <div class="mask-layer" @click="_click"></div>
</template>

<script>
export default {
  name: 'MaskLayer',
  methods: {
    _click () {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
