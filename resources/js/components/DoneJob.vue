<template>

    <div class="flex flex-row items-center justify-between bg-white px-4 py-2 rounded-lg shadow-lg" 
        :class="data.data.attributes.done ? 'bg-green-300' : 'hover:bg-gray-200'"
        @mouseover="mouseover = true"
        @mouseleave="mouseover = false">
        
        <TaskInfo :data="data.data.attributes.task" />

        <div class="flex flex-col items-center">
            <img class="w-10 h-10 rounded-full object-cover" :src="'/storage/' + data.data.attributes.employee.data.attributes.avatar.url">
            <p class="font-semibold text-base pl-2"> {{ data.data.attributes.employee.data.attributes.name }} </p>
            <p class="font-semibold text-base text-gray-500 pl-2"> {{ data.data.attributes.time }} </p>
        </div>
        
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import TaskInfo from './TaskInfo';

    export default {
        name: 'DoneJob',

        components: {
            TaskInfo,
        },

        props: [
            'data',
        ],
    }
</script>