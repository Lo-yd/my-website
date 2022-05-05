<template>
  <div>
    <div>
      <ArticleItem
        v-for="(article, index) in articleList"
        :key="index"
        :articleInfo="article"
      />
    </div>
  </div>
</template>

<script>
import ArticleItem from '@/views/home/ArticleItem'
export default {
  name: 'ArticleList',
  props: ['articleList'],
  components: {
    ArticleItem
  },
  mounted () {
    console.log(this.articleList)
  }
}
</script>

<style>
</style>