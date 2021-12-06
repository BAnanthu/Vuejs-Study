
const app = Vue.createApp({
    data(){
        return {
           location:"top",

        }
    },
    
})

app.directive("arguments",{
  mounted(el,binding){
    el.style.position = "fixed"
    const locationArgument = binding.arg || "bottom"
    el.style[locationArgument] = binding.value + "px"
  }
})




//vue app 
const appInstance = app.mount('#app')
 