<template>
  <div class="hotpoint">
    <h3 class="title">热点</h3>
    <ul>
      <li><h4>水电费费</h4></li>
      <li><h4>水电费费</h4></li>
      <li><h4>水电费费</h4></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotPoint'

}
</script>

<style lang="less" scoped>
.hotpoint {
  width: 90%;
  height: 200px;
  margin: 20px auto;
  background-color: #ffffff;
  box-shadow: 2px 5px 5px #e6e6e6;
  padding: 15px;
  border: 1px solid #000000;

  .title {
    // width: 90%;
    height: 30px;
    border-bottom: 1px solid #000000;
  }
  ul {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    li {
      width: 90%;
      height: 30px;
      // border: 1px solid black;
    }
  }
}
</style>