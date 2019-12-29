<template>
  <div class="menu-wrapper">
    <ul class="pt-md pb-md">
      <li
        v-for="(menu, idx) in menus"
        :key="'cmp_menu_' + idx"
        class="menu-item"
        :class="$route.path === menu.path ? 'text-primary' : ''"
        @click="_link(menu)"
      >
        <span class="menu-item-span inline-block full-width">{{ menu.name }}</span>
        <ul v-if="menu.children && menu.children.length > 0" class="pl-md mt-sm">
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
</template>

<script>
import menuData from './menus.js'
export default {
  name: 'menuBar',
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

<style>

</style>
