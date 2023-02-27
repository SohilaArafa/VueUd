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



        <v-btn icon>
          <v-icon>mdi-delete</v-icon>
        </v-btn>

      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-card 
              title="Enter your new task"
              >
              <input class="ma-4"   />
              <v-sheet class="float-right">
              <v-btn
                class="ma-2" color="primary"
              >
              Add
              <v-icon
                end
                icon="mdi-checkbox-marked-circle"
              ></v-icon>
            </v-btn>
          </v-sheet>
          </v-card>
          <v-divider></v-divider>
          <v-row dense>
            <v-col
              v-for="n in 2"
              :key="n"
              cols="12"
            >
              <v-card
                :title="`Content ${n}`"
                :subtitle="`Subtitle for Content ${n}`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                
              >
              <v-btn icon class="ma-2" size="small">
                <v-icon >mdi-delete</v-icon>
              </v-btn>
              <v-sheet class="float-right">
              <v-btn
                class="ma-2"
              >
              Done
              <v-icon
                end
                icon="mdi-checkbox-marked-circle"
              ></v-icon>
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



<style scoped>
input{
  width: 90%;
  border: 2px solid rgba(19,84,122,.8);
  border-radius: 4px;
  
}
</style>