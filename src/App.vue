<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <!--=======Scroll to top button=======-->

  <!--=======Light/Dark theme button=======-->

  <!--=======Header=======-->
  <Header class="header" />

  <!--=======Home section=======-->

  <!--=======About section=======-->

  <!--=======Skills section=======-->

  <!--=======Services section=======-->

  <!--=======Portfolio section=======-->

  <!--=======Get-in-touct=======-->

  <!--=======Our Clients=======-->

  <!--=======Contact section=======-->

  <!--=======Footer=======-->

  <!--=======External scripts=======-->
</template>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  backdrop-filter: blur(20px);
  transition: 0.6s ease;
}
</style>
