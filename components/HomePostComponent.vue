<template>
<div class="bg-white">
    <img :src="item.image" alt="dish image" class="h-5/7 w-full object-cover" >
    <div class="m-5">
        <h3 class="text-xl font-semibold mb-2">{{item.title}}</h3>
        <p class="pb-10">{{item.description}}</p>
    </div>
</div>
</template>

<script>
export default {
    props:['item'],
    data() {
        return {

        }
    }
}
</script>