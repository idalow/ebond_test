<template>

    <div v-if="partnersStatus === 'Success' " class="flex flex-col justify-center items-center">
        
        <div class="flex items-center pb-8 justify-between w-full">
            <div class="text-4xl font-bold uppercase tracking-wide text-color4">Profile</div>
            <router-link :to="'/partner/' + $route.params.id + '/edit'" class="flex items-center text-white bg-color4 p-2 hover:bg-color5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> 
                <p class="font-semibold px-2"> Edit </p>
            </router-link>
        </div>

        <div class="flex mb-2 justify-center items-center pb-6">
            <img class="h-20 w-20 rounded-full object-cover" :src="partners.data.attributes.avatar">
        </div>

        <ShowField label="name" :data="partners.data.attributes.name" />
        <ShowField label="address" :data="partners.data.attributes.address" />
        <ShowField label="e-mail" :data="partners.data.attributes.email" />
        <ShowField label="phone" :data="partners.data.attributes.phone" />

    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import ShowField from '../../components/ShowField';

    export default {
        name: 'Showpartner',

        components: {
            ShowField,
        },

        computed: {

            ...mapGetters({
                partners: 'partners',
                partnersStatus: 'partnersStatus',
            })

        },

        created() {

            this.$store.dispatch('fetchPartner', this.$route.params.id);

        }
    }
</script>