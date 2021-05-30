<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <transition name="page-wrapper">
      <router-view name="basicWrapper" class="basic-wrapper"></router-view>
    </transition>
  </div>
</template>

<script>
import getCredentials from "./main.js";
export default {
  name: "App",
  data() {
    return {
      credentials: null
    };
  },
  components: {},
  methods: {},
  created() {
    const vm = this;
    if (vm.credentials) {
      console.log("in created(), have credentials");
    } else {
      console.log("in created(), getting credentials....");
      vm.credentials = getCredentials();
    }
  }
};
</script>

<style>
* {
  font-family: "avenir next", sans-serif;
  font-weight: 400;
}
#wrapper {
  margin: 0px;
}
.dark {
  background-color: #121212;
  height: 100%;
  color: white;
  text-decoration-color: green;
}
.light {
  background-color: whitesmoke;
  min-height: 100%;
  text-decoration-color: black;
}
html,
body {
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
h1 {
  font-weight: 600;
  font-size: 18pt;
}
a {
  text-decoration: none;
}
</style>
