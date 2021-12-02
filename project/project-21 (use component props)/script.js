//component
const app = Vue.createApp({})

// apps global component 
app.component("header-component",{
  props:["title","mytext"], //use html properties in vue
  template:`<h2> {{title}} {{mytext}}</h2>
  `
})



//vue app 
const appInstance = app.mount('#app')
 