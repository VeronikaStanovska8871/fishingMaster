<template>
	<main>
		<div class="flex flex-wrap">
			<div
				v-for="(reel, id) in reels"
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
				<div :id="reel.id" class="bg-white mb-8 rounded-2xl flex flex-col">
					<img :src="reel.picture" class="w-36 m-auto" />
					<h1 class="font-bold text-sm mt-8">{{ reel.name }}</h1>
					<p class="flex justify-center font-bold text-sm bluecolor">{{ reel.price }}€</p>
					<router-link :to="`/product/details/reels/${reel.id}`" class="mx-8">Click for more details</router-link>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
import EventServices from "../views/services/EventServices";
import ProductDetailsReels from "./ProductDetailsReels.vue";
export default {
	components: {
		ProductDetailsReels,
	},
	data() {
		return {
			selectedRod: {},
			reels: [],
		};
	},
	methods: {
		fetchReels() {
			EventServices.getReels()
				.then((response) => {
					this.reels = response.data.reels;
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	mounted() {
		this.fetchReels();
	},
};
</script>
