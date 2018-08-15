<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" class="container grid">
    <img :src="item.url" :alt="item.desc" class="img" v-for="item in dataArr" :key="item.id">
  </div>
</template>

<script>
import ListView from '../components/ListView'

export default {
  name: 'girl',
  components: {ListView},
  data () {
    return {
      page: 0,
      busy: false,
      dataArr: []
    }
  },
  mounted: function () {
  },
  methods: {
    getData () {
      this.$axios.get('data/福利/10/' + this.page)
        .then(res => {
          this.dataArr = this.dataArr.concat(res.data.results)
          this.busy = false
        })
    },
    loadMore () {
      this.busy = true
      this.page++
      console.log(`page=${this.page}`)
      this.getData()
    },
    test: function (e) {
      console.log('321321', document.name)
    }
  }
}
</script>

<style scoped>
  .grid{
    column-count: 4;
    column-gap: 10px;
  }
  .img{
    display: block;
    width: 100%;
    padding-top: 10px;
  }
</style>
