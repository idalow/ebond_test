<template>

    <div class="flex items-center border border-gray-200 hover:bg-gray-200 rounded-lg p-6">

        <img class="rounded-full justify-center items-center h-32 w-32 object-cover m-2" :src="'../storage/default-user-img.jpg'">
        <div class="flex-col m-2 select-none">
            <p class="font-semibold text-2xl"> {{ employee.data.attributes.name }} </p>
            <p class="font-semibold text-base text-gray-500"> {{ employee.data.attributes.post }} </p>
        </div>
        
    </div>

</template>

<script>
    export default {

        name: 'Employee',

        props: [
            'employee',
        ],

        mounted() {
        
        }
    }
</script>