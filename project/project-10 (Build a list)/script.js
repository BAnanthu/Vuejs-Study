//component
const FistVueApp = {
    data() {
        return {
            Text:"My List",
            listItems:[
                "apple",
                "grapes",
                "banana"
            ],
            listObjects:[
                {name:'hari',age:25},
                {name:'rahul',age:27},
                {name:'jithin',age:24}
            ]
        }
    },
}

//vue app 
Vue.createApp(FistVueApp).mount('#app')
