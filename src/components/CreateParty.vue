<template>
  <div class="w-full flex justify-center items-center my-10">
    <form @submit.prevent="addParty">
      <div class="text-center mb-10">
        <div class="input wrapper items-center mb-10">
          <label class="font-semibold text-lg">Party Name</label>
        </div>
        <input
          class="h-8 rounded-lg outline-none p-2 justify-center text-gray-500"
          placeholder="Enter Party Name"
          type="text"
          v-model="party_name"
          required
        />
      </div>
      <div
        v-for="(hack, index) in hacks"
        :key="`phoneInput-${index}`"
        class="input wrapper flex items-center justify-center text-center mb-10"
      >
        <label class="font-semibold text-lg mr-2">Name</label>
        <input
          type="text"
          v-model="hack.name"
          class="h-8 rounded-lg outline-none p-2 mr-2 text-gray-500 "
          placeholder=" Enter Name"
          required
        />
        <label class="font-semibold text-lg mr-2">Email</label>
        <input
          type="text"
          v-model="hack.email"
          class="h-8 rounded-lg outline-none p-2 mr-2 text-gray-500"
          placeholder=" Enter Email"
          required
        />
        <font-awesome-icon
          v-show="hacks.length > 1"
          class="mr-2"
          @click="removeField(index, hacks)"
          icon="minus-circle"
          style="color: red"
        />
        <font-awesome-icon
          v-show="index == hacks.length - 1"
          @click="addField(hack, hacks)"
          icon="plus-circle"
          style="color: #798777"
        />
      </div>
      <div class="justify-center text-center">
        <button type="submit" class="border-2 p-2 border-landers-500">
          Add Party
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import AV from "leancloud-storage";
export default {
  name: "CreateParty",
  data() {
    return {
      hacks: [{ name: "", email: "" }],
      party_name: ""
    };
  },
  create() {},
  methods: {
    addParty() {
      const vm = this;
      var new_party = new AV.Object("Party");
      new_party.set("name", vm.party_name);
      new_party.save().then(
        function(newParty) {
          alert("party saved!" + newParty);
          vm.hacks.forEach((hack) => {
            vm.saveHack(hack, newParty);
          });
        },
        function(error) {
          alert(error);
        }
      );
    },
    addField(value, fieldType) {
      fieldType.push({ value: "" });
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },
    saveHack(hack, party) {
      var new_hack = new AV.Object("HackInParty");
      new_hack.set("name", hack.name);
      new_hack.set("email", hack.email);
      new_hack.set("PartyAttending", party);
      new_hack.save().then(
        () => {
          console.log("Hack saved!");
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
