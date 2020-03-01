<template>

    <div v-if="tasksStatus === 'Success'">
        <div class="flex flex-row items-center justify-between bg-white px-4 py-2 rounded-lg shadow-lg" :class="tasks.data.attributes.done ? 'bg-green-100' : 'hover:bg-gray-200'">
            
            <TaskInfo :data="tasks" />
            
        </div>

        <InputField name="time" label="time" autocomplete="time" type="text" :errors="taskErrors"
            placeholder="HH / MM " @update:field="form.time = $event"/>

        <div v-if="employeesStatus === 'Success'">
            <label for="employee" class="uppercase text-xs font-bold absolute pl-3 pt-2"> employee </label>
            <select id="employee" v-model="form.employee_id" class="pt-8 w-full rounded-lg border border-gray-200 p-3 placeholder-gray-400 outline-none focus:bg-gray-200 shadow-lg">
                <option v-for="(employee, employeeKey) in employees.data" :key="employeeKey" :value="employee.data.employee_id"
                    class="p-10">
                    {{ employee.data.attributes.name }}
                </option>
            </select>
        </div>

        <div class="flex justify-around select-none pt-6 font-semibold">
            <div class="flex items-center border bg-white p-2 px-4 hover:bg-red-600 hover:text-white rounded-lg"
                @click="$router.back()">
                Cancel
            </div>

            <div class="flex items-center text-white bg-color4 p-2 px-4 hover:bg-color5 rounded-lg"
                @click="form.task_id = tasks.data.task_id, 
                    $store.dispatch('saveDoneJob', form)">
                Save
            </div>
        </div>

    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    import TaskInfo from '../../components/TaskInfo';
    import InputField from '../../components/InputField';

    export default {

        name: 'TaskCard',

        components: {
            InputField,
            TaskInfo,
        },

        data: () => {
            return {
                form: {
                    'task_id':  '',
                    'employee_id': '',
                    'time': '',
                },
            }
        },

        computed: {

            ...mapGetters({
                employees: 'employees',
                employeesStatus: 'employeesStatus',
                tasks: 'tasks',
                tasksStatus: 'tasksStatus',
                taskErrors: 'taskErrors',
                doneJobsStatus: 'doneJobsStatus',

            }),

        },

        watch: {
            doneJobsStatus: function(val) {
                if (val === 'Sent' ) {
                    this.$router.push('/task');
                }
            }
        },

        mounted() {

            this.$store.dispatch('fetchTask', this.$route.params.id);
            this.$store.dispatch('fetchEmployees');

        }

    }
</script>