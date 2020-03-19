<template>
  <div class="x-carousel-item" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XCarouselItem',
  props: {
    imgSrc: {
      type: String,
      default () {
        return '';
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
  }
}
</script>

<style></style>
