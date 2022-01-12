<template>
<body>
    <main class="flex flex-col lg:-mt-12 -mt-6">
    <img src="..\assets\fly-fishing-gcc81d574e_1920.jpg" alt="" class="mainImg m-auto lg:mainImgRounded mt-4 w-75% z-0">
    <ul class="flex lg:flex-row flex-col justify-center lg:-mt-20">
       <li id="product1" class="productBox lg:w-48 w-full ml-0 lg:h-56 md:h-44 h-32 xl:w-60 xl:h-72 mx-10 my-4 lg:my-0 lg:hover:bg-yellow-200 lg:transform duration-300 hover:scale-110">
        
       </li>
       <li id="product2" class="productBox lg:w-48 w-full ml-0 lg:h-56 md:h-44 h-32 xl:w-60 xl:h-72 mx-10 my-4 lg:my-0 lg:hover:bg-yellow-200 lg:transform duration-300 hover:scale-110">

       </li>
       <li id="product3" class="productBox lg:w-48 w-full ml-0 lg:h-56 md:h-44 h-32 xl:w-60 xl:h-72 mx-10 my-4 lg:my-0 lg:hover:bg-yellow-200 lg:transform duration-300 hover:scale-110">

       </li>
       <li id="product4" class="productBox lg:w-48 w-full ml-0 lg:h-56 md:h-44 h-32 xl:w-60 xl:h-72 mx-10 my-4 lg:my-0 lg:hover:bg-yellow-200 lg:transform duration-300 hover:scale-110">

       </li>
    </ul>
    <router-link to="/products" class="bg-white mainText text-2xl w-56 rounded-2xl h-16 flex justify-center items-center mt-8 m-auto shadow-md text-black  transform duration-200 hover:scale-110">SHOP NOW</router-link>
   </main>
  
</body>
</template>


<script>

export default {
  components: { 



  },
   name: 'Home'

}

</script>