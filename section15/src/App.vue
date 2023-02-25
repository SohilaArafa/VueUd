<template>
<div>
  <base-container title="Vuex"></base-container>
  <the-counter-vue></the-counter-vue>
  <button @click="addOne" >Add 1</button>
</div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounterVue from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounterVue
  },

  methods: {
    addOne() {
      this.$store.state.counter++;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>