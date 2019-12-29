<template>
  <div class="f-card">
    <div class="toolbar">
      <div class="toolbar-title">
        {{title}}
      </div>
      <slot name="top-right"></slot>
      <f-btn
        :icon="isShowBody ? 'arrowTop-fill' : 'arrowBottom'"
        flip
        round
        class="ml-sm"
        @click="_toogleShowBody"
      />
    </div>
    <div
      class="f-card-body"
      :class="bodyClass"
      :style="bodyStyle"
      v-show="isShowBody"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FCard',
  props: {
    title: {
      type: String,
      default () {
        return ''
      }
    },
    bodyClass: {
      type: String,
      default () {
        return ''
      }
    },
    bodyStyle: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      isShowBody: true
    }
  },
  methods: {
    _toogleShowBody () {
      this.isShowBody = !this.isShowBody
    }
  }
}
</script>
