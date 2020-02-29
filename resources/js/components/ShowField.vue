<template>

    <div class="flex-col justify-center items-center">
        <label :for="label" class="flex justify-center uppercase text-xs font-bold pt-2 text-gray-400"> {{ label }} </label>
        <div class="font-semibold text-2xl py-1"> {{ data }} </div>
    </div>

</template>

<script>
    export default {
        name: 'ShowField',

        props: [
            'data', 'label',
        ],

        mounted() {
        
        }
    }
</script>