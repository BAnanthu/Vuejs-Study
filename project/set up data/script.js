
const app = Vue.createApp({
    data(){
        return {
          loading: true,
          items:undefined
        }
    },
    created() {
      this.getData();
    },
    mounted () {
      axios
        .get('https://reqres.in/api/users?page=2')
        .then((response) =>{+
          console.log(this.items);
          this.items=response.data.data,
          console.log(response.data.data)
          this.loading = false
        })
    },
    methods:{
      getData(){console.log(this.items);}
    },
     updated(){
      console.log("updating...");
      
    }
    
})



//vue app 
const appInstance = app.mount('#app')
 

