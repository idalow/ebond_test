<template>

    <div>
        <div class="flex items-center pb-8 justify-between">
            <div class="text-4xl font-bold uppercase tracking-wide text-color4">Tasks</div>
            <div class="flex flex-row">
                <router-link :to="'/task/statistics'" class="flex items-center text-white bg-color4 p-2 hover:bg-color5 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    <p class="font-semibold px-2"> Statistics </p>
                </router-link>
                <router-link to="/task/new" class="flex items-center text-white bg-color4 p-2 hover:bg-color5 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    <p class="font-semibold px-2"> Add new </p>
                </router-link>
            </div>
        </div>
        
        <div v-if="tasksStatus != 'Success' || tasksStatus === null ">Loading tasks...</div>
        <div v-else class="flex flex-col">
            <TaskCard class="w-full p-2 m-2" v-for="(task, taskKey) in tasks.data" :key="taskKey" :data="task"/>
        </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import TaskCard from '../../components/TaskCard';

    export default {
        name: 'TaskList',

        components: {
            TaskCard,
        },
        
        computed: {

            ...mapGetters({
                tasks: 'tasks',
                tasksStatus: 'tasksStatus',
            })

        },

        mounted() {

            this.$store.dispatch('fetchTasks');

        }
    }
</script>