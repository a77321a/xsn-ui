<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-07 18:21:28
 -->
<template>
  <div id="app">
    <!-- <nav-bar></nav-bar> -->
    <div class="row container-wrapper">
      <div class="side">
        <menu-bar />
      </div>
      <div ref="content" class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/index'
import MenuBar from '@/components/menubar/index'
export default {
  name: 'App',
  components: {
    NavBar,
    MenuBar
  }
}
</script>

<style lang="scss">
@import '../packages/css/index';
@import './css/index';
</style>
