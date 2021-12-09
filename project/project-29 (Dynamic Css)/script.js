
const app = Vue.createApp({
    data(){
        return {
          isactive:true,
          isactive1:true
        }
    },
    computed:{
      getClasses:function() {
         return {
          bg:this.isactive,
          shadow:this.isactive1
         }
      }
    }
    
})



//vue app 
const appInstance = app.mount('#app')
 