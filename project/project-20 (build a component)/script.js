//component
const app = Vue.createApp({})

// apps global component 
app.component("my-first-component",{
    // setting data of the component
    data(){
        return {
            propertyName:0
        }
    },
    template:
    `
    <button v-on:click="propertyName++">
    Click {{propertyName}} times
    </button>
    
    `
})



//vue app 
const appInstance = app.mount('#app')
 