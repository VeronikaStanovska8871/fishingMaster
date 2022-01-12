<template>
<main class="bgProducts flex flex-row my-4 justify-center m-auto -mt-6">
	 <div class="flex flex-row items-center m-10">
		<div v-for="rod in rods" class="flex lg:flex-row flex-col">
			<div class="flex productDetailImg bg-white lg:mr-20 mr-0">
				<img :src="rod.picture" class=" flex m-auto">
			</div>
		<div class="flex flex-col mt-10 secondaryText ">
			<div class="productBorder h-72 w-96">
				<h1 class=""><span class="font-semibold">BRAND</span> {{rod.brand}}</h1>
			<h1 class=""><span class="font-semibold">NAME</span> {{rod.name}}</h1>
			<h1 class=""><span class="font-semibold">LENGHT</span> {{rod.length}}</h1>
			<p class="text-md">Atlantic eel pygmy sunfish, "madtom luminous hake," longneck eel; triggerfish fierasfer 
				flyingfish flathead glass knifefish ribbonbearer ayu Atlantic salmon. Bonito ghost fish 
				dab ray: ribbon eel four-eyed fish great white shark.</p>
			</div>
			<div class="flex flex-col w-96 h-32 m-auto text-xl">
				<h1><span class="font-bold bluecolor">PRICE: </span>{{rod.price}}€</h1>
				<h1><span class="font-bold bluecolor"> QUANTITY:</span>
				<select v-model="selected" class="w-16 ml-4 rounded-md shadow">
				<option v-for="i in rod.count" :key="i" :value="i">{{ i }}</option>
				</select>
				</h1>
				<button class="my-10 transform duration-100 secondryText font-semibold hover:scale-105 w-52 py-2 rounded-3xl text-center buttonOrange ">ADD TO CART</button>
			</div>
		</div>
			
	</div>
	 </div>
</main>

 	

		
</template>

<script>
import axios, { Axios } from "axios";
export default {
	name: 'ProductDetails',
	data(){
		return{
			rods:'',
			id:'',
			brand: '',
			token:  localStorage.getItem("token"),
			idPerson: localStorage.getItem("idPerson"),
		}
	},
	created(){ 
		this.id = this.$route.params.id
		axios.get(`http://localhost:8083/product/rod?id=${this.id}`).then(response=> {
			this.rods = response.data.rods
		})

	},
	addToCart(){

	}
}
</script>
