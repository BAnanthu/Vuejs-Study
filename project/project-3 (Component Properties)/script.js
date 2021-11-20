//how to set proprerties of componts in vue
// that way we can use properties


//here we are not only making app. also makeing component that alow to put data.
// const app is the component
// basic structure of component
const app = Vue.createApp({
    data(){
        return{
            //property --> component-proprty
            valueToReturn:100
        }
    }

})

const appInstance = app.mount('#app')

console.log(appInstance.valueToReturn);


// The data property
//  The data property in root Vue instances is an object,
//  The data property in Vue components must be a function