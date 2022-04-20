<template>
  <div class="bg-green-500">
    <div class="flex flex-col items-center pt-40 lg:pt-64 lg:pb-20 lg:pb-40">
      <div class="w-4/5 lg:w-1/2 mb-10">
        <h1 class="text-5xl lg:text-6xl text-white">All posts</h1>
      </div>
      <div @click="goToPost(post.id)" class="w-full lg:w-1/2 lg:m-4" v-for="post in posts" :key="post.id">
        <PostListItem :item="post"></PostListItem>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({$content}) {
    let posts = await $content('posts').sortBy('id').without(['body']).fetch()
    return {
      posts
    }
  },
  methods: {
    goToPost(id) {
      this.$router.push('/post-details/'+id)
    }
  }
}
</script>
