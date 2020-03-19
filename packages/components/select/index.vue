<template>
  <div
    class="x-select"
    :class="[
      disabled ? 'disabled' : '',
      border === 'underline'
        ? 'border-bottom-default'
        : 'border-default border-radius',
      active ? 'hover' : ''
    ]"
  >
    <div v-if="mutiple && selection.length > 0" class="pt-sm pb-sm">
      <span
        v-for="(item, idx) in mutipleSelectedLabel"
        :key="'select_selected_opt_' + idx"
        class="selected-tip relative"
      >
        {{ item }}
        <x-icon
          name="close"
          size="12px"
          class="cursor-pointer"
          @click="_remove(idx)"
        />
      </span>
    </div>
    <x-input
      ref="input"
      v-model="inputValue"
      :disabled="disabled"
      :readonly="computedReadonly"
      :clearable="clearable"
      :border="border"
      :after="{
        icon: 'down'
      }"
      @input="_input"
      @focus="_focus"
      class="full-width no-border"
    />
    <x-popover v-if="!disabled" ref="popover" class="select-popover">
      <!-- no data msg -->
      <div
        v-if="opts.length === 0"
        class="text-center font-normal text-faded pt-md"
        style="min-height: 30px"
      >
        {{ noDataMsg }}
      </div>
      <ul v-if="opts.length > 0">
        <li
          v-for="(opt, idx) in opts"
          :key="'select_option_' + idx"
          @click.stop.prevent="_select(opt)"
          :class="mutiple ? 'no-padding' : 'pt-sm pb-sm pr-sm pl-sm'"
        >
          <x-checkbox
            v-if="mutiple"
            v-model="selection"
            :val="opt.value"
            :label="opt.label"
            class="fit inline-block text-ellipsis pt-sm pb-sm pr-sm pl-sm"
          />
          <template v-else>
            {{ opt.label }}
          </template>
        </li>
      </ul>
    </x-popover>
  </div>
</template>

<script>
import { debounce } from '../../utils/function';
export default {
  name: 'XSelect',
  props: {
    value: {
      type: String | Array,
      default () {
        return this.mutiple ? [] : '';
      }
    },
    options: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    clearable: {
      type: Boolean,
      default () {
        return false
      }
    },
    mutiple: {
      type: Boolean,
      default () {
        return false
      }
    },
    placeholder: {
      type: String,
      default () {
        return '请选择';
      }
    },
    filter: {
      type: Boolean,
      default () {
        return false
      }
    },
    autocomplete: {
      type: Boolean,
      default () {
        return false
      }
    },
    border: {
      type: String,
      default () {
        return 'outline';
      },
      validator: value => {
        return ['underline', 'outline'].indexOf(value) > -1
      }
    },
    noDataMsg: {
      type: String,
      default () {
        return '暂无数据';
      }
    }
  },
  data () {
    return {
      inputValue: '',
      selection: null,
      opts: [],
      focused: false,
      showAllOpts: true,
      active: false
    }
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler (val, oldVal) {
        this.selection = val
        if ((val === '' || val.length === 0) && !this.focused) {
          this.inputValue = '';
          return false
        } else {
          this._calcSelectLabel(val, this.options)
        }
      }
    },
    options: {
      deep: true,
      immediate: true,
      handler (val, oldVal) {
        this.opts = val
        if (
          (this.selection === '' || this.selection.length === 0) &&
          !this.focused
        ) {
          this.inputValue = '';
          return false
        } else {
          this._calcSelectLabel(this.selection, val)
        }
      }
    },
    mutipleSelectedLabel: {
      deep: true,
      handler (val, oldVal) {
        this.$refs.popover.resize()
      }
    }
  },
  computed: {
    mutipleSelectedLabel () {
      if (this.mutiple) {
        let res = []
        this.options.forEach(opt => {
          if (this.selection.indexOf(opt.value) > -1) {
            res.push(opt.label)
          }
        })
        return res
      }
    },
    computedReadonly () {
      return !(this.autocomplete || this.filter)
    }
  },
  methods: {
    _select (opt) {
      this.active = true
      this.focused = false
      if (!this.mutiple) {
        this.active = false
        this.selection = opt.value
        this.$refs.popover.hide()
      }
      this._calcSelectLabel(this.selection, this.options)
      this.showAllOpts = true
      this.$emit('input', this.selection)
      this.$emit('select', opt)
    },
    _input () {
      this.showAllOpts = true
      this.active = true
      if (this.filter && !this.disabled && !this.autocompele) {
        this._filter()
      }
      if (this.autocomplete) {
        let _self = this
        const emit = function () {
          _self.active = false
          _self.$emit('search', _self.inputValue)
        };
        debounce(emit())
      }
    },
    _focus () {
      this.active = true
      if (this.showAllOpts) {
        this.opts = this.options
      }
      this.focused = true
    },
    _calcSelectLabel (value, options) {
      if (this.mutiple) {
        this.inputValue = '';
      } else {
        options.forEach(opt => {
          if (value === opt.value) {
            this.inputValue = opt.label
          }
        })
      }
    },
    _filter () {
      if (!this.mutiple) {
        this.selection = '';
        this.$emit('input', this.selection)
        this.$emit('select', { label: '', value: '' })
      }
      if (this.inputValue === '') {
        this.opts = this.options
      } else {
        this.showAllOpts = false
        let res = []
        this.options.forEach(opt => {
          if (
            opt.label.includes(this.inputValue) ||
            opt.value.includes(this.inputValue)
          ) {
            res.push(opt)
          }
        })
        this.opts = res
      }
    },
    _remove (idx) {
      this.selection.splice(idx, 1)
    }
  }
}
</script>

<style></style>
