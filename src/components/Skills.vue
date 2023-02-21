<template>
  <div class="container flex-center">
    <h1 class="section-title-01">技术栈</h1>
    <h2 class="section-title-02">技术栈</h2>
    <div class="skills-info">
      <div>
        <h4><label>教育背景</label></h4>
        <div class="experience-card">
          <div class="upper">
            <div class="logo">
              <img src="../assets/images/NCHU.jpg" alt="学校" />
              <h3>南昌航空大学</h3>
            </div>
            <h5>通信工程</h5>
            <span>2016.9 - 2020.6</span>
          </div>
          <div class="hr"></div>
          <p>● 专业成绩前 20%</p>
          <p>● 曾获校级奖学金</p>
          <p>● 曾获数学建模省奖</p>
          <p>● 拥有英语六级证书</p>
        </div>
      </div>
      <div>
        <h4><label>工作经历</label></h4>
        <div class="experience-card">
          <div class="upper">
            <div class="logo">
              <img src="../assets/images/Meta.png" alt="公司" />
              <h3>元时空智能科技</h3>
            </div>
            <h5>嵌入式软件开发工程师</h5>
            <span>2022.4 - 2022.7</span>
          </div>
          <div class="hr"></div>
          <p>● 作为 OPPO 与元时空联合培养骨干力量，承接 OPPO 手机影像开发工作</p>
          <p>● 负责高通或 MTK 平台 OPPO 手机影像驱动程序开发、移植、调试与优化，以及影像效果调试</p>
        </div>
      </div>
      <div>
        <h4><label>正在学习的技术</label></h4>
        <ul class="bars">
          <li class="bar">
            <div class="info">
              <span><i class="fa-brands fa-square-js"></i> JavaScript</span>
              <span>ES6</span>
            </div>
            <div class="line js"></div>
          </li>
          <li class="bar">
            <div class="info">
              <span><i class="fa-brands fa-square-js"></i> TypeScript</span>
              <span>4</span>
            </div>
            <div class="line ts"></div>
          </li>
          <li class="bar">
            <div class="info">
              <span><i class="fa-brands fa-vuejs"></i> Vue</span>
              <span>3</span>
            </div>
            <div class="line vue"></div>
          </li>
          <li class="bar">
            <div class="info">
              <span><i class="fa-brands fa-react"></i> React</span>
              <span>18</span>
            </div>
            <div class="line react"></div>
          </li>
          <li class="bar">
            <div class="info">
              <span><i class="fa-brands fa-node-js"></i> Node.js</span>
              <span>18</span>
            </div>
            <div class="line node"></div>
          </li>
        </ul>
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

  .skills-info {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    max-width: 100%;
    margin: 0 auto 80px;

    h4 {
      margin-bottom: 20px;

      > label {
        font-size: 1.5em;
        font-weight: 600;
      }
    }

    .experience-card {
      padding: 35px;
      border-radius: 5px;
      border-bottom: 3px solid var(--second-color);
      background: var(--card-bg-color);
      box-shadow: var(--box-shadow);
      transition: 0.3s ease;

      > .upper {
        line-height: 30px;

        > .logo {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          > img {
            width: 1.5em;
            height: 1.5em;
            margin-right: 8px;
          }

          > h3 {
            font-size: 1.3em;
            font-weight: 700;
          }
        }

        > h5 {
          font-size: var(--small-font-size);
          font-weight: 500;
        }

        > span {
          color: var(--third-color);
        }
      }

      > .hr {
        width: 100%;
        height: 2px;
        margin: 10px 0 22px;
        background: var(--line-color);
      }
    }

    .experience-card:hover {
      transform: scale(1.03);
    }

    .bar {
      padding: 20px;
      margin-bottom: 10px;
      border-radius: 5px;
      background: var(--card-bg-color);
      box-shadow: var(--box-shadow);
      transition: 0.3s ease;

      > .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        font-size: var(--small-font-size);

        > span {
          font-weight: 500;
        }
      }

      > .line {
        position: relative;
        width: 100%;
        height: 7px;
        border-radius: 2px;
        background: #c5cadf;
      }

      > .line:before {
        content: "";
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 2px;
        background: var(--second-color);
      }

      > .js:before {
        width: 60%;
      }

      > .ts:before {
        width: 30%;
      }

      > .vue:before {
        width: 50%;
      }

      > .react:before {
        width: 10%;
      }

      > .node:before {
        width: 10%;
      }
    }

    .bar:hover {
      transform: scale(1.03);
    }
  }
}
</style>
