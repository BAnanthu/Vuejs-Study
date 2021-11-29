//component
const FistVueApp = {
    data() {
        return {
            text:"Apple"
        }
    },
    methods: {
        checkIsPalindrom() {
            this.text = this.text.split("").reverse().join("")
        }
    },
}

//vue app 
Vue.createApp(FistVueApp).mount('#app')
