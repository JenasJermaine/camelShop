<template>
    <h1>Confectionery</h1>
    <div>
        <v-row>
            <v-col cols="12" md="3"  v-for="product in stock" :key=product>
        <v-card
        class="mx-auto my-12"
        max-width="374"
    >
        <v-img
        height="250"
        :src="product.itemImage"
        cover
        ></v-img>

        <v-card-item>
        <v-card-title>{{ product.itemName }}</v-card-title>
        </v-card-item>

        <v-card-text>
        <div class="my-4 text-subtitle-1">
            {{ product.itemPrice }}
        </div>

        <div>{{ product.description }}</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
        <v-btn
            color="#F0F"
            text="Add to Cart"
            block
            border
            @click="addToCart(product)"
        ></v-btn>
        </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default{
    data(){
        return{
            products:[1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
            {
                itemNumber: 27466,
                itemName : "Snickers",
                itemPrice : 120,
                itemQuantity : 4,
                itemImage: 'public/images/Snickers.jpeg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Reese's",
                itemPrice : 100,
                itemQuantity : 4,
                itemImage: 'public/images/Reeses.jpeg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "m & m's",
                itemPrice : 150,
                itemQuantity : 4,
                itemImage: 'public/images/M and M.jpeg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            },
            {
                itemNumber: 27466,
                itemName : "Brats",
                itemPrice : 130,
                itemQuantity : 4,
                itemImage: 'public/images/Brats.png',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "mars",
                itemPrice : 160,
                itemQuantity : 4,
                itemImage: 'public/images/Mars bar.jpeg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 1,
                itemName : "Gummy bears",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: 'public/images/Gummy bear.jpeg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                itemNumber: 27466,
                itemName : "Tropical sweets",
                itemPrice : 2,
                itemQuantity : 4,
                itemImage: 'public/images/Tropical sweets.jpeg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Chocolate",
                itemPrice : 80,
                itemQuantity : 4,
                itemImage: 'public/images/Cadbury chocolate.jpeg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Skittles",
                itemPrice : 80,
                itemQuantity : 4,
                itemImage: 'public/images/Skittles.jpeg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
        ],
        total:0,

        cartItems:[],
        }
    },

    methods:{
        calculateTotal(itemPrice){
            this.total+= itemPrice

        },
        addToCart(product){
            this.cartItems.push(product)
            this.calculateTotal(product.itemPrice)

        },
        removeFromCart(product){
            this.cartItems.pop(product)
            this.total -= product.itemPrice
        }

    },
    computed: {
        ... mapGetters({
            stock: 'stock'
            
        })
    }
}
</script>