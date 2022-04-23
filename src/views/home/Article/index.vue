<template>
  <div class="article">
    <article class="post-entry">
      <img class="articleimg" src="@/assets/images/avatar.jpg" alt="" />
      <div class="post-info">
        <header class="entry-header">
          <h2>Redis缓存异常</h2>
        </header>
        <section class="entry-content">
          当redis发生缓存雪崩、击穿、穿透时的场景缓存雪崩、击穿、穿透时
          的场景缓存雪崩、击穿、穿透时的场景和应对方法，还有如何解
          决redis缓存和数据库中的数据不一缓存雪崩
          、击穿、穿透时的场景缓存雪崩、击穿、穿透时的场景缓存雪崩、击穿、穿透时的场景
          缓存雪崩、击穿、穿透时的场景缓存雪崩、击穿、穿透时的场景致的问题
          缓存雪崩、击穿、穿透时的场景 缓存雪崩、击穿、穿透时的场景
          缓存雪崩、击穿、穿透时的场景
        </section>
        <footer class="entry-footer">
          创建: 2022-03-07 | 更新: 2022-04-05 | 字数: 3801字 | 时长: 8分钟 |
          作者: Sulv | 标签: Redis | 访问:
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Article'

}
</script>

<style lang="less" scoped>
.article {
  font-size: 16px;
  margin: 20px 0;
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