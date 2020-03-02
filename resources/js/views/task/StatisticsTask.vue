<template>

    <div v-if="tasksStatus === 'Success' && partnersStatus === 'Success' " class="flex flex-col">
        <div class="text-4xl font-bold uppercase tracking-wide text-color4 pb-8">Tasks</div>
        
        <div class="flex justify-around ">
            <div class="font-semibold text-2xl py-1">Total:</div>
            <ShowField label="All" :data="tasks.task_count" />
            <ShowField label="Done" :data="done" />
            <ShowField label="Not done yet" :data="notDoneYet" />
        </div>

        <div class="flex flex-row w-full justify-around items-center py-4">

            <div class="flex justify-center">
                <label for="partner" class="uppercase text-xs font-bold absolute pl-3 pt-2"> partner </label>
                <select id="partner" class="pt-8 w-full rounded-lg border border-gray-200 p-3 placeholder-gray-400 outline-none focus:bg-gray-200 shadow-lg"
                    v-model="selectedPartner"
                    @change="$store.dispatch('fetchPartnerTasks', selectedPartner)">
                    <option v-for="(partner, partnerKey) in partners.data" :key="partnerKey"
                    :value="partner.data.partner_id" 
                    class="p-10">
                        {{ partner.data.attributes.name }}
                    </option>
                </select>
            </div>

            <ShowField v-if="tasksForPartners" label="All" :data="tasksForPartners.task_count" />
            <ShowField v-if="tasksForPartners" label="Done" :data="partnerDone" />
            <ShowField v-if="tasksForPartners" label="Not done yet" :data="partnerNotDoneYet" />

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
                partners: 'partners',
                partnersStatus: 'partnersStatus',
                tasksForPartners: 'tasksForPartners',
            }),

            notDoneYet: function () {
                return this.tasks.task_count - this.done;
            },

            partnerNotDoneYet: function () {
                return this.tasksForPartners.task_count - this.partnerDone;
            },

            done: function() {
                let count = 0;

                for(let i = 0; i < this.tasks.data.length; i++) {
                    
                    if (this.tasks.data[i].data.done === true)
                    {
                        count++;
                    };
                }
                
                return count;
            },

            partnerDone: function() {
                let count = 0;

                for(let i = 0; i < this.tasksForPartners.data.length; i++) {
                    
                    if (this.tasksForPartners.data[i].data.done === true)
                    {
                        count++;
                    };
                }
                
                return count;
            },

        },

        data: () => {
            return {
                selectedPartner: null,
            }
        },

        created() {

            this.$store.dispatch('fetchTasks');
            this.$store.dispatch('fetchPartners');

        },
        
    }
</script>