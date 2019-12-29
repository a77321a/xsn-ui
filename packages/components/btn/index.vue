<template>
  <button
    class="x-btn f-focusable"
    :disabled="buttonDisabled || loading"
    :class="_btnClass"
    @click.stop="_click"
    v-loading="loading"
  >
    <div class="f-focus-helper"></div>
    <x-icon v-if="icon" :name="icon" size="inherit" style="color: inherit" />
    <slot></slot>
    <template v-if="label">{{ label }}</template>
  </button>
</template>

<script>
export default {
  name: 'XBtn',
  props: {
    size: {
      type: String,
      default () {
        return 'md'
      }
    },
    label: {
      type: String,
      default () {
        return ''
      }
    },
    bgColor: {
      type: String,
      default () {
        return 'primary'
      }
    },
    textColor: {
      type: String,
      default () {
        return 'white'
      }
    },
    round: {
      type: Boolean,
      default () {
        return false
      }
    },
    flip: {
      type: Boolean,
      default () {
        return false
      }
    },
    loading: {
      type: Boolean,
      default () {
        return false
      }
    },
    icon: {
      type: String,
      default () {
        return ''
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  computed: {
    _btnClass () {
      let arr = []
      if (this.flip) {
        arr.push('bg-white')
        arr.push(
          this.textColor === 'white' ? 'text-black' : 'text-' + this.textColor
        )
      } else {
        arr.push('bg-' + this.bgColor)
      }
      if (this.textColor) {
        arr.push('text-' + this.textColor)
      }

      if (this.round) {
        arr.push('f-btn-round')
      }
      arr.push('f-btn-' + this.size)
      return arr
    },
    buttonDisabled () {
      return this.disabled
    }
  },
  methods: {
    _click () {
      this.$emit('click')
    }
  }
}
</script>

<style>
</style>
