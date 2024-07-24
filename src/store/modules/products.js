import axios from 'axios'

const state ={
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
    allProducts:[]
}
const getters={
    stock: (state) => state.allProducts,
    
}
const actions ={
    async fetchProducts({commit}){
        try{
                   const data = await axios.get(
                    "https://candy-back.onrender.com/api/products"
        );
        commit ("SET_PRODUCTS", data.data);
 
        } catch(error){
            alert(error);
            console.log(error);
        }

    },
    
}
const mutations ={
    SET_PRODUCTS (state, allProducts){
        state.allProducts= allProducts
    }
    
}
export default{
    state,
    getters,
    actions,
    mutations
}