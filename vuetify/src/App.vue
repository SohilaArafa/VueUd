<script setup>
import SideBar from './components/SideBar.vue';
import ImageGallery from './components/ImageGallery.vue';
import {ref} from 'vue';

const isColored = ref(true) 
const onSelectOption = (isColor) => {
  isColored = isColor;
}

</script>

<template>
<div>
<v-app>
  <!--SIDEBAR-->
  {{isColored}}
  <SideBar  @selectOption="onSelectOption"  />
  <v-main>
    <!--cards-->
    <ImageGallery/>
  </v-main>
</v-app>
</div>
</template>


