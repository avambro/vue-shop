const _products = [
{ "id" : 100 , "title" : "device 1", "price" : 501.02, "inventory" : 2},
{ "id" : 101 , "title" : "device 2", "price" : 502.03, "inventory" : 12},
{ "id" : 102 , "title" : "device 3", "price" : 503.04, "inventory" : 72}

]


export default {
	getProducts (cb){
		setTimeout(() => cb(_products),100)
	},

	buyProducts(products,cb,errorCb){
		setTimeout(()=>{
			//simuate random checkout failure
			(Math.random() > 0.5 || navigation.userAgent.indexOf('PhantomJS') > -1)?cb():errorCb()

		},100)
	}
}