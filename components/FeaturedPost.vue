<template>
<div class="flex flex-col lg:flex-row bg-transparent">
    <img :src="item.image" alt="dish image" class="h-80 lg:h-96 lg:w-1/2 object-cover" >
    <div class="m-5">
        <p class="my-3">{{item.date}}</p>
        <div class="hover:text-red-500">
            <h3 class="text-4xl font-semibold mb-3">{{item.title}}</h3>
            <p class="text-2xl">{{item.description}}</p>
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