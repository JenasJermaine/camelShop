<template>
    <v-app-bar :elevation="2" color="#F0F">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title style="color: yellow;">Camel Shop</v-app-bar-title>
        <v-btn to="/" style="color: yellow;">Homepage</v-btn>
        <v-btn to="/Products" style="color: yellow;">Products</v-btn>
        <v-btn to="/Cart" style="color: yellow;">Cart</v-btn>
        <v-btn to="/ServicesOffered" style="color: yellow;">ServicesOfferd</v-btn>
        <v-btn to="/AboutUs" style="color: yellow;">AboutUs</v-btn>
        <v-btn to="/ContactUs" style="color: yellow;">ContactUs</v-btn>
    </v-app-bar>
</template>