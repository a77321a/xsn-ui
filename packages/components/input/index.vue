<template>
  <div
    class="x-input"
    :class="[
      border === 'underline'
        ? 'border-bottom-default'
        : 'border-default border-radius',
      disabled ? 'disabled' : '',
      active ? 'hover' : ''
    ]"
  >
    <template v-if="type !== 'textarea'">
      <input
        ref="input"
        :type="type"
        :class="disabled ? 'disabled' : ''"
        v-model="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :min="min"
        :max="max"
        autocomplete="off"
        @input="_input"
        @change="_change"
        @focus="_focus"
        @blur="_blur"
        @keyup="_keyup"
        @keydown.enter="_enter"
      />
      <div v-if="clearable || after" class="absolute-right row items-center flex-center pr-sm">
        <x-icon
          v-if="clearable"
          v-show="inputValue != ''"
          name="close"
          size="12px"
          @click="_clear"
          circle
        />
        <x-icon
          v-if="after"
          :name="after.icon"
          size="12px"
          @click="_afterHandler(after.handler)"
          class="cursor-pointer"
        />
      </div>
    </template>

    <template v-else>
      <textarea
        rows="3"
        :class="disabled ? 'disabled' : ''"
        v-model="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        autocomplete="off"
        @input="_input"
        @change="_change"
        @focus="_focus"
        @blur="_blur"
        @keyup="_keyup"
        @keydown.enter="_enter"
      ></textarea>
    </template>
  </div>
  <!-- <form>
    <div class="hp-row">
      <input type="text" required="required">
      <span class="bar"></span>
      <label>身份证号</label>
    </div>
    <button type="submit" class="btn btn-submit">submit</button>
  </form>-->
</template>

<script>
export default {
  name: 'XInput',
  props: {
    value: {
      type: Number | String,
      default () {
        return ''
      }
    },
    placeholder: {
      type: String,
      default () {
        return '请输入'
      }
    },
    after: {
      type: Object,
      default () {
        return null
      }
    },
    type: {
      type: String,
      default () {
        return 'text' // text or number
      },
      validator: value => {
        return ['text', 'number', 'textarea'].indexOf(value) > -1
      }
    },
    min: {
      type: Number,
      default () {
        return null
      }
    },
    max: {
      type: Number,
      default () {
        return null
      }
    },
    border: {
      type: String,
      default () {
        return 'outline'
      },
      validator: value => {
        return ['underline', 'outline'].indexOf(value) > -1
      }
    },
    clearable: {
      type: Boolean,
      default () {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    readonly: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      inputValue: this.value,
      active: false
    }
  },
  watch: {
    value (val, oldVal) {
      this.inputValue = val
    }
  },
  methods: {
    _input () {
      this.$emit('input', this.inputValue)
    },
    _change () {
      this.$emit('change')
    },
    _focus () {
      this.active = true
      if (this.inputValue && !this.readonly && !this.disabled) {
        this.$refs.input.select()
      }
      this.$emit('focus')
    },
    _blur () {
      this.active = false
      this.$emit('blur')
    },
    _enter () {
      this.$emit('enter', this.inputValue)
    },
    _clear () {
      this.inputValue = ''
      this._input()
      this.$emit('clear')
    },
    _keyup () {
      if (this.type === 'number' && this.inputValue !== '') {
        if (this.min && this.inputValue < this.min) {
          this.inputValue = this.min
        }
        if (this.min && this.inputValue > this.max) {
          this.inputValue = this.max
        }
        this.$emit('input', this.inputValue)
      }
    },
    _afterHandler (handler) {
      if (handler) {
        handler()
      }
    }
  }
}
</script>

<style>
/* .hp-row {
  margin: 45px;
  position: relative;
}
.hp-row input {
  border: none;
  border-bottom: 1px solid #c6c6c6;
  background: none;
  outline: none;
  padding: 10px 10px 10px 5px;
  width: 320px;
  display: block;
  box-sizing: border-box;
  font-size: 16px;
  color: #c6c6c6;
}

.hp-row label {
  position: absolute;
  top: 10px;
  left: 5px;
  font-size: 16px;
  transition: all .3s ease;
  -webkit-transition: .3s ease all;
  color: #c6c6c6;
  pointer-events: none;
}
.hp-row input:focus ~ label,
.hp-row input:valid ~ label {
  top: -14px ;
  font-size: 12px;
  color: #2196F3;
}
.hp-row .bar{
  display: block;
  position: relative;

}
.hp-row .bar:before {
  position: absolute;
  bottom: 0px;
  content: '';
  width: 0px;
  height: 2px;
  transition: all .3s ease;
  -webkit-transition: .3s ease all;
}

.hp-row input:focus ~ .bar:before,
.hp-row input:valid ~ .bar:before {
  width: 320px;
  background:#2196F3;
} */
</style>
