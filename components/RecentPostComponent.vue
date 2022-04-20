<template>
<div class="bg-white">
    <img :src="item.image" alt="dish image" class="h-3/5 w-full object-cover" >
    <div class="m-5">
        <div class="border-b-2 pb-10">
            <p class="my-3 pt-5 lg:pt-0">{{item.date}}</p>
            <h3 class="text-2xl font-semibold hover:text-red-500">{{item.title}}</h3>
        </div>
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