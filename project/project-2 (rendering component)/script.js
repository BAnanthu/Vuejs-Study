//here we add our vue fuctionality

const RootComponent = {}

//set RootComponent as starting point of rendering
const app =Vue.createApp(RootComponent)

const rootComponentInstance = app.mount("#app")
// mount will get the div element with id app
// and mount div element with RootComponent
// any functionality in RootComponent will be accessible in div#app
// app.mount("#app") this will return a  rootComponentInstance also called component instance.


// this is how to start rendering component in vue......>>