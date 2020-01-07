<template>
  <div
    ref="carousel"
    class="f-carousel"
    :style="{height: height}"
  >

    <div
      class="f-carousel-item-caontainer"
      :style="{
        transform: transform,
        transition: 'transform ease ' + transitionTime + 's'
      }"
    >
      <slot></slot>
    </div>

    <!-- left and right arrows -->
    <div class="f-carousel-prev">
      <x-icon
        name="return"
        size="24px"
        class="left-icon"
        @click="prev"
      />
    </div>

    <div class="f-carousel-next">
      <x-icon
        name="next"
        size="24px"
        class="right-icon"
        @click="next"
      />
    </div>

    <!-- end -->

    <!-- bottom controls -->
    <div class="f-carousel-controls">
      <span
        v-for="item in carouselItemLength"
        :key="'f_carousel_controls_item_' + item"
        class="f-carousel-controls-item"
        :class="item === index ? 'active' : ''"
        @click="jump(item)"
      >
        {{item}}
      </span>
    </div>
    <!-- end -->
  </div>
</template>

<script>
export default {
  name: 'FCarousel',
  props: {
    value: {
      type: Number,
      default () {
        return 1
      }
    },
    height: {
      type: String,
      default () {
        return '200px'
      }
    },
    duration: {
      type: Number,
      default () {
        return 3000
      }
    },
    autoplay: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      index: this.value,
      transitionTime: 0.3,
      interval: null
    }
  },
  watch: {
    value (val, oldVal) {
      this.index = val
    }
  },
  computed: {
    carouselItemLength () {
      let res = 0
      this.$slots.default.forEach(v => {
        if (v.tag !== undefined && v.tag.indexOf('FCarouselItem') > -1) {
          res += 1
        }
      })
      return res
    },
    transform () {
      return 'translateX(' + (-(this.index - 1)) * 100 + '%)'
    }
  },
  beforeMount () {
    if (this.autoplay) {
      let _self = this
      this.interval = setInterval(() => {
        _self.next()
      }, this.duration)
      this.interval
    }
  },
  destroyed () {
    if (this.autoplay) {
      clearInterval(this.interval)
    }
  },
  methods: {
    prev () {
      if (this.index === 1) {
        this.index = this.carouselItemLength
        this.transitionTime = 0.3 * this.carouselItemLength
      } else {
        this.index -= 1
        this.transitionTime = 0.3
      }
      this.$emit('input', this.index)
      this._reStartInterval()

    },
    next () {
      if (this.index === this.carouselItemLength) {
        this.index = 1
        this.transitionTime = 0.3 * this.carouselItemLength
      } else {
        this.index += 1
        this.transitionTime = 0.3
      }
      this.$emit('input', this.index)
      this._reStartInterval()

    },
    jump (idx) {
      this.transitionTime = 0.3 * Math.abs(idx - this.index)

      this.index = idx
      this._reStartInterval()

    },
    _reStartInterval () {
      if (this.autoplay) {
        let _self = this
        clearInterval(_self.interval)
        this.interval = setInterval(() => {
          _self.next()
        }, this.duration)
      }
    }
  }
}
</script>

<style>
</style>
