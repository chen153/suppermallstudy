<template>
  <div class="tcd-content" ref="wrapper">
<!--    <div class="tcd-item" v-for="(item, index) in goods" :key="index">-->
    <div class="tcd-item">
      <ul class="gl-ul">
        <li class="gl-item" v-for="(gl, index2) in goods.list" :key="index2">
          <img :src="gl.show.img" alt="" class="gl-descr-img">
          <a :href="gl.link">{{gl.title}}</a>
          <p class="gl-descr">
            <span class="gl-price">{{gl.orgPrice}}</span>
            <span class="gl-cfav-svg"></span>
            <span class="gl-cfav">
              {{gl.cfav}}
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "TabControlData",
    props: {
      goods:{
        type: Object,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        scroll: null,
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true
      })
    }
  }
</script>

<style scoped>
.tcd-content{
  overflow: hidden;
}
.tcd-item ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tcd-item ul li{
  width: 48%;
  margin: 5px 0 8px;
}
.tcd-item ul li img.gl-descr-img{
  border-radius: 5px;
  width: 100%;
}
.gl-item a{
  display: block;
  line-height: 30px;
  height: 30px;
  font-size: 12px;
  text-decoration: none;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #505050;
  padding: 0 5px;
}
.gl-item .gl-descr{
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}
.gl-item .gl-price{
  color: red;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}
.gl-item .gl-cfav-svg{
  display: inline-block;
  width: 16px;
  height: 18px;
  background-size: 16px 16px;
  vertical-align: middle;
  background-image: url("~assets/images/home/cfav.svg");
  background-repeat: no-repeat;
}
.gl-item .gl-cfav{
  display: inline-block;
  vertical-align: middle;
}
</style>