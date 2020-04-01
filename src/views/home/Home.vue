<template>
  <div id="home">
    <NavBar>
      <div slot="nav-middle" class="navbar-item">
        <span>购物街</span>
      </div>
    </NavBar>
    <HomeCategory>
      <div class="hc-item" v-for="(item, index) in keywords" :key="index">
        <a href="">
          <img :src="item.acm" alt="">
          <span>{{item.words}}</span>
        </a>
      </div>
<!--      <div class="hc-item">-->
<!--        <a href="">-->
<!--          <img src="~assets/images/tabbar/cart.svg" alt="">-->
<!--          <span>万圣节必备口红</span>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="hc-item">-->
<!--        <a href="">-->
<!--          <img src="~assets/images/tabbar/cart.svg" alt="">-->
<!--          <span>万圣节必备口红</span>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="hc-item">-->
<!--        <a href="">-->
<!--          <img src="~assets/images/tabbar/cart.svg" alt="">-->
<!--          <span>万圣节必备口红</span>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="hc-item">-->
<!--        <a href="">-->
<!--          <img src="~assets/images/tabbar/cart.svg" alt="">-->
<!--          <span>万圣节必备口红</span>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="hc-item">-->
<!--        <a href="">-->
<!--          <img src="~assets/images/tabbar/cart.svg" alt="">-->
<!--          <span>万圣节必备口红</span>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="hc-item">-->
<!--        <a href="">-->
<!--          <img src="~assets/images/tabbar/cart.svg" alt="">-->
<!--          <span>万圣节必备口红</span>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="hc-item">-->
<!--        <a href="">-->
<!--          <img src="~assets/images/tabbar/cart.svg" alt="">-->
<!--          <span>万圣节必备口红</span>-->
<!--        </a>-->
<!--      </div>-->
    </HomeCategory>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeCategory from "./homecategory/HomeCategory";
  import {getHomeMultiData} from '../../network/home'

  export default {
    name: "Home",
    components: {
      NavBar,HomeCategory
    },
    data (){
      return {
        'keywords': [],
      }
    },
    created() {
      getHomeMultiData().then(res => {
        this.keywords = res.data.keywords.list
        console.log(res.data);
      })
    },
    methods: {

    }
  }
</script>

<style scoped>
.hc-item{
  width: 25%;
  text-align: center;
  justify-content: center;
  margin-top: 15px;
}
.hc-item a{
  display: inline-block;
  text-decoration: none;
  padding: 5px;
}
.hc-item a img{
  border-radius: 50%;
  background-color: red;
}
.hc-item a span{
  display: flex;
  font-size: 12px;
  margin-top: 5px;
  color: #3c3b3b;
}
</style>