<template>
    <div class="go-top">
        <img src="../../assets/common/go-top.svg" alt="">
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
    bottom: 55px;
    right: 8px;
    border-radius: 50%;
    background-color: #ffffff;
}
.go-top img{
    width: 36px;
    display: block;
}
</style>