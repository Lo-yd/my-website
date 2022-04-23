<template>
  <nav>
    <div class="nav-item logo"><img :src="logo" alt="logo" /></div>
    <ul class="nav-item menu">
      <li class="menu-item">菜单一</li>
      <li class="menu-item">菜单er</li>
    </ul>
  </nav>
</template>

<script>
import logoUrl from '@/assets/logo.png'
export default {
  name: 'Header',
  data () {
    return {
      logo: logoUrl,

    }
  },
  methods: {

  }

}
</script>

<style lang="less" scoped>
nav {
  width: 100%;
  height: 75px;
  font-size: 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #fafafa;
  opacity: 0.6;

  .logo img {
    width: 200px;
    height: 75px;
    display: block;
    margin: 0 10px 0;
  }
  .menu {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    height: 75px;
    margin: 0 20px;
  }
  .menu-item {
    margin: 0 5px;
    line-height: 75px;
    background-color: antiquewhite;
  }
}
</style>