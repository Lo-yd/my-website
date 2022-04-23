<template>
  <div>
    <Header class="header" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getA } from '@/api'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data () {
    return {
    }
  },
  mounted () {
    // console.log(11)
    // async function s () {
    //   const res = await getA()
    //   console.log(res)
    // }
    // s()
  }

}
</script>

<style lang="less" scoped>
.header {
  top: 0;
  position: fixed;
  z-index: 100;
}
</style>
