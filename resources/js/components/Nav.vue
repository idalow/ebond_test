<template>

    <div class="w-1/7 p-4 flex-row items-center border-b border-gray-400 shadow-2xl bg-gray-100">
        
        <div class="flex flex-col py-10 justify-center select-none">
            <img class="flex mx-auto rounded-full justify-center h-32 w-32 object-cover" :src="'/storage/' + authUser.data.attributes.avatar.url">
            <div class="flex font-semibold text-xl justify-center"> {{ authUser.data.attributes.name }}</div>
        </div>
        <!-- bg-color4 text-white hover:bg-color5 -->
        <router-link to="/employee" active-class="text-color4" class="flex flex-row py-2 px-4 my-2 items-center justify-start font-semibold text-2xl text-gray-500 hover:text-color4 hover:no-underline rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <div class="px-2 tracking-wide">Employees</div>
        </router-link>

        <router-link to="/task" active-class="text-color4" class="flex py-2 px-4 my-2 items-center justify-start font-semibold text-2xl text-gray-500 hover:text-color4 hover:no-underline rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
            <div class="px-2 tracking-wide">Tasks</div>
        </router-link>

        <router-link to="/partner" active-class="text-color4" class="flex py-2 px-4 my-2 items-center justify-start font-semibold text-2xl text-gray-500 hover:text-color4 hover:no-underline rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            <div class="px-2 tracking-wide">Partners</div>
        </router-link>
            
        <router-link to="/done_job" active-class="text-color4" class="flex py-2 px-4 my-2 items-center justify-start font-semibold text-2xl text-gray-500 hover:text-color4 hover:no-underline rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
            <div class="px-2 tracking-wide">Finished jobs</div>
        </router-link>

        <div class="flex py-2 px-4 mt-24 justify-start items-end font-semibold text-lg text-gray-500 hover:text-color4 hover:no-underline rounded-lg cursor-pointer"
            @click="$store.dispatch('logoutUser')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <div class="px-2 tracking-wide">Logout</div>
        </div>

    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Nav',

        computed: {

            ...mapGetters({
                authUser: 'authUser',
            })

        },
    }
</script>