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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null,
      }
    },
    methods: {
      scrollTo(x, y, t=300){
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, t)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
      },
      refresh(){
        console.log('~~~')
        this.scroll && this.scroll.refresh && this.scroll.refresh();
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position);
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
      })
    }
  }
</script>

<style scoped>

</style>