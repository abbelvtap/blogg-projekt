<template>
    <div class="flex justify-between items-center p-5 bg-transparent">
        <nuxt-link to="/">
            <img src="https://www.abo.fi/wp-content/uploads/2019/09/AboAkademi-logo.png" class="h-20 w-24 lg:w-20">
        </nuxt-link>
        <div class="w-full lg:w-1/4 flex justify-evenly">
            <nuxt-link to="/" class="text-white lg:text-xl hover:text-red-500 active">HOME</nuxt-link>
            <nuxt-link to="/blog" class="text-white lg:text-xl hover:text-red-500">BLOG</nuxt-link>
            <nuxt-link to="/about" class="text-white lg:text-xl hover:text-red-500">ABOUT</nuxt-link>
        </div>
    </div>
</template>
<style>
    .nuxt-link-exact-active {
        color: red
    }
</style>
