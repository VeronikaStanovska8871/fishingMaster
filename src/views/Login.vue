<template>
  <main class="flex flex-row bgProducts loginbg m-auto mt-4 justify-start lg:justify-start md:m-auto md:justify-center">
      <img src="../assets/loginside.svg" alt="" class="lg:flex -ml-1 -mt-0.5 hidden">
      <img src="../assets/rod.svg" alt="" class="lg:absolute lg:flex w-96 hidden">
      <div class="flex flex-col sm:my-12 -mt-8 m-auto signUPBG w-2/3 items-center">
        <h1 class="mainText bluecolor mainStroked md:text-3xl text-xl text-center mt-10 lg:mt-0">LOGIN</h1>
       <form @submit.prevent="submitForm" method="post" class="flex flex-col ">
        <label for="email" class="secondaryText font-semibold text-lg mt-6">EMAIL</label>
        <input v-model="email" type="email" name="email" id="email" class="secondaryText text-sm py-2 w-64 input text-left overflow-auto" > 
        <img src="../assets/emaiil.svg" alt="" class="absolute w-12 mt-10 ml-52">
        <label for="password" class="secondaryText font-semibold text-lg mt-6">PASSWORD</label>
        <input :type="passwordFieldType" v-model="password" type="password" name="password" id="password" @click="switchVisibility()" class="secondaryText text-sm py-2 lg:w-64 input text-left overflow-auto">
        <button type="password" v-on:click="switchVisibility"><img src="../assets/eye.svg" class="absolute w-12 -mt-12 ml-52"></button>
        <button type="submit" class="mt-20 bg-yellow-200 py-4 rounded-3xl mainText font-bold buttonOrange transform duration-200 hover:scale-105 mb-10 lg:mb-0">LOGIN</button>
       </form>
      </div>
    

  </main>
</template>
<script>
import axios from "axios"
export default {
 name: 'Login', 
 headers:{
    "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  },
  data(){
    return{
        email: '',
        password: '',
    }
  },
  methods:{
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
      event.preventDefault()
    },
    submitForm(){
      axios.post('http://localhost:8083/user/login',{
       email: this.email,
       password: this.password,
     })
     .then(response =>{
       localStorage.setItem('token', response.data.token);
       localStorage.setItem('idPerson', response.data.idPerson);
       this.$router.push('/')
       console.log(response)
     })
    .catch(error => {
      console.log(error)
    })
    }
    
  }

}
</script>
