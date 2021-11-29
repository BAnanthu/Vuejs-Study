
const app = Vue.createApp({
    data(){
        return{
            someValue:"Created"
        }
    },
    //this is one type of lifecycle stage, there are many more.
    // only going to work when vue app is created
    created() {
        console.log(this.someValue);
    },

})
