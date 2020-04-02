<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
@import "~assets/css/base.css";
.tabbar{
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 49px;
  box-shadow: 0 -1px 1px #cccccc;
  z-index: 2;
  background-color: #ffffff;
}

</style>