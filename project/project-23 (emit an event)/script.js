//component
const app = Vue.createApp({
    data(){
        return {
            headers:[
                {id:1, title:"my first header"},
                {id:2, title:"my 2nd header"},
                {id:3, title:"my 3rd header"}
            ],
            headerFontSize:1
        }
    },
})

// apps global component 
app.component("header-component",{
  props:['title'],
  template:
  `
  <div class="header-component"  style="color:blue;">
    <h2> {{ title }} </h2>
    <button @click="$emit('increase-text-size')">Increase Text Size</button>
  </div>
  `
})



//vue app 
const appInstance = app.mount('#app')
 