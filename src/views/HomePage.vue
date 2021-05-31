<template>
  <div>
    <h1>Scolit</h1>
    <CreateParty></CreateParty>
  </div>
</template>

<script>
import CreateParty from "../components/CreateParty.vue"
export default {
  name: "HomePage",
  components: {
      CreateParty,
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped></style>
