<template>

    <div>
        <div class="flex items-center pb-8 justify-between">
            <div class="text-4xl font-bold uppercase tracking-wide text-color4">Partners</div>
            <router-link to="/partner/new" class="flex items-center text-white bg-color4 p-2 hover:bg-color5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <p class="font-semibold px-2"> Add new </p>
            </router-link>
        </div>
        <div v-if="partnersStatus != 'Success' || partnersStatus === null ">Loading partners...</div>
        <div v-else class="flex flex-col flex-wrap sm:flex-row">
            <InfoCard class="sm:w-1/4 md:w-3/6 lg:w-1/6 p-2 m-2" v-for="(partner, partnerKey) in partners.data" :key="partnerKey" :data="partner"/>
        </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import InfoCard from '../../components/InfoCard';

    export default {
        name: 'PartnersList',

        components: {
            InfoCard,
        },
        
        computed: {

            ...mapGetters({
                partners: 'partners',
                partnersStatus: 'partnersStatus',
            })

        },

        created() {

            this.$store.dispatch('fetchPartners');

        }
    }
</script>