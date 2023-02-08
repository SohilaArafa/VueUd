const { METHODS } = require("http");

const app = Vue.createApp({
    data(){
        return {
            courseGoal : 'learn vue',
            vueLink : 'https://vuejs.org/guide/introduction.html#api-styles'
        }
    },

    methods: outputGoal()
});

app.mount('#user-goal');