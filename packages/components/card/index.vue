<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-08 10:29:23
 -->
<template>
  <div class="x-card">
    <div v-if="$slots.header || header" class="x-card-head">
      <div>
        <slot name="header">{{ header }}</slot>
      </div>
      <slot v-if="$slots.header || header" name="right"></slot>
      <x-btn
        v-if="($slots.header || header) && showToggle"
        size="small"
        :icon="isShowBody ? 'arrowTop-fill' : 'arrowBottom'"
        circle
        @click="_toogleShowBody"
      />
    </div>
    <div class="x-card-body" :class="bodyClass" :style="bodyStyle" v-show="isShowBody">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XCard',
  props: {
    header: {},
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
    },
    drop: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      isShowBody: true
    }
  },
  computed: {
    showToggle () {
      return this.drop
    }
  },
  methods: {
    _toogleShowBody () {
      this.isShowBody = !this.isShowBody
    }
  }
}
</script>
