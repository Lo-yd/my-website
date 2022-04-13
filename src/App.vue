<template>
  <div>
    <Header />
    <Tree :data-source="msg" />
    <router-view></router-view>
    <Footer :msg="msg" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Tree from '@/components/Tree'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Tree
  },
  data () {
    return {
      msg: [
        {
          id: 'a-1',
          title: "一级标题A",
          next: [{
            id: 'b-1',
            title: "二级标题B",
            next: [
              {
                id: 'c-1',
                title: "三级标题C1",
              },
              {
                id: 'c-2',
                title: "三级标题C5",
              }
            ]
          }]
        },
        {
          id: 'a-2',
          title: "一级标题B",
          next: [{
            id: 'b-1',
            title: "二级标题A",
            next: [{
              id: 'c-1',
              title: "三级标题C",
            }]
          }]
        }
      ]
    }
  }
}
</script>

<style>
</style>
