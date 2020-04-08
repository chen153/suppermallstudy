<template>
    <div class="tab-controll" :style="{'tab-controll-ac': navBarFixed}" >
        <div class="tc-item" v-for="(item, index) in titles" :class="{active: index === isCount}"
            @click="tabControll(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "TabControll",
    props: {
      titles: {
        type: Array
      }
    },
    data(){
      return {
        isCount: 0,
        bs: null,
        navBarFixed: false
      }
    },
    methods: {
      tabControll(index){
        this.isCount = index;
          this.$emit('tabControll', index);
      },
      watchScroll () {
        let scrollTop = document.querySelector('.tab-controll').offsetTop;
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 387) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
      }
    },
    mounted() {
      document.querySelector('.tab-controll').addEventListener('scroll', this.watchScroll)
    }
  }
</script>

<style scoped>
.tab-controll{
    display: flex;
    justify-content: center;
    position: sticky;
    top: 49px;
    background-color: #ffffff;
    z-index: 9;
}
.tab-controll-ac{
    position: fixed;
}
.tab-controll .tc-item{
    flex: 1;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
}
.tab-controll .active span{
    padding: 8px;
    border-bottom: 2px solid #ff699c;
    color: #ff699c;
}
</style>