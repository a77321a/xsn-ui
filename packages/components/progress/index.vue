<template>
  <div>
    <div class="f-progress inline-block" :style="{width: width}">
      <div
        class="f-progress-active text-right"
        :class="'bg-' + color"
        :style="{
          width: percentage + '%'
        }"
      >
      </div>
    </div>
    <span
      v-if="showLabel"
      class="f-progress-label"
    >
      {{percentage + '%'}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'FProgress',
  props: {
    percentage: {
      required: true,
      type: Number,
      default () {
        return 0 // 0 - 100
      },
      validator: value => {return value >= 0 && value <= 100}
    },
    color: {
      type: String,
      default () {
        return 'primary'
      }
    },
    width: {
      type: String,
      default () {
        return '150px'
      }
    },
    showLabel: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style>
</style>
