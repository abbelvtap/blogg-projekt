<template>
<div>
    <HeaderComponent ref="start" class="fixed w-full"></HeaderComponent>
    <nuxt/>
    <FooterComponent></FooterComponent>
    <div @click="goto('start')" class="fixed right-6 lg:right-24 bottom-10 lg:bottom-20 bg-transparent hover:bg-red-500 h-16 lg:h-24 w-16 lg:w-24 rounded-full flex justify-center items-center">
        <img class="h-5 lg:h-8" src="https://myrnss.com/wp-content/uploads/2016/05/pts-arrow-up.png"/>
    </div>
</div>
</template>
<script>
export default {
    methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  }
};
</script>