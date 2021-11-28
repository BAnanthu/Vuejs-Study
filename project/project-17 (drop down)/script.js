//component
const app = Vue.createApp({
    data() {
        return {
            selected:'choose',
            options:[
                {text:"one 1",value:'one'},
                {text:"two 2",value:'two'}
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