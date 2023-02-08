const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : ''
    };
  },

  methods:{ 
    increment(n) {
     this.counter = this.counter + n;
  },
    decrement(n) {
      this.counter = this.counter - n;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submotForm() {
      alert('Submitted')
    }
}

});

app.mount('#events');
