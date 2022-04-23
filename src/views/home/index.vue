<template>
  <div class="home">
    <OnePage />
    <div class="main">
      <div class="layout">
        <div class="left">
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
        <div class="right">
          <HotPoint />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OnePage from '@/components/OnePage'
import Article from '@/views/home/Article'
import HotPoint from '@/components/HotPoint'
export default {
  name: 'home',
  components: {
    OnePage,
    Article,
    HotPoint
  },
  data () {
    return {

    }

  }

}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  // background-color: #e6e6e6;
  .main {
    width: 1160px;
    margin: 0 auto;

    .left {
      width: 800px;
      float: left;
      // background-color: aqua;
    }
    .right {
      overflow: hidden;
      // background-color: red;
    }
  }
}
</style>
