<template>
  <div class="bg-forest-500 text-landers-500 h-full min-h-screen">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <transition name="page-wrapper">
      <router-view name="basicWrapper" class="basic-wrapper"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      credentials: null
    };
  },
  components: {},
  methods: {},
  created() {}
};
</script>

<style scoped src="@/assets/tailwind.css"></style>
