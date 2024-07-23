<template>
    <h1>Confectionery</h1>
    <v-btn to="/ManageProducts" style="color: yellow; background-color: #F0F;">ManageProducts</v-btn>

    <div>
        <v-row>
            <v-col cols="12" md="3"  v-for="product in stock" :key=product>
        <v-card
        class="mx-auto my-12"
        max-width="374"
    >
        <v-img
        height="250"
        :src="product.productImagePath"
        cover
        ></v-img>

        <v-card-item>
        <v-card-title>{{ product.productName }}</v-card-title>
        </v-card-item>

        <v-card-text>
        <div class="my-4 text-subtitle-1">
            {{ product.productPrice }}
        </div>

        <div>{{ product.productDescription }}</div>
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

    export default {
        data(){
            return{
               
            }
        },
        methods:{
            ...mapActions([
                "addToCart",
                "fetchProducts" // action to trigger fetching products from api
            ])

        },
        computed: {
            ...mapGetters({
                stock: 'stock'
            })
        },
        created() {
            this.fetchProducts() // retrieve the products when the component is called
        }
    }
</script>