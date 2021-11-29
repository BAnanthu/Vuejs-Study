//METHOD 1 ==============================================================================

//going to create a vue app instance
const app = Vue.createApp({})

//add  a component to app -- eg: called userInput anad get userInputComponent
app.component("UserInput",UserInputComponent)

//can also add directives to app -- eg: called blur and get BlurDirective
app.directives("blur",BlurDirective)

//can also use Pluging which can be accessed in whole app
app.use(LocalPlugin)

// ==============================================================================


    // OR 
    //We can also Chain all these...


//METHOD 2 ==============================================================================
// const app = Vue.createApp({})
// .component("UserInput",UserInputComponent)
// .directives("blur",BlurDirective)
// .use(LocalPlugin)
// ==============================================================================


// This is how to create a vue app instance