//component
const FistVueApp = {
    data() {
        return {
            htmlContent:"<span style='color:blue'>Hello world</span>"
            
        }
    },
}

//vue app 
Vue.createApp(FistVueApp).mount('#app')
