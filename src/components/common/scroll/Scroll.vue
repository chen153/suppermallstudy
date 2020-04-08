<template>
    <div class="wrapper" ref="scroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data(){
      return {
        scroll: null,
      }
    },
    methods: {
      scrollTo(x, y, t=300){
        this.scroll.scrollTo(x, y, t)
      }
    },
    mounted() {
      console.log(this.$refs.scroll.offsetTop);
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        pullUpLoad: true,
        click: true
      })
      this.scroll.on('scroll', (position) => {
        console.log(position)
        this.$emit('scroll', position);
      })
    }
  }
</script>

<style scoped>

</style>