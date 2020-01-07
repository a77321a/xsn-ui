<!--
 * @Descripttion:
 * @Author:
 * @Date: 2020-01-06 09:56:08
 * @LastEditors:
 * @LastEditTime: 2020-01-06 16:02:38
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
@import '../packages/css/style';
@import './css/index';
</style>
