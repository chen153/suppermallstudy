<template>
    <Swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in banner" :key="index">
            <a href="item.link">
                <img :src="item.image" alt="">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
</template>

<script>
  // 局部引用
  import { Swiper,SwiperSlide,directive  } from 'vue-awesome-swiper'
  import '../../assets/lib/swiper.min.css'
  export default {
    name: 'Carrousel',
    props: {
        banner: {
            type: Array
        },
    },
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
      return {
          swiperOption:{
            initialSlide: 1,
              autoplay: true,
              loop:true,
              speed: 500,
              pagination: {
                el: ".swiper-pagination",
                clickable: true
              }
          }
    }
  }
  }
</script>

<style scoped>
.swiper-container{
    top: 49px;
}
.swiper-wrapper .swiper-slide img{
    width: 100%;
}
</style>