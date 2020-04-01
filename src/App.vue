<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <TabBarItem path="/home">
        <img slot="tab-icon" src="~assets/images/tabbar/home.svg" alt="">
        <img slot="tab-icon-active" src="~assets/images/tabbar/home_active.svg" alt="">
        <div slot="tab-title">Home</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="tab-icon" src="~assets/images/tabbar/category.svg" alt="">
        <img slot="tab-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
        <div slot="tab-title">Category</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="tab-icon" src="~assets/images/tabbar/cart.svg" alt="">
        <img slot="tab-icon-active" src="~assets/images/tabbar/cart_active.svg" alt="">
        <div slot="tab-title">Cart</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img slot="tab-icon" src="~assets/images/tabbar/my.svg" alt="">
        <img slot="tab-icon-active" src="~assets/images/tabbar/my_active.svg" alt="">
        <div slot="tab-title">My</div>
      </TabBarItem>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/common/tabbar/TabBar'
  import TabBarItem from './components/common/tabbar/TabBarItem'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .tabbar-item{
    flex: 1;
  }
  .tabbar-item img{
    width: 25px;
    height: 25px;
    margin: 3px auto 0;
    padding: 0;
    vertical-align: middle;
  }
  .tabbar-item div{
    font-size: 14px;
  }
</style>
