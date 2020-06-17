<template>

    <div class="">

        <div class="text-4xl font-bold uppercase tracking-wide text-color4">Add new partner</div>

        <ImageUploader :image="'/storage/avatar/default-user-img.jpg'" @update:field="form.avatar = $event" />

        <InputField name="company name" label="company name" autocomplete="company name" type="text" :errors="partnerErrors"
            placeholder="McDonalds" @update:field="form.name = $event"/>

        <InputField name="address" label="address" autocomplete="address" type="text" :errors="partnerErrors"
            placeholder="Szeged, Nagy str. 44" @update:field="form.address = $event"/>

        <InputField name="email" label="email" autocomplete="email" type="email" :errors="partnerErrors"
            placeholder="email@email.com" @update:field="form.email = $event"/>
        
        <InputField name="phone" label="phone" autocomplete="phone" type="text" :errors="partnerErrors"
            placeholder="+00-888-444" @update:field="form.phone = $event"/>

        <div class="flex justify-around select-none pt-6 font-semibold">
            <div class="flex items-center border bg-white p-2 px-4 hover:bg-red-600 hover:text-white rounded-lg"
                @click="$router.back()">
                Cancel
            </div>

            <div class="flex items-center text-white bg-color4 p-2 px-4 hover:bg-color5 rounded-lg"
                @click="$store.dispatch('savePartner', form)">
                Save
            </div>
        </div>
    </div>

</template>

<script>
    import InputField from '../../components/InputField';
    import ImageUploader from '../../components/ImageUploader';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Newpartner',

        components: {
            InputField,
            ImageUploader,
        },

        computed: {

            ...mapGetters({
                partnerErrors: 'partnerErrors',
                partnersStatus: 'partnersStatus',
            })

        },

        data: function () {
            return {
                form: {
                    'avatar': '',
                    'name': '',
                    'address': '',
                    'email': '',
                    'phone': '',
                },
            }
        },

        watch: {
            partnersStatus: function(val) {
                if (val === 'Sent' ) {
                    this.$router.push('/partner');
                }
            }
        },

    }
</script>