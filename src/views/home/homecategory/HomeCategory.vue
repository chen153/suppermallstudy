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
}
</style>