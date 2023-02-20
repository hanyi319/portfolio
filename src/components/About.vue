<template>
  <div class="container flex-center">
    <h1 class="section-title-01">关于我</h1>
    <h1 class="section-title-02">关于我</h1>
    <div class="content flex-center">
      <div class="about-img">
        <img src="../assets/images/about-img.jpg" alt="关于我" />
      </div>
      <div class="about-info">
        <div class="description">
          <h3>既是程序员，也是旅行者</h3>
          <h4>目前在上海从事<span>前端开发</span></h4>
          <p>
            毕业于南昌航空大学通信工程专业，焊过电路板，做过图像处理，同时也爱玩游戏，着迷于其中的人文艺术。虽然毕业后在考研上看似徒劳两年，但是也让我反思了良多。悟已往之不谏，知来者之可追。希望自己能在前端、编程领域探寻更多可能，就像玩游戏一样，点亮技能树，开启新地图。
          </p>
        </div>
        <ul class="professional-list">
          <li class="list-item">
            <h3>1+</h3>
            <span>工作经验</span>
          </li>
          <li class="list-item">
            <h3>6+</h3>
            <span>项目经历</span>
          </li>
          <li class="list-item">
            <h3>73+</h3>
            <span>博客分享</span>
          </li>
        </ul>
        <a href="http://hanyi319.gitee.io/cv/" class="btn"
          >下载简历 <i class="fas fa-download"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  flex-direction: column;

  > .section-title-01 {
    margin-bottom: 2rem;
    font-size: 4.5em;
    font-weight: 800;
    color: linear-gradient(to top, transparent 0%, var(--first-color) 70%);
    --webkit-background-flip: text;
    --webkit-text-fill-color: transparent;
    opacity: 0.1;
  }

  > .section-title-02 {
    font-size: 2.5em;
    font-weight: 700;
    transform: translateY(-80px);
  }

  > .section-title-02:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 5px;
    right: 0;
    bottom: 0;
    background: var(--second-color);
  }

  > .content {
    column-gap: 40px;
    width: 100%;

    > .about-img {
      position: relative;

      > img {
        max-width: 500px;
        border-radius: 10px;
      }
    }

    > .about-info {
      > .description {
        max-width: 600px;

        > h3 {
          margin-bottom: 10px;
          font-size: 2em;
          font-weight: 600;
        }

        > h4 {
          margin-bottom: 10px;
          font-size: 1.3em;
          font-weight: 600;

          > span {
            color: var(--second-color);
          }
        }

        > p {
          padding-bottom: 25px;
          margin-bottom: 15px;
          border-bottom: 2px solid var(--line-color);
          font-size: var(--normal-font-size);
          color: var(--third-color);
        }
      }

      > .professional-list {
        display: flex;
        column-gap: 50px;

        > .list-item {
          > h3 {
            font-size: 2.5em;
            font-weight: 700;
          }

          > span {
            font-size: var(--small-font-size);
            color: var(--third-color);
          }
        }
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
    }
  }
}
</style>
