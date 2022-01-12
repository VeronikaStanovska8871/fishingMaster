<template>
  <main class="flex flex-row bgProducts loginbg m-auto mt-4 justify-start lg:justify-start md:m-auto md:justify-center">
      <img src="../assets/loginside.svg" alt="" class="lg:flex -ml-1 -mt-0.5 hidden">
      <img src="../assets/rod.svg" alt="" class="lg:absolute lg:flex w-96 hidden">
      <div class="flex flex-col sm:my-12 -mt-8 m-auto signUPBG w-2/3 items-center">
        <h1 class="mainText bluecolor mainStroked md:text-3xl text-xl text-center mt-10 lg:mt-0">SIGN UP</h1>
       <form @submit.prevent="submitForm" method="post" class="flex flex-col ">
        <label for="email" class="secondaryText font-semibold text-lg mt-6">EMAIL</label>
        <input v-model="email" type="email" name="email" id="email" class="secondaryText text-sm py-2 w-64 input text-left overflow-auto" > 
        <img src="../assets/emaiil.svg" alt="" class="absolute w-12 mt-10 ml-52">
        <label for="password" class="secondaryText font-semibold text-lg mt-6">PASSWORD</label>
        <input v-model="password" type="password" name="password" id="password" class="secondaryText text-sm py-2 lg:w-64 input text-left overflow-auto">
        <img src="../assets/password.svg" alt="" class="absolute w-12 lg:mt-36 mt-32 ml-52">
        <label for="repeatPassword" class="secondaryText font-semibold  text-lg mt-6">REPEAT PASSWORD</label>
        <input v-model="repeatPassword" type="password" name="repeatPassword" id="repeatPassword" class="secondaryText text-sm py-2 lg:w-64 input text-left overflow-auto" >
        <h6 class="mt-4 bluecolor" v-if="message">{{message}}</h6>
        <button type="submit" class="mt-20 bg-yellow-200 py-4 rounded-3xl mainText font-bold buttonOrange transform duration-200 hover:scale-105 mb-10 lg:mb-0">Submit</button>
       </form>
      </div>
    

  </main>
</template>
<script>
import axios from "axios"
import eventServices from "./services/EventServices"
export default {
 name: 'SignUp', 
 headers:{
    "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  },
  data(){
    return{
      form:{
        email: '',
        password: '',
        repeatPassword: ''
      },
      message: ''
    }
  },
  methods:{
    submitForm(){
      axios.post('http://localhost:8083/user/create',{
       email: this.email,
       password: this.password,
       repeatPassword: this.repeatPassword
     })
     .then(response =>{
       this.message = response.data.message
       const timeout =  setTimeout(() => {
          this.$router.push('/login')
       },10000)
    
     })
    .catch(error => {
      console.log(error)
    })
    }
    
  }

}
</script>
