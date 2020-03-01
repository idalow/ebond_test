<template>

    <div v-if="employees" class="">

        <div class="text-4xl font-bold uppercase tracking-wide text-color4">Edit employee</div>

        <InputField name="name" label="name" autocomplete="name" type="text" :errors="employeeErrors"
            placeholder="Will Smith" @update:field="form.name = $event" :data="employees.data.attributes.name"/>

        <InputField name="post" label="post" autocomplete="post" type="text" :errors="employeeErrors"
            placeholder="Boss" @update:field="form.post = $event" :data="employees.data.attributes.post"/>

        <InputField name="email" label="email" autocomplete="email" type="email" :errors="employeeErrors"
            placeholder="email@email.com" @update:field="form.email = $event" :data="employees.data.attributes.email"/>
        
        <InputField name="phone" label="phone" autocomplete="phone" type="text" :errors="employeeErrors"
            placeholder="+00-888-444" @update:field="form.phone = $event" :data="employees.data.attributes.phone"/>

        <div class="flex justify-around select-none pt-6 font-semibold">
            <div class="flex items-center border bg-white p-2 px-4 hover:bg-red-600 hover:text-white rounded-lg"
                @click="$router.back()">
                Cancel
            </div>

            <div class="flex items-center text-white bg-color4 p-2 px-4 hover:bg-color5 rounded-lg"
                @click="$store.dispatch('updateEmployee', { form: form, employeeId: employees.data.employee_id } )">
                Save
            </div>
        </div>
    </div>

</template>

<script>
    import InputField from '../../components/InputField';
    import { mapGetters } from 'vuex';

    export default {
        name: 'EditEmployee',

        components: {
            InputField,
        },

        computed: {

            ...mapGetters({
                employees: 'employees',
                employeeErrors: 'employeeErrors',
                employeesStatus: 'employeesStatus',
            })

        },

        data: function () {
            return {
                form: {
                    'name': '',
                    'post': '',
                    'email': '',
                    'phone': '',
                },
            }
        },

        watch: {
            employeesStatus: function(val) {
                if (val === 'Sent' ) {
                    this.$router.push('/employee');
                }
            }
        },

        mounted() {

            this.$store.dispatch('fetchEmployee', this.$route.params.id);

        }
    }
</script>