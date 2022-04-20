<template>
<div class="bg-green-500 lg:px-40 pt-32 lg:pt-64">
    <div class="bg-white">
        <div class="p-10 lg:p-40">
            <p class="text-md lg:text-xl mb-5 lg:mb-16">{{post.artdate}}</p>
            <h1 class="text-3xl lg:text-7xl mb-5 lg:mb-12 font-semibold">{{post.title}}</h1>
            <p class="mb-8 lg:mb-16 font-semibold text-md lg:text-2xl lg:leading-relaxed">{{post.description}}</p>
            <img :src="post.image" class="w-full mb-12"/>
            <nuxt-content :document="post"></nuxt-content>
            <div class="h-0.5 bg-gray-700 mt-20"></div>
            <div>
                <ContactLogos></ContactLogos>
            </div>
        </div>
        <div class="lg:pb-20 pt-20 lg:px-10">
            <p class="lg:pl-5 text-5xl tracking-widest lg:tracking-normal lg:text-3xl mb-10 lg:mb-5 lg:mb-3 w-4/5 mx-auto lg:mx-0">Recent posts</p>
            <div class="lg:flex lg:flex-row lg:justify-between">
                <div class="w-full lg:m-5 lg:w-1/3 mx-auto" @click="goToPost(post.id)" v-for="post in suggs" :key="post.id">
                    <RecentPostComponent :item="post" class="h-128"></RecentPostComponent>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    async asyncData({$content, params}) {
        
        let post = await $content('posts/post'+params.id).fetch()
        let suggs = await $content('posts').sortBy('id','desc').limit(3).without(['body']).fetch()
        return {
            post,
            suggs
        }
    },
    methods: {
    goToPost(id) {
      this.$router.push('/post-details/'+id)
    }
  }
}
</script>