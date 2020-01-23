<template>
<div>
	<h1>Products List</h1>
	<img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
	<ul v-else>
		<li v-for="product in products">
			{{product.title}} - {{product.price }} - {{product.inventory}}
		</li>
	</ul>
</div>	
</template>
<script>
	import {mapState, mapGetters, mapActions} from 'vuex'
	export default {
		name:'ProductsList',
		data(){
			return {
				loading :  false,
				productsIndex : 1
			}
		}, 

		computed: {
			...mapState({
				products: state => state.products.items
			}),

			...mapGetters({
				productsIsInStock: 'productsIsInStock'
			})
		},

		methods: {

			...mapActions({
				fetchProducts : 'products/fetchProducts',
				addProductToCart : 'cart/addProductToCart'

			})
		},

		created(){
			this.loading = true 
			this.fetchProducts().then(()=> this.loading = false)
		}

	}
</script>
