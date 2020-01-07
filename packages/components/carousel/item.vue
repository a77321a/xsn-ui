<template>
  <div
    class="f-carousel-item"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FCarouselItem',
  props: {
    imgSrc: {
      type: String,
      default () {
        return ''
      }
    }
  },
  computed: {
    style () {
      if (this.imgSrc) {
        return {
          backgroundImage: `url(${this.imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: '50%'
        }
      }
    }
  },
}
</script>

<style>

</style>
