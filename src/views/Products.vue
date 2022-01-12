<template>
<body class=" max-h-screen flex justify-center lg:-mt-12 -mt-6">
<main class="bgProducts lg:flex lg:flex-row md:my-4 lg:my-12">
  <div class="lg:hidden flex flex-row productCathegories justify-center items-center py-3">
      <h1 class="text-xl font-semibold">Categories</h1>
      <a @click="showCategories"><img src="..\assets\arrowDown.png" class="w-4 ml-2"></a>
  </div>
    <ul class="mainText mainStroked flex flex-row lg:flex-col lg:justify-start justify-between items-center lg:px-10 pl-4 lg:my-36 text-2xl bg-white lg:bg-transparent" id="categories">
      <li v-on:click="component='rods'" class="py-7 lg:border-b-2 lg:border-black hover:text-yellow-300 w-36 text-center cursor-pointer">RODS</li>
      <li v-on:click="component='reels'" class="py-7 lg:border-b-2 lg:border-black hover:text-yellow-300 w-36 text-center cursor-pointer">REELS</li>
      <li v-on:click="" class="py-7 lg:border-b-2 lg:border-black hover:text-yellow-300 w-36 text-center cursor-pointer">HANDLINES</li>
      <li v-on:click="" class="py-7 lg:border-b-2 lg:border-black hover:text-yellow-300 w-36 text-center cursor-pointer">FISHING HOOKS</li>
    </ul>
  
   
   <component v-bind:is="component"></component>
   
  </main>
</body>
 
</template>

<script>
import reels from '../components/Reels.vue'
import rods from '../components/Rods.vue'
export default{
  home: 'Products',
  
  components:{
    'rods': rods,
    'reels': reels,
  },
  data(){
    return{
      component: 'rods'
    }
  },
  methods:{
    showCategories(){
      var x = document.getElementById("categories");
       if (x.style.display === "flex") {
         x.style.display = "none";
       } else {
       x.style.display = "flex";
    }
  }
}
}
</script>