<template>

    <div>
        <div class="flex items-center pb-8 justify-between">
            <div class="text-4xl font-bold uppercase tracking-wide text-color4">Finished jobs</div>
            <router-link :to="'/done_job/statistics'" class="flex items-center text-white bg-color4 p-2 hover:bg-color5 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                <p class="font-semibold px-2"> Statistics </p>
            </router-link>
        </div>
        
        <div v-if="doneJobsStatus != 'Success' || doneJobsStatus === null ">Loading finished jobs...</div>
        <div v-else class="flex flex-col">
            <DoneJob class="w-full p-2 m-2" v-for="(task, taskKey) in doneJobs.data" :key="taskKey" :data="task"/>
        </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import DoneJob from '../../components/DoneJob';

    export default {
        name: 'DoneJobList',

        components: {
            DoneJob,
        },
        
        computed: {

            ...mapGetters({
                doneJobs: 'doneJobs',
                doneJobsStatus: 'doneJobsStatus',
            })

        },

        created() {

            this.$store.dispatch('fetchDoneJobs');

        }
    }
</script>