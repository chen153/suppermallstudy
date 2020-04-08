<template>
  <div class="go-top">
    <img src="~assets/images/top.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "GoTop"
  }
</script>

<style scoped>
.go-top{
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  bottom: 58px;
  right: 8px;
  z-index: 5;
}
.go-top img{
  width: 40px;
}
</style>
