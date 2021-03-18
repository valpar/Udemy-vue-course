const app = Vue.createApp({
    data(){
        return{
            name: 'Valmar',
            age: 24,
            imgUrl: 'https://images.pexels.com/photos/6320601/pexels-photo-6320601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        };
    },
    methods: {
        calcAge(){
            return this.age + 5;
        },
        calcRandom(){
            return Math.random();
        }
    }
});

app.mount('#assignment');