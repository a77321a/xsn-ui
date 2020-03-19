<template>
  <div class="x-datepicker">
    <x-input
      v-model="model"
      :placeholder="placeholder"
      :disabled="disabled"
      :border="border"
      readonly
      :after="{
        icon: isShowPopover ? 'upward' : 'down',
        handler() {
          _toggleShowPopover;
        }
      }"
    />
    <x-popover
      v-if="!disabled"
      v-model="isShowPopover"
      style="min-width: 210px"
    >
      <date-picker
        v-model="model"
        @input="_emit"
        :min="min"
        :max="max"
        :format="format"
      />
    </x-popover>
  </div>
</template>

<script>
import DatePicker from './date';
import { date } from '../../utils/date';
export default {
  name: 'XDatepicker',
  components: {
    DatePicker
  },
  props: {
    value: {
      type: String | Date,
      default () {
        return '';
      }
    },
    placeholder: {
      type: String,
      default: '请选择日期'
    },
    disabled: {
      type: Boolean,
      default: false
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
    min: {
      type: String,
      default: ''
    },
    max: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    }
  },
  data () {
    return {
      model: '',
      isShowPopover: false
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val, oldVal) {
        if (val !== '') {
          this.model = date.format(val, this.format)
        } else {
          this.model = date.format(Date.now(), this.format)
        }
      }
    }
  },
  methods: {
    _toggleShowPopover () {
      this.isShowPopover = !this.isShowPopover
    },
    _emit () {
      this.isShowPopover = false
      this.$emit('input', this.model)
    }
  }
}
</script>

<style></style>
