const tabs = [
  {
    name:"Homepage",
    component:{
      template:`<div>Home information</div>`
    },
  },
  {
    name:"Productpage",
    component:{
      template:`<div>Produc information</div>`
    },
  },
  {
    name:"Contactpage",
    component:{
      template:`<div>Contact information</div>`
    },
  }
]


//component
const app = Vue.createApp({
    data(){
        return {
           currentTab:tabs[0],
           tabs,

        }
    },
    //property
    // for any complex logic, you should use a computed property.
    // computed:{
    //   currentTabComponent(){
    //     return "tab-" + this.currentTab.toLowerCase()
    //   }
    // }
})

// apps global component 
// app.component("tab-homepage",{
//   template:`
//   <div class="navigation">Homepage information</div>
//   `
// })

// app.component("tab-products",{
//   template:`
//   <div class="navigation">Products information</div>
//   `
// })

// app.component("tab-contact",{
//   template:`
//   <div class="navigation">Contact information</div>
//   `
// })




//vue app 
const appInstance = app.mount('#app')
 