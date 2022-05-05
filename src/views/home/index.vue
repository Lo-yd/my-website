<template>
  <div class="home">
    <OnePage />
    <div class="main">
      <div class="layout">
        <div class="left">
          <ArticleList :articleList="articleList" />
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
import ArticleList from '@/views/home/ArticleList'
import HotPoint from '@/components/HotPoint'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    OnePage,
    ArticleList,
    HotPoint
  },
  data () {
    return {
      params: {
        page: null
      }
    }

  },
  mounted () {
    // 发请求
    this.$store.dispatch('getArticleList', this.params)
  },
  computed: {
    ...mapState({ articleList: state => state.home.articleList })
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
