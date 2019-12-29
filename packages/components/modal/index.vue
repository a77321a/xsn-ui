<template>
  <div
    class="relative"
  >
    <mask-layer
      v-show="open"
      @click="_close"
    />
    <div
      ref="modal"
      class="modal"
      :class="[wrapperClass, 'modal-' + position]"
    >
      <div class="border-bottom-default toolbar">
        <div class="toolbar-title text-left">
          {{ title }}
        </div>
        <f-btn
          icon="close"
          class="cursor-pointer"
          flip
          round
          size="md"
          @click="_close"
        />
      </div>
      <div
        class="modal-body"
        :class="contentClass"
        :style="{
          height: height ? height : '',
          width: width ? width : ''
        }"
      >
        <slot name="body"></slot>
      </div>

      <div
        v-if="$scopedSlots.footer"
        class="absolute-bottom"
      >
        <div
          class="toolbar border-top-default"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import MaskLayer from './masklayer'
export default {
  name: 'FModal',
  components: {
    MaskLayer,
  },
  props: {
    value: {
      type: Boolean,
      default () {
        return false
      }
    },
    title: {
      type: String,
      default () {
        return ''
      }
    },
    height: {
      type: String,
      default () {
        return ''
      }
    },
    width: {
      type: String,
      default () {
        return ''
      }
    },
    position: {
      type: String,
      default () {
        return 'middle'
      },
      validator: value => {return ['middle', 'left', 'right', 'top', 'bottom'].indexOf(value) > -1}
    },
    wrapperClass: {
      type: String,
      default () {
        return ''
      }
    },
    contentClass: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      open: this.value
    }
  },
  watch: {
    value (val, oldVal) {
      this.open = val
    },
    open (val, oldVal) {
      this.toggle(val)
    }
  },
  methods: {
    _close () {
      this.open = false
      this.$emit('input', this.open)
    },
    toggle (val) {
      if (this.position === 'left') {
        this.$refs.modal.style.transform = val ? 'translateX(0px)' : 'translateX(-100%)'
      } else if (this.position === 'right') {
        this.$refs.modal.style.transform = val ? 'translateX(0px)' : 'translateX(100%)'
      } else if (this.position === 'top') {
        this.$refs.modal.style.transform = val ? 'translateY(0px)' : 'translateY(-100%)'
      } else if (this.position === 'bottom') {
        this.$refs.modal.style.transform = val ? 'translateY(0px)' : 'translateY(100%)'
      } else {
        this.$refs.modal.style.display = val ? 'block' : 'none'
      }
    }
  }
}
</script>

<style>
</style>
