<template>
  <div class="nav-bar">
    <slot name="nav-middle"></slot>
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 49px;
  color: #fff;
  font-size: 18px;
  line-height: 19px;
  background-color: #ff699c;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
  .navbar-item{
    flex: 1;
    text-align: center;
    line-height: 49px;
    font-weight: bold;
  }
</style>