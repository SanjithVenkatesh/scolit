<template>
  <div>
    <h1 class="text-center text-5xl">Scolit</h1>
    <CreateParty></CreateParty>
  </div>
</template>

<script>
import CreateParty from "../components/CreateParty.vue";
export default {
  name: "HomePage",
  components: {
    CreateParty
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped></style>
