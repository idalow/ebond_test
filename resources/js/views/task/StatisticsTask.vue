<template>

    <div v-if="tasksStatus === 'Success' " class="flex flex-col">
        <div class="text-4xl font-bold uppercase tracking-wide text-color4 pb-8">Tasks</div>
        
        <div class="flex justify-around ">
            <ShowField label="All" :data="tasks.task_count" />
            <ShowField label="Done" :data="tasks.task_count" />
            <ShowField label="Not done yet" :data="tasks.task_count" />
        </div>

    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import TaskCard from '../../components/TaskCard';
    import ShowField from '../../components/ShowField';

    export default {
        name: 'StatisticsTask',

        components: {
            TaskCard,
            ShowField,
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