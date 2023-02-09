const getRandom = (min,max) => {
    return Math.floor(Math.random() * (max-min)+min) 
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 0
        }
    },
    computed : {
        monsterBarStyle() {
            return {width: this.monsterHealth + '%' };
        },
        playerBarStyle() {
            return {width: this.playerHealth + '%' };
        },
        activate() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods : {
        attackMonster() {
            const attackValue = getRandom(5,12);
            this.monsterHealth -= attackValue; 
            this.currentRound++;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandom(8,15);
            this.playerHealth -= attackValue; 
        },
        specialAttackMons() {
            const attackValue = getRandom(10,25);
            this.monsterHealth -= attackValue; 
            this.currentRound++;
            this.attackPlayer();
        }
    }
});

app.mount('#game');