<template>

    <div class="flex flex-row flex-1 h-screen overflow-y-hidden bg-blue-100">

        <Nav />

        <router-view></router-view>

    </div>

</template>

<script>
    import Nav from './Nav';

    export default {
        name: 'App',

        components: {
            Nav,
        },

        mounted() {
        
        }
    }
</script>
