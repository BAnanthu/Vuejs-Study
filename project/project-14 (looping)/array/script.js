//component
const app = Vue.createApp({
    data() {
        return {
            items:[
                {content:"item1 here"},
                {content:"item2 here"},
            ]
            
        }
    },
})

//vue app 
const appInstance = app.mount('#app')

appInstance.addToString()
appInstance.addToString()
appInstance.addToString()
console.log(appInstance.sampleString);