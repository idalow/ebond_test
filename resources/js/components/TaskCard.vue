<template>

    <div class="flex flex-row items-center justify-between bg-white px-4 py-2 rounded-lg shadow-lg" 
        :class="data.data.done ? 'bg-green-300' : 'hover:bg-gray-200'"
        @mouseover="mouseover = true"
        @mouseleave="mouseover = false">
        
        <TaskInfo :data="data" />

        <div v-if="mouseover && !data.data.done" class="flex flex-row">
            <router-link :to="data.links.self + '/edit'" class="flex items-center text-white bg-color4 p-2 hover:bg-color5 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> 
                <p class="font-semibold px-2"> Edit </p>
            </router-link>

            <router-link :to="data.links.self + '/done'" class="flex items-center text-white bg-color4 p-2 hover:bg-color5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <p class="font-semibold px-2"> Done </p>
            </router-link>
        </div>
        
    </div>

</template>

<script>
    import TaskInfo from './TaskInfo';

    export default {

        name: 'TaskCard',

        components: {
            TaskInfo,
        },

        props: [
            'data',
        ],

        data() {
            return {
                mouseover: false,
            };
        },

    }
</script>