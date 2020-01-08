/*
 * @Descripttion:
 * @Author:
 * @Date: 2019-12-29 17:02:27
 * @LastEditors:
 * @LastEditTime: 2019-12-29 17:59:43
 */
import XBtn from './components/btn/index'
import FField from './components/field/index'
import FInput from './components/input/index'
import FSelect from './components/select/index'
import FRadio from './components/radio/index'
import FCheckbox from './components/checkbox/index'
import XIcon from './components/icon/index'
import FModal from './components/modal/index'
import FTable from './components/table/index'
import FPopover from './components/popover/index'
import XCard from './components/card/index'
import XBreadcrumb from './components/breadcrumb/index'
import FCarousel from './components/carousel/index'
import FCarouselItem from './components/carousel/item'
import FProgress from './components/progress/index'
import FDatepicker from './components/datepicker/index'
import FTips from './components/tips/index'
import FTree from './components/tree/index'

import XNotify from './components/notify/index.js'
import Loading from './directives/loading/index'
import CloseOverlay from './directives/closeoverlay/index'

import { platform } from './utils/function'

const components = [
  XBtn,
  FInput,
  FSelect,
  FRadio,
  FCheckbox,
  XIcon,
  FModal,
  FTable,
  FPopover,
  XCard,
  XBreadcrumb,
  FField,
  FCarousel,
  FCarouselItem,
  FProgress,
  FDatepicker,
  FTips,
  FTree
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
  FInput,
  FSelect,
  FRadio,
  FCheckbox,
  XIcon,
  FModal,
  FTable,
  FPopover,
  XCard,
  Loading,
  CloseOverlay,
  XNotify,
  XBreadcrumb,
  FField,
  FCarousel,
  FCarouselItem,
  FProgress,
  FDatepicker,
  FTips,
  FTree
}
