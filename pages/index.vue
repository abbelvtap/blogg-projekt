<template>
<div>
    <div class="bg-local bg-cover" style="background-image: url(https://static.wixstatic.com/media/3efa7e_913f48cd237d453f8c32462625ab64cc~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_980,h_982,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/3efa7e_913f48cd237d453f8c32462625ab64cc~mv2_d_5472_3648_s_4_2.jpg);">
        <div class="w-full flex flex-col items-center bg-green-500 bg-opacity-75"> 
            <p class="text-3xl mb-2 text-white mt-32 lg:mt-64">Welcome to</p>
            <p class="text-4xl lg:text-6xl font-bold mb-7 text-white">Elvira Tapper</p>
            <p class="text-lg text-white mb-20">MY BLOG ON LOREM IPSUM</p>
            <div class="flex flex-col lg:flex-row w-3/4 lg:w-2/5 mb-20 lg:mb-40">
                <button @click="goto('leadership')" class="lg:w-1/3 m-2 bg-white flex lg:flex-col items-center justify-center lg:justify-start">
                    <img class="h-20 my-10 lg:mt-10 lg:mb-5 mr-5 lg:mr-0" src="https://static.wixstatic.com/media/2e2a49_86d1c5a3a7104ef383d530263b7fc175~mv2.png/v1/fill/w_80,h_90,al_c,usm_0.66_1.00_0.01,enc_auto/2e2a49_86d1c5a3a7104ef383d530263b7fc175~mv2.png"/>
                    <div>
                        <p class="text-xl">Leaderchip</p>
                        <p class="text-xl lg:mb-5">in Class</p>
                    </div>
                </button>
                <button @click="goto('technology')" class="lg:w-1/3 m-2 bg-white flex lg:flex-col items-center justify-center lg:justify-start">
                    <img class="h-20 my-10 lg:mt-10 lg:mb-5 mr-5 lg:mr-0" src="https://static.wixstatic.com/media/2e2a49_a0c3f5a3c3764951bb94ef19bd425d1c~mv2.png/v1/fill/w_95,h_91,al_c,usm_0.66_1.00_0.01,enc_auto/2e2a49_a0c3f5a3c3764951bb94ef19bd425d1c~mv2.png"/>
                    <div>
                        <p class="text-xl">Technology in</p>
                        <p class="text-xl lg:mb-5">Classrooms</p>
                    </div>
                </button>
                <button @click="goto('teacher')" class="lg:w-1/3 m-2 bg-white flex lg:flex-col items-center justify-center lg:justify-start">
                    <img class="h-20 my-10 lg:mt-10 lg:mb-5 mr-5 lg:mr-0" src="https://static.wixstatic.com/media/2e2a49_771aa313c4694cfca38890c814d393a1~mv2.png/v1/fill/w_83,h_91,al_c,usm_0.66_1.00_0.01,enc_auto/2e2a49_771aa313c4694cfca38890c814d393a1~mv2.png"/>
                    <div>
                        <p class="text-xl">Every Teacher's</p>
                        <p class="text-xl lg:mb-5">Dilemma</p>
                    </div>
                </button>
            </div>
        </div>    
    </div>

<!-- Featured post -->
    <div class="min-h-screen bg-green-500 flex flex-col justify-center">
        <div class="w-4/5 lg:w-3/5 mx-auto">
            <p class="text-white text-4xl font-bold tracking-widest mb-2">FEATURED</p>
            <p class="text-white text-4xl font-bold tracking-widest">POST</p>
            <div class="h-1 w-20 bg-red-500 my-10"></div>
            <div @click="goToPost(Feat.id)">
                <FeaturedPost :item="Feat"></FeaturedPost>
            </div>
        </div>
    </div>

<!-- Recent posts -->
    <div class="bg-green-100">
        <div class="w-3/4 lg:w-3/5 mx-auto">
            <p class="text-green-900 text-4xl font-bold tracking-widest mb-2 pt-20 lg:pt-40">RECENT</p>
            <p class="text-green-900 text-4xl font-bold tracking-widest">POSTS</p>
            <div class="h-1 w-20 bg-red-500 my-10"></div>
            <div class="flex flex-col lg:flex-row pb-20 lg:pb-40 justify-between">
                <div class="lg:mr-5 lg:w-1/3 mb-10 lg:mb-0" @click="goToPost(post.id)" v-for="post in suggs" :key="post.id">
                    <RecentPostComponent :item="post" class="h-96"></RecentPostComponent>
                </div>
            </div>
        </div>
    </div>

<!-- Leadership in class -->
    <div class="min-h-screen bg-green-500" ref="leadership">
        <div class="flex flex-col lg:flex-row lg:justify-center items-center lg-items-start py-20 lg:py-40">
            <div class="w-4/5 lg:w-1/3 flex flex-col lg:justify-between lg:mr-40">
                <div class="mb-16 lg:mb-32">
                    <p class="text-white text-4xl font-bold tracking-widest mb-2">LEADERSHIP</p>
                    <p class="text-white text-4xl font-bold tracking-widest">IN CLASS</p>
                    <div class="h-1 w-20 bg-red-500 my-10"></div>
                    <p class="text-xl leading-relaxed text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id felis sit amet felis lobortis mollis. In mauris justo, feugiat sed metus sit amet, viverra lacinia felis. Nulla aliquam arcu vitae laoreet sagittis.</p>
                </div>
                <nuxt-link to="/blog" class="mb-10 lg:mb-0">
                    <div class="rounded-full w-40 bg-red-500 flex justify-center items-center py-4 text-lg text-white mb-5">SEE ALL</div>
                </nuxt-link>
            </div>
            <div @click="goToPost(Home1.id)" class="w-4/5 lg:w-1/3">
                <HomePostComponent :item="Home1" class="mx-auto"></HomePostComponent>
            </div>
        </div>  
    </div>

    <!--Quote-->
    <div class="min-h-screen flex flex-col items-center justify-center bg-green-100 text-green-900"> 
        <img class="h-16 lg:h-24 mb-7 lg:mb-16 mt-32" src="https://toppng.com/public/uploads/thumbnail/quotation-mark-png-download-image-red-quotation-marks-1156303423991a5tlnhi7.png"/>
        <div class="text-center w-2/3 lg:leading-relaxed lg:w-1/2 text-3xl lg:text-5xl font-semibold lg:font-bold tracking-wide">At the end of the day, whether or not those people are comfortable with how you’re living your life doesn’t matter. What matters is whether you’re comfortable with it.</div>
        <p class="text-xl lg:text-3xl mt-5 lg:mt-12 mb-32">/Dr. Phil</p>
    </div>
    
    <!--Technology in class-->
    <div class="min-h-screen bg-green-500" ref="technology">
        <div class="flex flex-col lg:flex-row lg:justify-center items-center lg:items-start py-20 lg:py-40">
            <div @click="goToPost(Home2.id)" class="w-4/5 lg:w-1/3 lg:mr-40 order-last lg:order-first">
                <HomePostComponent :item="Home2" class="mx-auto"></HomePostComponent>
            </div>
            <div class="w-4/5 lg:w-1/3 flex flex-col lg:justify-between">
                <div class="mb-16 lg:mb-32">
                    <p class="text-white text-4xl font-bold tracking-widest mb-2">TECHNOLOGY IN</p>
                    <p class="text-white text-4xl font-bold tracking-widest">CLASSROOMS</p>
                    <div class="h-1 w-20 bg-red-500 my-10"></div>
                    <p class="text-xl leading-relaxed text-white">Pellentesque malesuada molestie sollicitudin. Quisque rutrum lacus non venenatis rhoncus. Integer porta, arcu quis euismod iaculis, urna odio volutpat tellus, a consequat nisl sem interdum purus.</p>
                </div>
                <nuxt-link to="/blog" class="mb-10 lg:mb-0">
                    <div class="rounded-full w-40 bg-red-500 flex justify-center items-center py-4 text-lg text-white mb-5">SEE ALL</div>
                </nuxt-link>
            </div>
        </div>  
    </div>

    <!--Every Teacher's dilemma-->
    <div class="min-h-screen bg-green-100" ref="teacher">
        <div class="flex flex-col lg:flex-row lg:justify-center items-center lg-items-start py-20 lg:py-40">
            <div class="w-4/5 lg:w-1/3 flex flex-col lg:justify-between lg:mr-40">
                <div class="mb-16 lg:mb-32"> 
                    <p class="text-green-900 text-4xl font-bold tracking-widest mb-2">EVERY TEACHER'S</p>
                    <p class="text-green-900 text-4xl font-bold tracking-widest">DILEMMA</p>
                    <div class="h-1 w-20 bg-red-500 my-10"></div>
                    <p class="text-xl leading-relaxed text-green-900">Nam faucibus ante sem, non placerat ante tincidunt et. Nulla facilisi. Donec malesuada bibendum nisi, id iaculis erat. Pellentesque vel pharetra velit, quis placerat tortor. Nam maximus felis at viverra placerat.</p>
                </div>
                <nuxt-link to="/blog" class="mb-10 lg:mb-0">
                    <div class="rounded-full w-40 bg-red-500 flex justify-center items-center py-4 text-lg text-white mb-5">SEE ALL</div>
                </nuxt-link>
            </div>
            <div @click="goToPost(Home3.id)" class="w-4/5 lg:w-1/3">
                <HomePostComponent :item="Home3" class="mx-auto"></HomePostComponent>
            </div>
        </div>  
    </div>
</div>
</template>
<script>
export default {
    async asyncData({$content}) {
        let Feat = await $content('posts/post5').without(['body']).fetch()
        let suggs = await $content('posts').sortBy('id','desc').limit(3).without(['body']).fetch()
        let Home1 = await $content('posts/post1').without(['body']).fetch()
        let Home2 = await $content('posts/post2').without(['body']).fetch()
        let Home3 = await $content('posts/post3').without(['body']).fetch()
        return {
        Feat,
        suggs,
        Home1,
        Home2,
        Home3
        }
    },
    methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    },
    goToPost(id) {
      this.$router.push('/post-details/'+id)
    }
  }
};
</script>