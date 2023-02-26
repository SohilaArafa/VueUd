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
        <v-list-item prepend-icon="mdi-image" title="Color Gallery" value="color"></v-list-item>
        <v-list-item prepend-icon="mdi-dialpad" title="GraySpace Gallery" value="shared"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
     </v-list>

    </v-navigation-drawer>
</template>