<template>
    <Swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in banner" :key="index">
            <img :src="item.image" alt="">
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
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 10,
              loop: true,
              speed: 600, //config参数同swiper4,与官网一致
              pagination: '.swiper-pagination',
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
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