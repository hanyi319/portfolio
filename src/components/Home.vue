<template>
  <div>
    <div class="home-container">
      <div class="home-content">
        <div class="media-icons">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
        <div class="info">
          <h2>你好，我是韩毅</h2>
          <h3>前端开发工程师</h3>
          <p>致力于帮助你以最直观、最快速的方式学会前端开发，并希望我的个人经历对你有所启发。</p>
          <a href="" class="btn">联系我 <i class="fas fa-arrow-circle-right"></i></a>
        </div>
      </div>
      <div class="home-img">
        <div><img src="../assets/images/avatar.jpg" alt="头像" /></div>
      </div>
    </div>
    <a href="#about" class="scroll-down"><i class="fas fa-arrow-down"></i></a>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.home-content {
  display: flex;
}

.home-container .media-icons {
  display: flex;
  flex-direction: column;
  margin-right: 40px;
}

.home-container .media-icons a {
  font-size: 1.5em;
  margin: 10px 0;
  color: var(--second-color);
}

.home-container .media-icons a:hover {
  color: var(--hover-color);
}

.home-container .info h2 {
  font-size: 4em;
  font-weight: 600;
  line-height: 70px;
}

.home-container .info h3 {
  color: var(--third-color);
  font-feature-settings: 1.3em;
  font-weight: 600;
  line-height: 50px;
}

.home-container .info p {
  color: var(--third-color);
  font-size: var(--normal-font-size);
  max-width: 350px;
}

.btn {
  background: var(--second-color);
  color: #fff;
  font-size: var(--normal-font-size);
  font-weight: 500;
  display: inline-block;
  margin-top: 25px;
  padding: 10px 20px;
  letter-spacing: 1px;
  border-radius: 10px;
}

.btn:hover {
  background: var(--hover-color);
}

.home-container .home-img {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-container .home-img img {
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
}

.home .scroll-down {
  color: var(--first-color);
  font-size: var(--normal-font-size);
  font-weight: 500;
  margin-top: 50px;
}

.home .scroll-down i {
  color: var(--second-color);
  font-size: 1.2em;
  animation: arrow-down ease 2s infinite;
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
