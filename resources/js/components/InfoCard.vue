<template>

    <router-link :to='data.links.self' class="bg-white px-6 py-8 rounded-lg shadow-lg text-center hover:bg-gray-200">
        
        <div class="flex mb-2 justify-center items-center ">
            <img class="h-20 w-20 rounded-full object-cover" :src="data.data.attributes.avatar">
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