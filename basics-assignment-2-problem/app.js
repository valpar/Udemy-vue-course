const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    alertBtn() {
      alert("User alerted on click!");
    },
    savedInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount("#assignment");
