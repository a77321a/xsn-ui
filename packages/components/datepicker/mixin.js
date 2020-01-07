import {cnWeek, date} from '../../utils/date'

export default {
  props: {
    value: {
      type: String | Date,
      default: ''
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    min: {
      type: String,
      default: ''
    },
    max: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      date,
      cnWeek,
      model: '',
      currentPageYear: '',
      currentPageMonth: '',
      currentPageDate: []
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val, oldVal) {
        this.model = val
        this.currentPageMonth = date.month(val)
        this.currentPageYear = date.year(val)
        this._set(val)
      }
    }
  },
  methods: {
    _set (d) {
      const firstDayInWeek = date.getFirstDayInMonthOfWeek(d)
      const lastDate = date.getLastDayOfMonth(d)
      let result = []
      if (firstDayInWeek !== 1) {
        const len = firstDayInWeek === 0 ? 7 : firstDayInWeek
        const currentPageFirstDay = this.currentPageYear + '-' + this.currentPageMonth + '-01'
        for (let i = len - 1; i > 0; i--) {
          const value = date.getPrevDate(currentPageFirstDay, i)
          const label = new Date(value).getDate()
          result.push({
            label: label,
            value: value,
            isCurrentMonth: false,
            disabled: this._computedIsDisabled(value)
          })
        }
      }

      for (let i = 1; i <= lastDate; i++) {
        result.push({
          label: i,
          value: date.format(this.currentPageYear + '-' + this.currentPageMonth + '-' + i, this.format),
          isCurrentMonth: true,
          disabled: this._computedIsDisabled(date.format(this.currentPageYear + '-' + this.currentPageMonth + '-' + i, this.format))
        })
      }

      // 当月最后一天是星期几
      const lastDayOfMonthInWeek = date.dayOfWeek(date.format(this.currentPageYear + '-' + this.currentPageMonth + '-' + lastDate, this.format))

      // 当月最后一天的日期
      const currentPageLastDay = date.format(this.currentPageYear + '-' + this.currentPageMonth + '-' + lastDate, this.format)

      if (lastDayOfMonthInWeek !== 0) {
        const len = 7 - lastDayOfMonthInWeek
        for (let i = 1; i <= len; i++) {
          const value = date.getNextDate(currentPageLastDay, i)
          const label = new Date(value).getDate()
          result.push({
            label: label,
            value: value,
            isCurrentMonth: false,
            disabled: this._computedIsDisabled(value)
          })
        }
      }

      this.currentPageDate = result
    },
    _lastMonth () {
      if (this.currentPageMonth === 1) {
        this.currentPageYear -= 1
        this.currentPageMonth = 12
      } else {
        this.currentPageMonth -= 1
      }
      this._set(this.currentPageYear + '-' + this.currentPageMonth)
    },
    _nextMonth () {
      if (this.currentPageMonth === 12) {
        this.currentPageYear += 1
        this.currentPageMonth = 1
      } else {
        this.currentPageMonth += 1
      }
      this._set(this.currentPageYear + '-' + this.currentPageMonth)
    },
    _lastYear () {
      this.currentPageYear -= 1
      this._set(this.currentPageYear + '-' + this.currentPageMonth)
    },
    _nextYear () {
      this.currentPageYear += 1
      this._set(this.currentPageYear + '-' + this.currentPageMonth)
    },
    _compareWidthModel (d) {
      const da = new Date(d)
      const mo = new Date(this.model)
      if (da.getFullYear() === mo.getFullYear() && da.getMonth() === mo.getMonth() && da.getDate() === mo.getDate()) {
        return true
      } else {
        return false
      }
    },
    _chose (d) {
      if (!d.disabled) {
        this.model = d.value
        this.$emit('input', d.value)
      }
    },
    _computedIsDisabled (d) {
      let flag = false
      if (this.min && !this.max) {
        flag = (new Date(d)).getTime() < (new Date(this.min)).getTime()
      } else if (this.max && !this.min) {
        flag = (new Date(d)).getTime() > (new Date(this.max)).getTime()
      } else if (this.min && this.max) {
        flag = (new Date(d)).getTime() < (new Date(this.min)).getTime() || (new Date(d)).getTime() > (new Date(this.max)).getTime()
      }

      return flag
    }
  }
}
