<template>
  <div class="home-categoty">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HomeCategory"
  }
</script>

<style scoped>
.home-categoty{
  margin-top: 49px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 25px;
  border-bottom: 15px solid #ccc;
}
</style>