<template>
  <div>
    <h1>TODO LIST</h1>
    <p>{{message}} {{counter}}</p>
    <button v-on:click="counter += 1">Click me</button>
    <button v-on:click="greet">Click greet me</button>
    <button v-on:click="say('you are welcome')">Say hi</button>
    <button v-on:click="say('what\'sup')">Say what</button>
    <button v-on:click="domevent($event)">Pass DOM event</button>
  </div>
</template>

<script>
export default{
  name:'Todo',
  data() {
    return {
        counter:0
    }
  },
  props:{
    message:String,
  },
  methods: {
    greet:(event)=>{
      alert("hello")
      if (event) {
        alert(event.target.tagName)
      }
    },
    say:(msg)=>{
      alert("message is:  " + msg)
    },
    domevent:(event)=>{
       console.log(event);
       event.preventDefault()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    color:orangered;
  }
</style>
