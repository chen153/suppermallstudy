<template>
    <div class="tab-controll">
        <div class="tc-item" v-for="(item, index) in ['精选', '流行', '热卖']" :class="{active: index === isCount}"
            @click="tabControll(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControll",
    props: {
      conTrolData:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isCount: 0
      }
    },
    methods: {
      tabControll(index){
        this.isCount = index
      }
    }
  }
</script>

<style scoped>
.tab-controll{
    display: flex;
    justify-content: center;
    position: sticky;
    top: 49px;
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