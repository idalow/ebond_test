<template>

    <div v-if="doneJobsStatus === 'Success' && partnersStatus === 'Success' " class="flex flex-col justify-center">
        
        <div class="text-4xl font-bold uppercase tracking-wide text-color4">Total worktime</div>
        
        <div class="flex flex-row w-full justify-around items-center py-4">
            <div class="font-semibold text-2xl py-1">Total:</div>
            <ShowField class="flex justify-center" label="Worktime" :data="doneJobs.time_count" />
            <ShowField class="flex justify-center" label="Finished jobs" :data="doneJobs.done_job_count" />
        </div>

        <div class="flex flex-row w-full justify-around items-center py-4">
            <div class="flex justify-center">
                <label for="partner" class="uppercase text-xs font-bold absolute pl-3 pt-2"> partner </label>
                <select id="partner" class="pt-8 w-full rounded-lg border border-gray-200 p-3 placeholder-gray-400 outline-none focus:bg-gray-200 shadow-lg"
                    v-model="selectedPartner"
                    @change="getDatas()">
                    <option v-for="(partner, partnerKey) in partners.data" :key="partnerKey"
                    :value="partner.data.partner_id" 
                    class="p-10">
                        {{ partner.data.attributes.name }}
                    </option>
                </select>
            </div>

            <ShowField class="flex justify-center" label="Worktime" :data="doneJobs.time_count" />
            <ShowField class="flex justify-center" label="Finished jobs" :data="doneJobs.done_job_count" />

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
                doneJobs: 'doneJobs',
                doneJobsStatus: 'doneJobsStatus',
                partners: 'partners',
                partnersStatus: 'partnersStatus',
            })

        },

        data: () => {
            return {
                selectedPartner: null,
            }
        },

        mounted() {

            this.$store.dispatch('fetchDoneJobs');
            this.$store.dispatch('fetchPartners');

        },

        methods: {

            getDatas() {

                this.$store.dispatch('fetchPartnerDoneJobs', this.selectedPartner);

            }
        }
    }
</script>