import { createApp } from 'vue';
import {createRouter , createWebHistory} from 'vue-router'

import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue' 

import App from './App.vue';

const app = createApp(App)
const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/' , redirect : '/teams'}, 
        {name : 'teams' , path : '/teams' , component : TeamsList , children : [
            { name:'team-members' , path : ':teamId' , component : TeamMembers , props : true }, // teams/t1
        ]  }, 
        {path : '/users' , component : UsersList},
        {path : '/:notFound(.*)' , component: NotFound }
    ] 
}) ;

app.use(router);
app.mount('#app');
