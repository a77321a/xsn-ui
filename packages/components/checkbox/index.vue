<template>
  <span
    class="cursor-pointer inline-block"
    :class="disabled ? 'disabled' : ''"
    style="white-space:nowrap"
    @click.stop="_select"
    @mousemove="unCheckedColor = color"
    @mouseleave="unCheckedColor = 'faded'"
  >
    <x-icon
      v-if="showIcon"
      :name="checked ? checkedIcon : unCheckedIcon"
      :color="checked ? color : unCheckedColor"
      :size="size"
      class="cursor-pointer text-bold"
    />
    <template v-if="label">
      <span :class="checked && !showIcon ? 'no-icon-checked' : ''">{{
        label
      }}</span>
    </template>
  </span>
</template>

<script>
import { contain, objectIsEqual } from '../../utils/function';
export default {
  name: 'XCheckbox',
  props: {
    value: {
      required: true,
      type: Array,
      default () {
        return []
      }
    },
    showIcon: {
      type: Boolean,
      default () {
        return true
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    val: {
      required: true,
      type: String
    },
    checkedIcon: {
      type: String,
      default () {
        return 'tick';
      }
    },
    unCheckedIcon: {
      type: String,
      default () {
        return 'checkbox';
      }
    },
    color: {
      type: String,
      default () {
        return 'blue';
      }
    },
    size: {
      type: String,
      default () {
        return '12px';
      }
    },
    label: {
      required: true,
      type: String,
      default () {
        return '';
      }
    }
  },
  data () {
    return {
      checked: contain(this.value, this.val),
      unCheckedColor: 'faded'
    }
  },
  watch: {
    value: {
      deep: true,
      handler (val, oldVal) {
        this.checked = contain(this.value, this.val)
      }
    }
  },
  methods: {
    _select () {
      if (this.disabled) {
        return
      }
      this.checked = !this.checked
      let res = this.value
      if (this.checked) {
        res.push(this.val)
      } else {
        let index = null
        res.forEach((item, idx) => {
          if (item === this.val || objectIsEqual(item, this.val)) {
            index = idx
          }
        })
        if (index !== null) {
          res.splice(index, 1)
        }
      }
      this.$emit('input', res)
      this.$emit('click')
    }
  }
}
</script>

<style></style>
