



//component
const app = Vue.createApp({
    data(){
        return {
          count:'red'

        }
    },
  
})


//Creating Custom Directives
app.directive('focus', {

  
  // When the bound element is inserted into the DOM...
  mounted: function (el,binding,vnode) {
    // Focus the element
    console.log("bind");
    console.log(binding);
    el.style.color=binding.arg
    console.log(el);
    console.log(vnode);
    
  }
});
// apps global component 
app.component("first-comp",{
 
  template:`
  <div class="navigation">Homepage information</div>
  `
})




//vue app 
const appInstance = app.mount('#app')
 

// Name of Directive
{/* <app-navigation v-sticky></app-navigation> */}

// Passing Values to Directive
// <div v-if="isVisible">Show this</div>
// <div v-color="'red'">Show this</div>


// Arguments
// Custom directives can take an “argument” denoted by a colon after the directive name
// <app-navigation v-sticky:bottom></app-navigation>


// Modifiers
// Modifiers are special postfixes denoted by a dot which indicate that
// a directive should be bound in some special way.
{/* <span v-format.underline>guide</span> */}




// You can use multiple modifiers on a directive by chaining them
{/* <span v-format.bold.highlight.underline>guide</span> */}










// Hooks for Directives
// Vue provides a series of hooks for custom directives. Each hook has the option of a few arguments. Here are the hooks that are available:
// bind — this occurs once when the directive is attached to the element.
// inserted — this occurs once the element is inserted into the parent DOM
// update — this occurs when the element updates, but children haven't been updated yet
// componentUpdated — this occurs once the component and the children have been updated
// unbind — this occurs once the directive is removed
// Each of these has el, binding and vnode arguments available to them. These arguments are:
// el — the element the binding sits on
// binding — an object which contains the arguments that are passed into the hooks. There are many available arguments including name, value, oldValue, expression, arg and modifiers.
// vnode — allows you to refer directly to the node in the virtual DOM if you need to.
// Both binding and vnode should be treated as read-only.
// update and componentUpdated both expose an additional argument called oldvnode. The oldvnode argument is used to differentiate between the older value passed and the newer value.
// Bind and update are the most useful of the five.