<template>
  <ul>
    <li v-for="item in msg" :key="item.id">
      <div :id="item.id" @click="handle(item)">
        <img src="" alt="" />
        <div>{{ item.title }}</div>
      </div>
      <div>
        <Footer :msg="item.next" v-show="open" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      open: false
    }
  },
  props: {
    msg: [Array, Object]
  },
  methods: {
    handle (item) {
      this.open = !this.open
    }
  },
  mounted () {
    console.log(this.msg)
  }
}
</script>

<style>
</style>