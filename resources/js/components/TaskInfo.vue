<template>
        
    <div class="flex-col m-2 select-none">
        <p class="font-semibold uppercase text-xl"> {{ data.data.attributes.title }} </p>
        <p class="font-semibold text-base py-2"> {{ data.data.attributes.description }} </p>
        <div class="flex flex-row items-center">
            <img class="w-8 h-8 rounded-full object-cover" :src="data.data.attributes.partner.data.attributes.avatar">
            <p class="font-semibold text-base text-gray-500 pl-2"> {{ data.data.attributes.partner.data.attributes.name }} </p>
        </div>
    </div>
    
</template>

<script>
    export default {

        name: 'TaskInfo',

        props: [
            'data',
        ],

    }
</script>