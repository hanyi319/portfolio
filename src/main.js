import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

createApp(App).mount("#app");
