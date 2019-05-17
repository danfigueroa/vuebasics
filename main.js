var app = new Vue({

    el: '#app',
    // '#app' conecta o elemento com a Div de mesmo ID
    data: {
        brand: 'Vue Mastery',
        product: 'Meias',
        selectedVariant: 0,
        altText: 'Um par de meias',
        inventory: 8,
        details: ["80% algodão", "20% poliéster"],
        variants: [
            {
                variantID: 1234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.png"
            },
            {
                variantID: 4321,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.png"
            }
        ],
        cart: 0
    },

    methods: {
        addToCart() {
            this.cart+=1,
            this.inventory-=1
        },
        
        updateProduct(index){
            this.selectedVariant = index,
            console.log(index)
        }
    },

    computed: {
        title(){
            return this.brand + ' ' + this.product
        }
    }

})