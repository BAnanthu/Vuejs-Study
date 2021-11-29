//component
const app = Vue.createApp({
    data() {
        return {
            object:{
                breed:"Retriever",
                owner:"No owner",
            }
        }
    },
})

//vue app 
const appInstance = app.mount('#app')
