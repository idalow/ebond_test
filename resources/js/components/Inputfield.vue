<template>
    <div class="py-2">
        <label :for="name" class="uppercase text-xs font-bold absolute pl-3 pt-2">{{ label }}</label>
        <div>
            <input :id="name" class="pt-8 w-full rounded-lg border border-gray-200 p-3 placeholder-gray-400 outline-none focus:bg-gray-200 " :class="errorClassObject()" :placeholder="placeholder" :autocomplete="autocomplete" :type="type" v-model="value" @input="updateField()">
            <p class="text-red-600 text-sm pt-1" v-text="errorMessage()">Error Here</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputField",

        props: [
            'name', 'label', 'placeholder', 'errors', 'data', 'autocomplete', 'type',
        ],

        data: function () {
            return {
                value: this.data
            }
        },

        computed: {
            hasError: function () {
                return this.errors && this.errors[this.name] && this.errors[this.name].length > 0;
            }
        },

        methods: {
            updateField: function () {
                this.clearErrors(this.name);

                this.$emit('update:field', this.value)
            },

            errorMessage: function () {
                if (this.hasError) {
                    return this.errors[this.name][0];
                }
            },

            clearErrors: function () {
                if (this.hasError) {
                    this.errors[this.name] = null;
                }
            },

            errorClassObject: function () {
                return {
                    'error-field': this.hasError
                }
            }
        },

        mounted() {
            this.$emit('update:field', this.value);
        },

        watch: {
            data: function (val) {
                this.value = val;
            }
        }
    }
</script>