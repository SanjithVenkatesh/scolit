import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import store from "./store";
import AV from "leancloud-storage";
// const AV = require("leancloud-storage/live-query");
AV.init({
  appId: "Xm5Fbv0v0hpjeD2aMyvlSNy4-MdYXbMMI",
  appKey: "3GMTrHrgmIqSDDrstR2oIf0m",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");