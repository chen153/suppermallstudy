<template>
  <div id="home" ref="home">
    <NavBar>
      <div slot="nav-middle" class="navbar-item">
        <span>购物街</span>
      </div>
    </NavBar>
    <TabControll :titles="titles" @tabControll="tabConClick" ref="tabcontroll" v-show="tcfBool" :class="{tcfixed: tcfBool}"></TabControll>
    <Scroll class="content" ref="scroll"
            @scroll="contentScroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <Carrousel :banner="banner"></Carrousel>
      <HomeCategory>
        <div class="hc-item" v-for="(item, index) in keywords" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <span>{{item.title}}</span>
          </a>
        </div>
      </HomeCategory>
      <TabControll :titles="titles" @tabControll="tabConClick" ref="tabcontroll" ></TabControll>
      <TabControlData :goods="goods[currenType]"></TabControlData>
    </Scroll>
    <GoTop @click.native="goTop" v-show="isGoTop"></GoTop>
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
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        isGoTop: false,
        tcOffsetTop: 0,
        tcfBool: false,
      }
    },
    created() {
      this.homeMultiData();
      this.homeGoods('pop');
      this.homeGoods('new');
      this.homeGoods('sell');
    },
    mounted() {
      let refresh = this.debounce(this.$refs.scroll.refresh, 100);
      this.$bus.$on('imageLoadRef', () => {
        // console.log('~~~~~~~')
        // this.$refs.scroll.refresh();
        refresh();
      })
    },
    methods: {
      debounce(func, delay){
        let timer = null;
        return function (...args) {
          if(timer){
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },
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
          this.$refs.scroll.finishPullUp();
        });
      },
      tabConClick(index){
        switch (index) {
          case index = 0:
            this.currenType = 'pop';
            break;
          case index = 1:
            this.currenType = 'new';
            break;
          case index = 2:
            this.currenType = 'sell';
            break;
        }
      },
      goTop(){
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position){
        this.tcOffsetTop = this.$refs.tabcontroll.$el.offsetTop;
        this.isGoTop = -position.y > 1000;
        if(-position.y >= this.tcOffsetTop){
          this.tcfBool = true;
        }else if(-position.y < this.tcOffsetTop){
          this.tcfBool = false;
        }
      },
      loadMore(){
        this.homeGoods(this.currenType);
        this.$refs.scroll.refresh();
      }
    }
  }
</script>

<style scoped>
.tcfixed{
  position: fixed;
  width: 100%;
}
.content{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 49px;
  overflow: hidden;
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