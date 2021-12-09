
const app = Vue.createApp({
    data(){
        return {
         newTask:"",
         tasks:[],
         nextTaskId:1
        }
    },
    methods:{
      addNewTask(){
        this.tasks.push({
          id:this.nextTaskId++,
          title:this.newTask
        })
        this.newTask = ""
        console.log(this.tasks);
      }
    }
    
})

app.component("todo-item",{
  
  props:["title"],
  template:`
  <li> {{title}} <button @click="$emit('remove')">Remove Task</button>
  `
})



//vue app 
const appInstance = app.mount('#app')
 