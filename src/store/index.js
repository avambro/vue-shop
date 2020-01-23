import Vuex from 'vuex'
import Vue from 'vue'
import actions from '@/store/actions'
import cart from '@/store/modules/cart'
import products from '@/store/modules/products'

Vue.use(Vuex)

export default new Vuex.Store({

	modules:{
		products
	},

	state:{

	},

	getters:{

	},

	actions,

	mutations:{

	}

}) 