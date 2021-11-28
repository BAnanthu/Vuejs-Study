//component
const app = Vue.createApp({
    data() {
        return {
            sampleString:'welcome '
            
        }
    },
    methods: {
        addToString(){
            this.sampleString += "Hello "
        }
    },
})

//vue app 
const appInstance = app.mount('#app')

appInstance.addToString()
appInstance.addToString()
appInstance.addToString()
console.log(appInstance.sampleString);