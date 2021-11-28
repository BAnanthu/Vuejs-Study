//component
const app = Vue.createApp({
    data() {
        return {
            value:0
            
        }
    },
})

//vue app 
const appInstance = app.mount('#app')



appInstance.value = 10
console.log(appInstance.$data.value)
appInstance.$data.value = 14
console.log(appInstance.value)