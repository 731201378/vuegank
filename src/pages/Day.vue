<template>
  <div class="container">
    <h1>今日推荐</h1>
    <Loading v-if="isLoading"/>
    <div v-else v-for="(values,category) in dayGank" :key="category" class="content">
      <h3>{{category}}</h3>
      <ListView :dataArr="values"></ListView>
    </div>
  </div>
</template>

<script>
import ListView from '../components/ListView'
import Loading from '../components/Loading'
export default {
  name: 'Day',
  components: {Loading, ListView},
  data () {
    return {
      isLoading: true,
      dayGank: {}
    }
  },
  mounted () {
    // this.$axios.get('day/2018/07/19')
    this.$axios.get('today')
      .then(res => {
        this.isLoading = false
        this.dayGank = res.data.results
      })
  }
}
</script>

<style scoped>
  .container {
    margin-top: 80px;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
  }
  .content{
    padding: 0 24px 24px;
  }
  h1{
    text-align: center;
    border-bottom: 1px solid rgba(178,186,194,.15);
  }
  h1,h3{
    padding-top: 1em;
    padding-bottom: 0.6em;
    line-height: 1.35;
    font-weight: normal;
  }
</style>
