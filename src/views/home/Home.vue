<template>
  <div id="home">
    <NavBar>
      <div slot="nav-middle" class="navbar-item">
        <span>购物街</span>
      </div>
    </NavBar>
    <Carrousel :banner="banner"></Carrousel>
    <HomeCategory>
      <div class="hc-item" v-for="(item, index) in keywords" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </a>
      </div>
    </HomeCategory>
    <TabControll :titles="titles"></TabControll>
    <TabControlData :goods="goods">

    </TabControlData>
  </div>
</template>

<script>
  import {getHomeMultiData, getHomeGoods} from '../../network/home'

  import NavBar from "../../components/common/navbar/NavBar";
  import HomeCategory from "./content/HomeCategory";
  import TabControll from "../../components/content/TabControll";
  import TabControlData from "../../components/content/TabControlData";
  import Carrousel from '../../components/lib/Swiper'

  export default {
    name: "Home",
    components: {
      NavBar,Carrousel,HomeCategory,TabControll,TabControlData
    },
    data (){
      return {
        'banner': [],
        'keywords': [],
        'titles': ['流行', '精选', '热卖'],
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
      // this.homeGoods('news');
      this.homeGoods('sell');
    },
    methods: {
      homeMultiData(){
        getHomeMultiData().then(res => {
          console.log(res.data.banner.list);
          this.keywords = res.data.recommend.list;
          this.banner = res.data.banner.list;
        });
      },
      homeGoods(type){
        let page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // console.log(res);
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