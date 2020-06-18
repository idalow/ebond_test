<template>

    <div v-if="authUser" class="flex flex-row flex-1 h-screen overflow-y-hidden bg-gray-200">

        <Nav />

        <div class="m-10 mx-auto w-4/5">
            <div class="flex-col h-full p-20 bg-white rounded-lg shadow-2xl overflow-y-auto">
                <transition name="main-router-anim" mode="out-in">
                    <router-view :key="$route.fullPath"></router-view>
                </transition>
            </div>
        </div>

    </div>

</template>

<script>
    import Nav from '../components/Nav';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Pages',

        components: {
            Nav,
        },

        computed: {

            ...mapGetters({
                authUser: 'authUser',
            })

        },

        mounted() {

            this.$store.dispatch('fetchAuthUser');

        },

    }
</script>

<style>

    .main-router-anim-enter-active {
    animation: pagecome 1s;
    animation-delay: 0s;
    opacity: 0;
    }
    .main-router-anim-leave-active {
    animation: pagego 1s;
    }

    @keyframes pagego {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-50px);
        opacity: 0;
    }
    }
    @keyframes pagecome {
    from {
        transform: translateY(+150px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
    }

</style>
