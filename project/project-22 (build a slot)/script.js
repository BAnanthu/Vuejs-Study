//component
const app = Vue.createApp({})

// apps global component 
app.component("slot-component",{
  template:`
  <div>
  <p>this is my component. our template is dynamic</p>
  <slot></slot>
  <p>this is my component. our template is dynamic</p>
  </div>
  `
})



//vue app 
const appInstance = app.mount('#app')
 