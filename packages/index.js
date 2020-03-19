/*
 * @Descripttion:
 * @Author:
 * @Date: 2019-12-29 17:02:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-19 10:43:19
 */
import XBtn from './components/btn/index'
import XInput from './components/input/index'
import XSelect from './components/select/index'
import XRadio from './components/radio/index'
import XCheckbox from './components/checkbox/index'
import XIcon from './components/icon/index'
import XModal from './components/modal/index'
import XTable from './components/table/index'
import XPopover from './components/popover/index'
import XCard from './components/card/index'
import XBreadcrumb from './components/breadcrumb/index'
import XCarousel from './components/carousel/index'
import XCarouselItem from './components/carousel/item'
import XProgress from './components/progress/index'
import XDatepicker from './components/datepicker/index'
import XTips from './components/tips/index'
import XTree from './components/tree/index'

import XNotify from './components/notify/index.js'
import Loading from './directives/loading/index'
import CloseOverlay from './directives/closeoverlay/index'

import { platform } from './utils/function'

const components = [
  XBtn,
  XInput,
  XSelect,
  XRadio,
  XCheckbox,
  XIcon,
  XModal,
  XTable,
  XPopover,
  XCard,
  XBreadcrumb,
  XCarousel,
  XCarouselItem,
  XProgress,
  XDatepicker,
  XTips,
  XTree
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(Loading)
  Vue.use(CloseOverlay)
  Vue.use(XNotify)

  Vue.prototype.$f = {
    platform: platform
  }
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  XBtn,
  XInput,
  XSelect,
  XRadio,
  XCheckbox,
  XIcon,
  XModal,
  XTable,
  XPopover,
  XCard,
  Loading,
  CloseOverlay,
  XNotify,
  XBreadcrumb,
  XCarousel,
  XCarouselItem,
  XProgress,
  XDatepicker,
  XTips,
  XTree
}
