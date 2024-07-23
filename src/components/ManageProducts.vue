<template>
    <h1>Manage Products</h1>
    <v-btn @click="add_dialog = true" >Add a Product</v-btn>
    <!-- Add Products section -->
    <v-dialog v-model="add_dialog" width="auto" >
        <v-card class="mx-auto my-12" >
            <v-card-item>
                <v-card-title>Add New Product <v-btn @click="add_dialog = false" >X</v-btn></v-card-title>
            </v-card-item>

            <v-card-text>
                <v-form v-model="valid">
                    <v-container>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="newProduct.productName" label="Item Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productPrice" label="Product Price" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productDescription" label="Description" hide-details required ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="newProduct.productCategory"
                                :items="productCategoryItems"
                                item-title="categoryName"
                                item-value="categoryID"
                                label="Category"
                                
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-select
                                v-model="newProduct.productMeasurement"
                                :items="productMeasurementList"
                                
                                label="Measurement"
                                
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productImagePath" label="Image" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productNumber" label="Stock Number" hide-details required ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" >
                            <v-text-field v-model="newProduct.productQuantity" label="Quantity" hide-details required ></v-text-field>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-form>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>
            <v-card-actions>
                <v-btn color="deep-purple-lighten-2" text="Save" block border @click="save()" ></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
    import axios  from "axios";
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data(){
            return{
                valid: true,
                add_dialog: false,
                newProduct: {
                    productNumber: null,
                    productName: null,
                    productPrice: null,
                    productDescription: null,
                    productCategory: 1 ,
                    productMeasurement: 'grams',
                    productImagePath: null,
                    productQuantity: null
                },
                productCategoryItems: [
                    { categoryName: 'Sweets', categoryID: 1 },
                    { categoryName: 'Chocolates', categoryID: 2 },
                    { categoryName: 'Crisps', categoryID: 3 },
                    { categoryName: 'Biscuits', categoryID: 4 },
                    { categoryName: 'Soda', categoryID: 5 },
                ],
                productMeasurementList:['grams', 'ml' ]
            }
        },
        methods:{
            ...mapActions([
                "fetchProducts" // action to trigger fetching products from api
            ]),
            //create new products
            save(){
                try {
                    axios
                    .post('http://127.0.0.1:8000/api/products', this.newProduct)
                    .then((response) => console.log(response))
                    this.fetchProducts()
                    this.add_dialog = false

                } catch (error) {
                    alert(error);
                    console.log(error);
                }
            },

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