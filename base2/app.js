const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmName : ''
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
    submitForm() {
      alert('Submitted')
    },
    confirm() {
      this.confirmName = this.name;
    }
}

});

app.mount('#events');
