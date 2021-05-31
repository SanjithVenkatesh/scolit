<template>
  <div>
    <form @submit.prevent="addParty">
      <span>Party Name</span>
      <div>
        <label
          ><input id="party_name" v-model="party_name" type="text" required
        /></label>
      </div>
      <button
        type="submit"
        class="primary"
      >
        Add Party
      </button>
    </form>
  </div>
</template>

<script>
import AV from "leancloud-storage";
export default {
  name: "CreateParty",
  data() {
    return {
      hack_emails: [],
      party_name: ""
    };
  },
  create() {},
  methods: {
    addParty() {
      const vm = this;
      var new_party = new AV.Object("Party");
      new_party.set("partt_name", vm.party_name);
      new_party.save().then(
        function(newParty) {
          alert("party saved!" + newParty);
        },
        function(error) {
          alert(error);
        }
      );
    }
  }
};
</script>

<style scoped></style>
