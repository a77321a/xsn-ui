<template>
  <div class="row items-center text-left pb-md">
    <div
      class="inline-block float-left pr-md relative text-justify font-normal"
      :style="{
      width: labelWidth
    }"
    >
      {{label}}
      <span
        v-if="required"
        class="required"
      >
        *
      </span>
    </div>
    <div
      class="inline-block relative"
      :class="error ? 'error' : ''"
    >
      <slot></slot>
      <div
        v-if="error"
        class="absolute"
        style="font-size: 10px"
      >
        {{errorMsg}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FField',
  props: {
    label: {
      type: String,
      required: true,
      default () {
        return ''
      }
    },
    error: {
      type: Boolean,
      default () {
        return false
      }
    },
    errorMsg: {
      type: String,
      default () {
        return ''
      }
    },
    labelWidth: {
      type: String,
      default () {
        return '80px'
      }
    },
    required: {
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
