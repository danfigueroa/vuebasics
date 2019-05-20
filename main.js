Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" v-bind:alt="altText" class="image">
            </div>

            <div class="product-info">

                <h1>{{title}}</h1>

                <p v-if="inventory > 10">Em estoque</p>
                <p v-else-if="inventory<=10 && inventory>0">Quase fora de estoque!</p>
                <p v-else>Fora de estoque</p>
                <p> Usuario premium: {{premium}}

                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>

                <div v-for="(variant, index) in variants" 
                    :key="variant.variantID"
                    class="color-box"
                    :style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)">           
                </div>

                <button @click="addToCart" 
                :disabled="!inventory"
                class="{disabledButton:!inventory">Adicione ao carrinho</button>

            </div>

            <product-review class="review"></product-review>

        </div>
    `,

    data() {
        return {
            brand: 'Vue Mastery',
            product: 'Meias',
            selectedVariant: 0,
            altText: 'Um par de meias', 
            details: ["80% algodao", "20% poliester"],
            variants: [
                {
                    variantID: 1234,
                    variantColor: "green",
                    variantImage: "./assets/vmSocks-green.png",
                    variantQuantity: 10
                },
                {
                    variantID: 4321,
                    variantColor: "blue",
                    variantImage: "./assets/vmSocks-blue.png",
                    variantQuantity: 23
                }
            ],
        }
    },        

    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantID)
        },
        
        updateProduct(index){
            this.selectedVariant = index,
            console.log(index)
        }
    },

    computed: {
        title(){
            return this.brand + ' ' + this.product
        },

        image(){
            return this.variants[this.selectedVariant].variantImage
        },

        inventory(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    
    }
})

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name" placeholder="name">
            </p>
            
            <p>
            <label for="review">Review:</label>      
            <textarea id="review" v-model="review"></textarea>
            </p>
            
            <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            </p>
                
            <p>
            <input type="submit" value="Submit">  
            </p>    
        </form>
    `,

    data() {
      return {
        name: null,
        review: null,
        rating: null
      }
    },

    methods: {
        onSubmit(){
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }

            this.name = null,
            this.review = null,
            this.rating = null
        } 
    }
  })

var app = new Vue({
    // '#app' conecta o elemento com a Div de mesmo ID
    el: '#app',
    
    data: {
        premium: true,
        cart: []
    },

    methods: {
        updateCart(id) {
            this.cart.push(id)
            /*this.inventory-=1*/
        }    
    }

})