<script setup>
import SideBar from './components/SideBar.vue';
import ImageGallery from './components/ImageGallery.vue';
</script>

<template>
<div>
<v-app>
  <!--SIDEBAR-->
  <SideBar/>
  <v-main>
    <!--cards-->
    <ImageGallery/>
  </v-main>
</v-app>
</div>
</template>


