<template>
    
        <div v-if="typeof(this.avatar) == 'undefined' || this.avatar == null" class="rounded-full text-white bg-nuts5 flex justify-center items-center shadow-xxl" :style="{width: this.size +'px', height: this.size +'px', 'font-size': this.size-10 +'px'}">
            {{ userCircle }}
        </div>
        <div v-else>
            <img class="rounded-full justify-center items-center h-10 w-10 object-cover shadow-xxl" :src="'../storage/' + avatar.url" :style="{width: this.size +'px', height: this.size +'px'}">
        </div>

</template>

<script>
    export default {
        name: "UserCircle",

        props: [
            'name',
            'avatar',
            'size',
        ],

        computed: {
            userCircle: function () {

                return this.name.charAt(0);

            }
        }
    }
</script>

<style scoped>

</style>