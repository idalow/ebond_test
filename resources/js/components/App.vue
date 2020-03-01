<template>

    <div class="flex flex-row flex-1 h-screen overflow-y-hidden bg-gray-200">

        <Nav />

        <div class="m-10 mx-auto w-4/5">
            <div class="flex-col h-full p-20 bg-white rounded-lg shadow-2xl overflow-y-auto">
                <transition name="main-router-anim" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>

    </div>

</template>

<script>
    import Nav from './Nav';

    export default {
        name: 'App',

        components: {
            Nav,
        },

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
        transform: translateY(+150px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
    }

</style>
