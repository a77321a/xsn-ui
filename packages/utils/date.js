export const cnWeek = ['一', '二', '三', '四', '五', '六', '日']
export const numWeek = [1, 2, 3, 4 ,5 ,6 , 0]
export const date = {
  year: (arg) => {
    const d = arg ? new Date(arg) :new Date()
    return d.getFullYear()
  },
  month: (arg) => {
    const d = arg ? new Date(arg) :new Date()
    return d.getMonth() + 1
  },
  day: (arg) => {
    const d = arg ? new Date(arg) :new Date()
    return d.getDate()
  },
  hour: () => {
    const d = new Date()
    return d.getHours()
  },
  minute: () => {
    const d = new Date()
    return d.getMinutes()
  },
  second: () => {
    const d = new Date()
    return d.getSeconds()
  },
  now: () => {
    const d = new Date()
    return date.format(d)
  },
  dayOfWeek: (d) => {
    return new Date(d).getDay()
  },
  getFirstDayInMonthOfWeek: (d) => {
    const year = new Date(d).getFullYear()
    const month = new Date(d).getMonth() + 1
    const str = year + '-' + month + '-01'
    return date.dayOfWeek(str)
  },
  getLastDayOfMonth: (d) => {
    let da = new Date(d)

    // 得到下一个月
    const month = da.getMonth() + 1
    da.setMonth(month)
    // 得到当前月的最后一天
    da.setDate(0)

    return da.getDate()
  },
  format: (d, format = 'YYYY-MM-DD') => {
    const da = new Date((new Date(d)).toLocaleDateString())
    var o = {
      'M+': da.getMonth() + 1, //月份
      'D+': da.getDate(), //日
      'h+': da.getHours(), //小时
      'm+': da.getMinutes(), //分
      's+': da.getSeconds(), //秒
    }
    if (/(Y+)/.test(format)) {
      format = format.replace(RegExp.$1, (da.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return format
  },
  getPrevDate: (d = new Date(), count = 1) => {
    d = d = new Date(d)
    d.setDate(d.getDate() - count)
    return date.format(d)
  },
  getNextDate: (d = new Date(), count = 1) => {
    d = new Date(d)
    d.setDate(d.getDate() + count)
    return date.format(d)
  }

}

