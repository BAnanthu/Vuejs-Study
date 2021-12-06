const cards = [
  {
    title:"Vue",
    link:{
      url:"https://vue.org",
      src:"http://vuejs.org/images/logo.png"
    },
    text:"text data here......"
  },
  {
    title:"React",
    link:{
      url:"https://reactjs.org",
      src:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    text:"text data here......"
  },
  {
    title:"Angular",
    link:{
      url:"https://angular.io",
      src:"https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png.webp"
    },
    text:"text data here......"
  },
]


//component
const app = Vue.createApp({
    data(){
        return {
           cards,

        }
    },
    
})



app.component("cards-components",{
  props:['title','link','text'],
  template:`
  <div class="card">
  <h2> {{ title }} </h2>
  <img :src="link.src" width="200">
  <a :href="link.url">Go to web</a>
  <p>{{ text }}</p>

  </div>
  `
})




//vue app 
const appInstance = app.mount('#app')
 