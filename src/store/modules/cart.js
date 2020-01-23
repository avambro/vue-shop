import shop from "@/api/shop"

export default {

	state: {
		namespaced : true ,
		items : [],
		checkoutStatus:null
	},

	getters: {
		cartProducts (state , getters , rootState, rootGetters){
			return state.items.map(cartItem => {
				const product = rootState.products.items.find(product => product.id === cartItem.id)
				return {
					title : product.title,
					price : product.price,
					quantity : cartItem.quantity
				}
			})
		},

		carTotal (state, getters){
			return getters.cartProducts.reduce((total,product)=> total + product.price * product.quantity,0)
		}
	},

	mutations : {
		pushProductToCart (state,productId){
			state.items.push({
				id:productId,
				quantity:1
			})
		},

		incrementItemQuantity(state,cartItem){
			cartItem.quantity++
		},

		setCheckoutStatus(state,status){
			state.checkoutStatus = status 
		},

		emptyCart(state){
			state.items = []
		}
	}


}