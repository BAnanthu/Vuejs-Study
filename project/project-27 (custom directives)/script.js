
const app = Vue.createApp({
    data(){
        return {
           message:"sample with argument",

        }
    },
    
})

app.directive("arguments",{
  mounted(el,binding,vnode){
    el.innerHTML = "value: " + JSON.stringify(binding.value) + "<br>" +
     "argument: " + JSON.stringify(binding.arg) + "<br>" + "modifiers: " + JSON.stringify(binding.modifiers)
  }
})




//vue app 
const appInstance = app.mount('#app')
 