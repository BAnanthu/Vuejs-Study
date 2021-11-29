//component
const app = Vue.createApp({
    data() {
        return {
            inputText:''
            
        }
    },
})

//vue app 
const appInstance = app.mount('#app')

appInstance.addToString()
appInstance.addToString()
appInstance.addToString()
console.log(appInstance.sampleString);