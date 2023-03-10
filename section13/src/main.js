import { createApp } from 'vue';
import {createRouter , createWebHistory} from 'vue-router'

import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue' 
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'


import App from './App.vue';

const app = createApp(App)
const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/' , redirect : '/teams'}, 
        {name : 'teams' , path : '/teams' , 
        components : {default : TeamsList , footer : TeamsFooter} , 
        children : [
            { name:'team-members' , path : ':teamId' , component : TeamMembers , props : true }, // teams/t1
        ]  }, 
        {path : '/users' , components : {default : UsersList , footer : UsersFooter} },
        {path : '/:notFound(.*)' , component: NotFound }
    ] ,
    scrollBehavior(_,_2,savedPosition) {
        //console.log(to,from,savedPosition)
        if(savedPosition)
            return savedPosition;
        return {left : 0 , top : 0}
    }
}) ;

router.beforeEach( (to,from,next) => {
    console.log('Global Before Each')
    console.log(to,from);
    if(to.name === 'team-members') {
        next();
    } else {
        next({ name : 'team-members' , params: { teamId : 't2'} })
    }
  //  next(false); //cancelling all navigations
} )

app.use(router);
app.mount('#app');
