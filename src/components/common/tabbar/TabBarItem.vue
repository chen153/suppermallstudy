<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tab-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-icon-active"></slot>
    </div>
    <div :class="{active: isActive}" :style="activeStyle">
      <slot name="tab-title"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#ff699c'
      }
    },
    methods: {
      itemClick(){
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.path)
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
.active{
  color: #ff699c;
}
.tabbar-item{
  text-align: center;
}
</style>