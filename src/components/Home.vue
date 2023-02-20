<template>
  <div>
    <div class="home-container">
      <div class="home-content">
        <div class="media-icons">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
        <div class="info">
          <h2>你好，我是<span>韩毅</span></h2>
          <h3>一个练习时长半年的前端新手</h3>
          <p>略懂编程，喜欢研究前端视觉化与交互动效实现。</p>
          <a href="" class="btn">联系我 <i class="fas fa-arrow-circle-right"></i></a>
        </div>
      </div>
      <div class="home-img">
        <img src="../assets/images/avatar.jpg" alt="头像" />
      </div>
    </div>
    <a href="#about" class="scroll-down"><i class="fas fa-arrow-down"></i></a>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > .home-content {
    display: flex;

    > .media-icons {
      display: flex;
      flex-direction: column;
      margin-left: 50px;
      margin-right: 50px;

      > a {
        margin: 10px 0;
        font-size: 1.5em;
        color: var(--second-color);
      }

      > a:hover {
        color: var(--hover-color);
      }
    }

    > .info {
      > h2 {
        font-size: 4em;
        font-weight: 600;
        line-height: 70px;

        > span {
          color: var(--second-color);
        }
      }

      > h3 {
        color: var(--third-color);
        font-feature-settings: 1.3em;
        font-weight: 600;
        line-height: 50px;
      }

      > p {
        max-width: 500px;
        font-size: var(--normal-font-size);
        color: var(--third-color);
      }

      > .btn {
        display: inline-block;
        padding: 10px 20px;
        margin-top: 25px;
        border-radius: 10px;
        font-size: var(--normal-font-size);
        font-weight: 500;
        letter-spacing: 1px;
        color: #fff;
        background: var(--second-color);
      }

      > .btn:hover {
        background: var(--hover-color);
      }
    }
  }

  > .home-img {
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      max-width: 300px;
      border-radius: 50%;
    }
  }
}

.scroll-down {
  margin-top: 100px;
  font-size: var(--normal-font-size);
  font-weight: 500;
  color: var(--first-color);

  > i {
    font-size: 1.2em;
    color: var(--second-color);
    animation: arrow-down ease 2s infinite;
  }
}

@keyframes arrow-down {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(10px);
  }
}
</style>
