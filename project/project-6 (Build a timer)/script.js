//component
const FistVueApp = {
    data() {
        return {
            time:0,
            onHover:"TIMER"
        }
    },
    mounted() {
        setInterval(()=>{
            this.time++
        },1000)
    },
}

//vue app 
Vue.createApp(FistVueApp).mount('#app')
