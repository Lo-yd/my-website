

<template>
  <div class="tree-wrap">
    <div v-for="item in dataSource" :key="item.id">
      <tree-item :list="item"></tree-item>
    </div>
  </div>
</template>

<script>
import TreeItem from "./TreeItem"
export default {
  name: 'Tree',
  props: {
    dataSource: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    TreeItem
  },
};
</script>
<style scoped>
.tree-wrap {
  width: 100%;
  /* padding: 0 50px; */
}
</style>


