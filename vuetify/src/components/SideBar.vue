<template>
    <v-navigation-drawer
    expand-on-hover
    rail
    >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sohila Arafa"
        subtitle="sohila@gmail.com"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-image" title="Color Gallery" value="color" @click="selectOption(true)" ></v-list-item>
        <v-list-item prepend-icon="mdi-dialpad" title="GraySpace Gallery" value="shared" @click="selectOption(false)"></v-list-item>
     </v-list>

    </v-navigation-drawer>
</template>

<script>
import {defineEmits} from 'vue';

const emits = defineEmits(['selectOption']);
const selectOption = (isColor) => {
  emits('selectOption', isColor)
}

</script>