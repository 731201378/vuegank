<template>
  <div id="app">
    <header class="header">
      <div class="container flex">
        <router-link to="/" @click.native="toggleTabs(0)"><img class="logo" src="./assets/images/gank.svg" alt="干货"></router-link>
        <router-link class="nav" to="/page/Android" :class="{active: nowIndex==1 }" @click.native="toggleTabs(1)">Android</router-link>
        <router-link class="nav" to="/page/iOS" :class="{active: nowIndex==2 }" @click.native="toggleTabs(2)">IOS</router-link>
        <router-link class="nav" to="/page/前端" :class="{active: nowIndex==3 }" @click.native="toggleTabs(3)">前端</router-link>
        <router-link class="nav" to="/girl" :class="{active: nowIndex==4 }" @click.native="toggleTabs(4)">福利</router-link>
      </div>
    </header>
    <router-view class="main"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nowIndex: 0
    }
  },
  created () {
    switch (this.$route.path) {
      case '/page/Android':
        this.nowIndex = 1
        break
      case '/page/iOS':
        this.nowIndex = 2
        break
      case '/page/%E5%89%8D%E7%AB%AF':
        this.nowIndex = 3
        break
      case '/girl':
        this.nowIndex = 4
        break
      default:
        this.nowIndex = 0
    }
    console.log('app--', this.$route.path, this.nowIndex)
  },
  methods: {
    toggleTabs: function (index) {
      this.nowIndex = index
    }
  }
}
</script>

<style>
  .header {
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 38px;
    margin-right: 40px;
  }

  .nav {
    padding: 18px 14px;
    font-size: 18px;
  }

  .active{
    color: #007fff;
  }

  .main {
    margin-top: 60px;
  }
</style>
