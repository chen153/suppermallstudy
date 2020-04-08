<template>
  <div id="home">
    <NavBar>
      <div slot="nav-middle" class="navbar-item">
        <span>购物街</span>
      </div>
    </NavBar>
    <Scroll class="content" ref="scroll" @scroll="getScrollPosition(position)">
      <Carrousel :banner="banner"></Carrousel>
      <HomeCategory>
        <div class="hc-item" v-for="(item, index) in keywords" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <span>{{item.title}}</span>
          </a>
        </div>
      </HomeCategory>
      <TabControll :titles="titles" @tabControll="tabConClick"></TabControll>
      <TabControlData :goods="goods[currenType]"></TabControlData>
    </Scroll>
    <GoTop @click.native="goTop"></GoTop>
  </div>
</template>

<script>
  import {getHomeMultiData, getHomeGoods} from '../../network/home'

  import NavBar from "../../components/common/navbar/NavBar";
  import HomeCategory from "./content/HomeCategory";
  import TabControll from "../../components/content/TabControll";
  import TabControlData from "../../components/content/TabControlData";
  import Carrousel from '../../components/lib/Swiper'
  import Scroll from '../../components/common/scroll/Scroll'
  import GoTop from '../../components/common/GoTop'

  export default {
    name: "Home",
    components: {
      NavBar,
      Scroll,
      Carrousel,
      HomeCategory,
      TabControll,
      TabControlData,
      GoTop
    },
    data (){
      return {
        'probeType': 3,
        'currenType': 'pop',
        'banner': [],
        'keywords': [],
        'titles': ['流行', '精选', '热卖'],
        'goods': {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        // 'position': null,
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
          this.keywords = res.data.recommend.list;
          this.banner = res.data.banner.list;
        });
      },
      homeGoods(type){
        let page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        });
      },
      tabConClick(index){
        switch (index) {
          case index = 0:
            this.currenType = 'pop';
            break;
          case index = 1:
            this.currenType = 'news';
            break;
          case index = 2:
            this.currenType = 'sell';
            break;
        }
      },
      goTop(){
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      getScrollPosition(position){
        console.log(position);
        // this.position = position;
      }
    }
  }
</script>

<style scoped>
.content{
  height: 100%;
  width: 100%;
  position: absolute;
}
/*.content{*/
/*  height: calc(100% - 98px);*/
/*  width: 100%;*/
/*  overflow: hidden;*/
/*}*/
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