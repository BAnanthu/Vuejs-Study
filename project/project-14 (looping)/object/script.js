//component
const app = Vue.createApp({
    data() {
        return {
            object:{
                content:"item1 here",
                content:"item2 here",
            }
        }
    },
})

//vue app 
const appInstance = app.mount('#app')
