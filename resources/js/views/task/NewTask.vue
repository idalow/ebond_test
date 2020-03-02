<template>

    <div v-if="partnersStatus === 'Success' " class="">

        <div class="text-4xl font-bold uppercase tracking-wide text-color4">Add new task</div>

            <InputField name="title" label="title" autocomplete="title" type="text" :errors="taskErrors"
                placeholder="Add title" @update:field="form.title = $event"/>

            <InputField name="description" label="description" autocomplete="description" type="text" :errors="taskErrors"
            placeholder="Add description" @update:field="form.description = $event"/>

            <label for="partner" class="uppercase text-xs font-bold absolute pl-3 pt-2"> partner </label>
            <select id="partner" v-model="form.partner_id" class="pt-8 w-full rounded-lg border border-gray-200 p-3 placeholder-gray-400 outline-none focus:bg-gray-200 shadow-lg">
                <option v-for="(partner, partnerKey) in partners.data" :key="partnerKey" v-bind:value="partner.data.partner_id"
                    class="p-10">
                    {{ partner.data.attributes.name }}
                </option>
            </select>

        <div class="flex justify-around select-none pt-6 font-semibold">
            <div class="flex items-center border bg-white p-2 px-4 hover:bg-red-600 hover:text-white rounded-lg"
                @click="$router.back()">
                Cancel
            </div>

            <div class="flex items-center text-white bg-color4 p-2 px-4 hover:bg-color5 rounded-lg"
                @click="$store.dispatch('saveTask', form)">
                Save
            </div>
        </div>
    </div>

</template>

<script>
    import InputField from '../../components/InputField';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Newtask',

        components: {
            InputField,
        },

        computed: {

            ...mapGetters({
                tasksStatus: 'tasksStatus',
                taskErrors: 'taskErrors',
                partners: 'partners',
                partnersStatus: 'partnersStatus',
            })

        },


        data: () => {
            return {
                form: {
                    'title': '',
                    'description': '',
                    'partner_id': '',
                },
            }
        },

        watch: {
            tasksStatus: function(val) {
                if (val === 'Sent' ) {
                    this.$router.push('/task');
                }
            }
        },

        created() {

            this.$store.dispatch('fetchPartners');

        }
    }
</script>