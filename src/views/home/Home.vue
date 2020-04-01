<template>
  <div id="home">
    <NavBar>
      <div slot="nav-middle" class="navbar-item">
        <span>购物街</span>
      </div>
    </NavBar>
    <HomeCategory>
      <div class="hc-item" v-for="(item, index) in keywords" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </a>
      </div>
    </HomeCategory>
    <TabControll></TabControll>
  </div>
</template>

<script>
  import {getHomeMultiData, getHomeGoods} from '../../network/home'

  import NavBar from "../../components/common/navbar/NavBar";
  import HomeCategory from "./content/HomeCategory";
  import TabControll from "../../components/content/TabControll";

  export default {
    name: "Home",
    components: {
      NavBar,HomeCategory,TabControll
    },
    data (){
      return {
        'banner': [],
        'keywords': [],
        'goods': {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    created() {
      this.homeMultiData();
      this.homeGoods('pop');
      this.homeGoods('news');
      this.homeGoods('sell');
    },
    methods: {
      homeMultiData(){
        getHomeMultiData().then(res => {
          this.keywords = res.data.recommend.list
        });
      },
      homeGoods(type){
        let page = this.goods[type].page + 1;
        getHomeGoods('pop', 1).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          console.log(this.keywords);
        });
      }
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
  background-color: #ff699c;
  width: 65px;
}
.hc-item a span{
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: #3c3b3b;
  justify-content: center;
}
</style>