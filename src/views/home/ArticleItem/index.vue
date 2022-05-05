<template>
  <div class="article">
    <article class="post-entry">
      <img
        class="articleimg"
        :src="articleInfo.x_featured_media_medium"
        alt=""
      />
      <div class="post-info">
        <header class="entry-header">
          <h2>{{ articleInfo.title.rendered }}</h2>
        </header>
        <section class="entry-content">
          <span v-html="articleInfo.excerpt.rendered"> </span>
        </section>
        <footer class="entry-footer">
          创建: {{ articleInfo.date.slice(0, 10) }} | 更新:
          {{ articleInfo.modified.slice(0, 10) }} | 作者:
          {{ articleInfo.x_author }} | 分类: {{ articleInfo.x_categories }} |
          访问:
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: ["articleInfo"]

}
</script>

<style lang="less" scoped>
.article {
  font-size: 16px;
  margin: 20px 0;
  overflow: hidden;
  .post-entry {
    width: 95%;
    height: 160px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: rgb(135, 158, 242);
    display: flex;
    align-items: center;

    .articleimg {
      box-sizing: border-box;
      height: 140px;
      width: 140px;
      display: block;
      // margin-left: 15px;
      padding: 15px;
    }

    .post-info {
      box-sizing: border-box;
      height: 150px;
      width: 92%;
      margin: 0 auto;
      padding: 15px 15px 15px 5px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .entry-content {
        height: 45px;
        overflow: hidden;
        margin-top: 10px;
      }
      .entry-footer {
        height: 22px;
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
}
</style>