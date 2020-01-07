<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors:
 * @LastEditTime: 2020-01-06 16:06:03
 -->
<template>
  <button
    class="x-btn"
    :disabled="buttonDisabled || loading"
    :type="type"
    :class="[
      type ? 'x-btn--' + type : '',
      buttonSize ? 'x-btn--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-round': round,
        'is-circle': circle,
        'is-long': long
      }
      ]"
    @click.stop="handleClick"
    v-loading="loading"
  >
    <x-icon v-if="icon" :name="icon" size="inherit" style="color: inherit" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'XBtn',
  props: {
    long: Boolean,
    size: {
      type: String
      // default () {
      //   return 'medium'
      // }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    },
    type: {
      type: String,
      default() {
        return 'default'
      }
    },
    textColor: {
      type: String,
      default() {
        return 'white'
      }
    },
    round: {
      type: Boolean,
      default() {
        return false
      }
    },
    loading: {
      type: Boolean,
      default() {
        return false
      }
    },
    circle: Boolean,
    icon: {
      type: String,
      default() {
        return ''
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    buttonSize() {
      return this.size
    },
    buttonDisabled() {
      return this.disabled
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
