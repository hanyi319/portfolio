<script setup>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
</script>

<template>
  <!--=======Scroll to top button=======-->

  <!--=======Light/Dark theme button=======-->

  <Header class="header" id="header" />
  <Home class="home flex-center" id="home" />
  <About class="about section" id="about" />
  <Skills class="skills section" id="skills" />

  <!--=======Skills section=======-->

  <!--=======Services section=======-->

  <!--=======Portfolio section=======-->

  <!--=======Get-in-touct=======-->

  <!--=======Our Clients=======-->

  <!--=======Contact section=======-->

  <!--=======Footer=======-->

  <!--=======External scripts=======-->
</template>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section {
  position: relative;
  width: 1150px;
  padding: 6rem 2rem 2rem;
  margin-left: auto;
  margin-right: auto;
}

.sub-section {
  position: relative;
  width: 1150px;
  padding: 6rem 0;
  margin-left: auto;
  margin-right: auto;
}

.sticky {
  height: calc(2.5rem + 1rem);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: var(--box-shadow);
}

.header {
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(20px);
  transition: 0.6s ease;
}

.home {
  position: relative;
  flex-direction: column;
  max-width: 1250px;
  min-height: 100vh;
  padding: 4rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
