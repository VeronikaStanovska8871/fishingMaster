<template>
	<main>
		<div class="flex flex-wrap">
			<div
				v-for="(rod, id) in rods"
				:key="id"
				class="
					my-10
					mx-6
					drop-shadow-md
					productBoxEshop
					bg-white
					text-center
					secondaryText
					text-lg
					transform
					duration-200
					hover:scale-110
				"
			>
				<div :id="rod.id" class="bg-white mb-8 rounded-2xl flex flex-col">
					<img :src="rod.picture" class="w-36 m-auto" />
					<h1 class="font-bold text-sm mt-8">{{ rod.name }}</h1>
					<p class="flex justify-center font-bold text-sm bluecolor">{{ rod.price }}€</p>
					<router-link :to="`/product/details/${rod.id}`" class="mx-8">Click for more details</router-link>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
import EventServices from "../views/services/EventServices";
import ProductDetails from "./ProductDetails.vue";
export default {
	components: {
		ProductDetails,
	},
	data() {
		return {
			selectedRod: {},
			rods: [],
		};
	},
	methods: {
		fetchRods() {
			EventServices.getRods()
				.then((response) => {
					this.rods = response.data.rods;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	mounted() {
		this.fetchRods();
	},
};
</script>
