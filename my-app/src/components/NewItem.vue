<template>
  <v-card title="Enter your new task">
    <div>
      <v-text-field
        label="Title"
        hide-details="auto"
        v-model="enteredTitle"
      ></v-text-field>
      <v-text-field v-model="enteredDescription" label="Details"></v-text-field>
    </div>
    <v-sheet class="float-right">
      <v-btn class="ma-2" color="primary" @click="addData">
        Add
        <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
      </v-btn>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  emits: ["add-item"],
  data() {
    return {
      enteredTitle: "",
      enteredDescription: "",
    };
  },
  methods: {
    addData() {
      this.$emit("add-item", this.enteredTitle, this.enteredDescription);
      this.enteredDescription = "";
      this.enteredTitle = "";
    },
  },
};
</script>

<style scoped>
input {
  width: 90%;
  border: 2px solid rgba(19, 84, 122, 0.8);
  border-radius: 4px;
}
</style>
