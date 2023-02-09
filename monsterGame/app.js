const getRandom = (min,max) => {
    return Math.floor(Math.random() * (max-min)+min) 
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 0,
            winner : null
        }
    },
    computed : {
        monsterBarStyle() {
            if(this.monsterHealth < 0) {
                return {width: '0%' };
            }
            return {width: this.monsterHealth + '%' };
        },
        playerBarStyle() {
            if(this.playerHealth < 0) {
                return {width: '0%' };
            }
            return {width: this.playerHealth + '%' };
        },
        activate() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch : {
        playerHealth(val) {
            if(val <= 0 && this.monsterHealth <=0) {
                this.winner = "draw";
            } else if(val <= 0) {
                this.winner = "monster";
            }
        },
        monsterHealth(val) {
            if(val <= 0 && this.playerHealth <=0) {
                this.winner = "draw";
            } else if(val <= 0) {
                this.winner = "player"
            }
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
        },
        healPlayer() {
            const heal = getRandom(8,20) ;
            this.currentRound++;
            if(this.playerHealth + heal >= 100) {
                this.playerHealth = 100;
            }
            else {
                this.playerHealth += heal;
            }

            this.attackPlayer(); 
        },
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;            
        },
        surrender() {
            this.winner = "monster";
        }
    }
});

app.mount('#game');