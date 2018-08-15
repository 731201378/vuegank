<template>
  <ul>
    <li v-for="item in dataArr" :key="item._id">
      <a :href="item.url" target="_blank">{{item.desc}}</a>
      ({{item.who}})
      <img v-if="item.type=='福利'" :src="item.url" :title="item.desc">
      <ul v-else>
        <li v-for="img in item.images" :key="img" class="img-box">
          <img onemptied="" v-img="{group: item._id,title: item.desc}" :src="img" :title="item.desc">
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListView',
  props: ['dataArr']
}
</script>

<style scoped>
  ul{
    line-height: 1.7;
    margin-left: 1.3em;
  }
  .img-box{
    width: 120px;
    list-style: none;
    display: inline-block;
    padding: 1em;
    vertical-align: top;
  }
  img{
    position: relative;
    display: block;
    max-width: 100%;
    border: 4px solid white;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  }
</style>
