<template>
<div class="flex flex-col lg:flex-row bg-white">
    <img :src="item.image" alt="dish image" class="h-64 lg:h-80 lg:w-1/2 object-cover" >
    <div class="m-5 pb-2">
        <p class="my-3">{{item.date}}</p>
        <div class="hover:text-red-500 border-b lg:border-0 pb-10">
            <h3 class="text-3xl font-semibold mb-3">{{item.title}}</h3>
            <p>{{item.description}}</p>
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