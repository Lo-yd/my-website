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
        <div class="right">12</div>
      </div>
    </div>
  </div>
</template>

<script>
import OnePage from '@/components/OnePage'
import Article from '@/views/home/Article'
export default {
  name: 'home',
  components: {
    OnePage,
    Article
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
  background-color: #e6e6e6;
  .main {
    width: 1160px;
    // height: 500px;
    margin: 0 auto;

    .left {
      width: 800px;
      // height: 500px;
      float: left;
      background-color: aqua;
    }
    .right {
      // height: 500px;
      overflow: hidden;
      background-color: red;
    }
  }
}
</style>
