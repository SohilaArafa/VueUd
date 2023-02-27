<template>
  <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-icon icon="fa:fas fa-edit"></v-icon>
        </template>

        <v-app-bar-title>My Todo List</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="dialog = true">
          <v-icon>mdi-delete</v-icon>
        </v-btn>

        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="text-h5"> Delete ? </v-card-title>
              <v-card-text>
                Do you really want to delete all tasks?
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="dialog = false"> Cancel </v-btn>
                <v-btn color="blue darken-1" text @click="deleteAll"
                  >Delete</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <new-item @add-item="addItem"></new-item>
          <v-divider></v-divider>

          <v-row dense>
            <v-col v-for="item in items" :key="item.id" cols="12">
              <v-card :title="item.title" :subtitle="item.description">
                <v-btn
                  icon
                  class="ma-2"
                  size="small"
                  @click="deleteItem(item.id)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-sheet class="float-right">
                  <v-btn class="ma-2">
                    Done
                    <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
                  </v-btn>
                </v-sheet>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import NewItem from "./components/NewItem.vue";
export default {
  components: { NewItem },
  data() {
    return {
      items: [],
      dialog: false,
    };
  },
  computed: {},
  methods: {
    addItem(title, description) {
      const newItem = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        done: false,
      };
      if (newItem.title) this.items.push(newItem);
      else alert("You should enter a title");
      console.log(newItem);
    },

    deleteItem(itemID) {
      this.items = this.items.filter((item) => item.id !== itemID);
    },
    deleteAll() {
      console.log("deleteAll", this.items);
      this.items = [];
      this.dialog = false;
    },
  },
};
</script>
