<template>

    <router-link :to='data.links.self' class="bg-white px-6 py-8 rounded-lg shadow-lg text-center hover:bg-gray-200">
        
        <div class="mb-2">
            <img class="w-auto mx-auto rounded-full object-cover" :src="'../storage/default-user-img.jpg'">
        </div>
        <div class="flex-col m-2 select-none">
            <p class="font-semibold text-2xl"> {{ data.data.attributes.name }} </p>
            <p v-if="data.data.attributes.post" class="font-semibold text-base text-gray-500"> {{ data.data.attributes.post }} </p>
        </div>
        
    </router-link>

</template>

<script>
    export default {

        name: 'InfoCard',

        props: [
            'data',
        ],

    }
</script>