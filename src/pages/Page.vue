<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="50" class="container">
    <ListView :data-arr="dataArr"/>
    <Loading v-show="showLoading"/>
  </div>
</template>

<script>
import ListView from '../components/ListView'
import Loading from '../components/Loading'
export default {
  name: 'Page',
  props: ['category'],
  components: {Loading, ListView},
  data () {
    return {
      page: 0,
      showLoading: true,
      busy: false,
      dataArr: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    this.page = 0
    this.dataArr = []
    this.showLoading = true
    next()
  },
  watch: {
    '$route': 'loadMore'
  },
  methods: {
    getData () {
      console.log('----', this.category)
      this.$axios.get(`data/${this.category}/10/${this.page}`)
        .then(res => {
          if (res.data.results.length !== 0) {
            this.dataArr = this.dataArr.concat(res.data.results)
            this.busy = false
          } else {
            this.showLoading = false
            this.busy = true
          }
        })
    },
    loadMore () {
      this.busy = true
      this.page++
      console.log(`page=${this.page}`)
      this.getData()
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 80px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    padding: 24px;
  }
</style>
