<template>
  <div class="nav-bar">
    <a href="#" class="logo">韩毅</a>
    <div class="navigation">
      <div class="nav-items">
        <a href="#home">首页</a>
        <a href="#about">关于</a>
        <a href="#skills">技能</a>
        <a href="#projects">项目</a>
        <a href="#contact">联系</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav-bar {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(4rem + 1rem);
  width: 100%;
  padding: 0 40px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.6s ease;

  > .logo {
    font-size: 1.3em;
    font-weight: 600;
    color: var(--first-color);
  }

  .nav-items {
    > a {
      font-size: var(--normal-font-size);
      font-weight: 500;
      color: var(--first-color);
    }

    > a:not(:last-child) {
      margin-right: 50px;
    }

    > a:hover {
      color: var(--second-color);
    }
  }
}
</style>
