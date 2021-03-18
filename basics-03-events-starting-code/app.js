const app = Vue.createApp({
  data() {
    return {
      counter: 50,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    resetInput(){
      this.name='';
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
