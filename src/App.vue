<template>
<div class="backroundPage phoneBackgroundPage lg:m-3 px-14 text-black min-h-screen">
  <div class="flex flex-row pt-6">
    <img src="./assets/logo.svg" class="lg:flex lg:mx-0 lg:w-24 -mt-3 w-16" alt="">
  </div>
  <button  @click="menuIcon" class="w-6 flex float-right -mt-10 lg:hidden opacity-70"><img src=".\assets\hamburger.svg" ></button> 
  <div class="flex flex-row -mt-20 mb-6 justify-end md:mr-0">
  <nav class="flex lg:flex-row z-10 mx-auto phoneMenuBg mt-20 lg:mt-0 absolutePhone">
    <ul class="mainText lg:flex lg:flex-row flex-col hidden text-3xl mb-4" id="links">
      <router-link to="/" class="mx-8 my-4 lg:mt-0">HOME</router-link>
       <router-link to="/products" class="mx-8 my-4 lg:mt-0">PRODUCTS</router-link>
        <router-link to="/aboutUs" class="mx-8 my-4 lg:mt-0">ABOUT US</router-link>
         <router-link to="/contact" class="mx-8 my-4 lg:mt-0">CONTACT</router-link>
         <ul class="lg:hidden flex flex-col" >
          <router-link to="/login" v-if="isAuth" class="mx-8 my-4">LOGIN</router-link>
          <button v-else @click="logout" class="mainText text-2xl mainStroked hover:text-yellow-300">LOGOUT</button>
          <router-link to="/signup" class="mx-8 my-4">SIGN UP</router-link>
         </ul>
    </ul>
    
  </nav>
  <ul class="lg:flex flex-row mt-8 lg:mt-0">
      <li><a href=""><img src=".\assets\cart.svg" alt="" class="menuIcons lg:w-9 w-8 h-7  lg:h-9 lg:mr-2 mr-10"></a></li>
      <li><a @mouseover="upHere = true" @mouseleave="upHere = false" href=""><img src=".\assets\user.svg" alt="" class="menuIcons w-9 h-9 lg:flex hidden" ></a>
      <ul  @mouseover="upHere = true" @mouseleave="upHere = false" v-show="upHere" class="z-10  absolute bgUser -ml-24 text-center flex flex-col justify-around mt-2">
        <li v-if="isAuth"><router-link to="/login"  class="mainText text-2xl mainStroked hover:text-yellow-300">LOGIN</router-link></li>
        <li v-else><button @click="logout" class="mainText text-2xl mainStroked hover:text-yellow-300">LOGOUT</button></li>
        <li><router-link to="/signup" class="mainText text-2xl mainStroked hover:text-yellow-300">SIGN UP</router-link></li>
        </ul></li>
    </ul>
</div>
  <router-view/>
</div>
  
</template>
<script>
import axios from "axios"
export default{
  headers:{
    "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  },
data(){
  return {
    upHere: false,
     token: null,
     message: ''
    } 
  },
  computed: {
    isAuth() {
        return !!this.token;
    }
  },
  methods:{
    menuIcon (){
       var x = document.getElementById("links");
       if (x.style.display === "flex") {
         x.style.display = "none";
       } else {
       x.style.display = "flex";
       }
    },
    logout(){
      axios.post('http://localhost:8083/user/logout',{
      token: this.token
     })
      .then(response =>{
       this.message = response.data.message
       console.log(this.token)
    
     })
     localStorage.removeItem('token');
    }
  },
  created() {
    this.token = window.localStorage.getItem('token');
  } 
}
</script>