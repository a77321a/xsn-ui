<!--
 * @Descripttion: 首页
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-06 10:10:48
 -->
<template>
  <div>
    <a target="_blank" href="https://github.com/a77321a/xsn-ui">github地址</a>

    <div class="f-coad-wrapper">
      <pre>
        // install

        npm install xsn-ui

        // in main.js

        import xsnUI from 'xsn-ui'

        // if you have install sass already

        import 'xsn-ui/packages/css/style.scss'

        // else

        import 'xsn-ui/packages/css/index.css'

        Vue.use(xsnUI)

        // example for input

        &lt;x-input v-model="inputValue"/&gt;
      </pre>
    </div>

    <div class="menu-mobile-wrapper">
      <h4 class="mt-sm mb-sm">菜单：</h4>
      <ul>
        <li
          v-for="(menu, idx) in menus"
          :key="'cmp_menu_' + idx"
          class="menu-item"
          :class="$route.path === menu.path ? 'text-primary' : ''"
          @click="_link(menu)"
        >
          <span class="menu-item-span inline-block full-width">{{
            menu.name
          }}</span>
          <ul
            v-if="menu.children && menu.children.length > 0"
            class="pl-md mt-sm"
          >
            <li
              v-for="(child, childIdx) in menu.children"
              :key="'cmp_menu_child_' + childIdx"
              class="menu-item-child"
              :class="$route.path === child.path ? 'text-primary' : ''"
              @click.stop="_link(child)"
            >
              {{ child.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import menuData from '../components/menubar/menus.js';
export default {
  name: 'pageIndex',
  data () {
    return {
      menus: menuData
    }
  },
  methods: {
    _link (menu) {
      if (menu.path) {
        this.$router.push(menu.path)
      }
    }
  }
}
</script>

<style></style>
