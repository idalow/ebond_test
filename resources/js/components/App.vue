<template>
        
    <transition name="main-router-anim" mode="out-in">
        <router-view></router-view>
    </transition>
    
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        name: "App",

        props: [
            'user'
        ],

        created() {

            this.$store.dispatch('setPageTitle', this.$route.meta.title);

        },
        
        watch: {
            $route(to, from) {
                this.$store.dispatch('setPageTitle', to.meta.title);
            }
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
        transform: translateY(-150px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
    }

</style>
