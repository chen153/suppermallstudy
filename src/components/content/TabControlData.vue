<template>
  <div class="tcd-content">
    <div class="tcd-item" v-for="(item, index) in goods">
      <ul class="gl-ul">
        <li class="gl-item" v-for="(gl, index) in item.list">
          <img :src="gl.show.img" alt="" class="gl-descr-img">
          <a :href="gl.link">{{gl.title}}</a>
          <p class="gl-descr">
            <span class="gl-price">{{gl.orgPrice}}</span>
            <img src="~assets/images/home/cfav.svg" alt="">
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
  export default {
    name: "TabControlData",
    props: {
      goods:{
        type: Object,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
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
  display: flex;
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  justify-content: center;
}
.gl-item .gl-price{
  color: red;
  padding-right: 15px;
  display: inline-block;
}
.gl-item .gl-descr img{
  width: 20px;
  vertical-align: middle;
}
.gl-item .gl-cfav{
  display: inline-block;
  line-height: 20px;
}
</style>