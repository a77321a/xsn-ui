<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-03-19 09:40:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 11:45:24
 -->
<template>
  <div class="x-date-picker">
    <div class="toolbar-title text-center">
      {{ currentPageYear + "年" + currentPageMonth + "月" }}
    </div>

    <div class="toolbar block">
      <x-btn icon="arrowhead-left-outline" @click="_lastYear" circle></x-btn>
      <x-btn icon="return" @click="_lastMonth" circle></x-btn>
      <x-btn icon="next" @click="_nextMonth" circle></x-btn>
      <x-btn icon="arrowhead-right-outline" @click="_nextYear" circle></x-btn>
    </div>
    <div class="x-date-picker-header">
      <div
        v-for="(w, wIdx) in cnWeek"
        :key="'f_date_picker_header_week_' + wIdx"
        class="x-date-picker-cell"
      >
        {{ w }}
      </div>
    </div>

    <div class="x-date-picker-body">
      <div
        v-for="(d, dIdx) in currentPageDate"
        :key="'f_date_picker_body_day_' + dIdx"
        class="x-date-picker-cell"
        :class="[
          _compareWidthModel(d.value) ? 'active' : '',
          d.isCurrentMonth === false ? 'text-faded' : 'text-black',
          d.disabled ? 'disabled' : ''
        ]"
        @click.stop="_chose(d)"
      >
        {{ d.label }}
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './mixin';
export default {
  name: 'DatePicker',
  mixins: [mixin],
  data () {
    return {}
  }
}
</script>

<style></style>
