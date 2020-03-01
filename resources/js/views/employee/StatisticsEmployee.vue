<template>

    <div v-if="employeesStatus === 'Success' " class="flex flex-col justify-center items-start">
        
        <div class="text-4xl font-bold uppercase tracking-wide text-color4"> {{ employees.data.attributes.name }}</div>
        <div class="text-xl font-bold uppercase tracking-wide text-gray-400"> {{ employees.data.attributes.post }}</div>
        <div class="w-full my-4">
            <img class="h-20 w-auto rounded-full object-cover" :src="'../../storage/default-user-img.jpg'">
        </div>
        
        <div class="flex flex-row w-full justify-around items-center py-4">
            <ShowField label="Total work time" :data="employees.data.attributes.done_jobs.time_count" />
            <ShowField label="Finished jobs" :data="employees.data.attributes.done_jobs.done_job_count" />
        </div>

    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import ShowField from '../../components/ShowField';

    export default {
        name: 'StatisticsEmployee',

        components: {
            ShowField,
        },

        computed: {

            ...mapGetters({
                employees: 'employees',
                employeesStatus: 'employeesStatus',
            })

        },

        mounted() {

            this.$store.dispatch('fetchEmployee', this.$route.params.id);

        }
    }
</script>