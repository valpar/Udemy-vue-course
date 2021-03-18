const app = Vue.createApp({
  data() {
      return{
        courseGoalA: 'Finish the Vue course on Udemy!',
        courseGoalB: 'Become junior Front-end developer!',
        vueLink: 'https://vuejs.org/v2/guide/'
      };
  },
  methods: {
    outputGoal(){
      const randomNumber = Math.random();
      if (randomNumber < 0.5){
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount("#user-goal");
