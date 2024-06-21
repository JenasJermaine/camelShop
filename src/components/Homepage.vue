<script>

  export default {
    data() {
      return {
          image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
              {
                  itemNumber: 1,
                  itemName : "Sweets",
                  itemPrice : 5,
                  itemQuantity : 30,
                  itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg'
              },
              {
                  itemNumber: 27466,
                  itemName : "Lollipop",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
              }
          ],
        }
    },

    methods() {
      // we shall add our functions here
    },

    computed(){
      //we use this when working with forms
    }
  }
</script>


<template>
  <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
 <v-card
    class="mx-auto"
     width="1000"
  >

    <v-carousel>
  <v-carousel-item
    src="public/images/customerbox-aXq1oCCjlVM-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
</v-card>
<v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
<v-card align="center">
        <v-card-item>
          <v-card-title>Welome to the Camel Shop</v-card-title>

          <v-card-subtitle>Looking for candy? We've got it</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Discover a desert of delectable candies and treats, curated for your delight. Satisfy your cravings with a click. Feel free to stop by😉
        </v-card-text>
      </v-card>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say</h3>
      <v-divider></v-divider>

      <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Jenas Jermaine"
        text="Excellent customer service⭐⭐⭐"
        title="Good Customer Service"
      ></v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Good Customer Service
        </template>

        <template v-slot:subtitle>
        Baraka Munene        </template>

        <template v-slot:text>
          Excellent customer service⭐⭐⭐        </template>
      </v-card>

      
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Good Customer Service</v-card-title>

          <v-card-subtitle>Jedidah Mutheu</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Excellent customer service⭐⭐⭐ </v-card-text>
      </v-card>

      
    </v-col>
  </v-row>
</template>

