<template>

    <div class="mx-auto min-h-screen flex justify-center items-center">
        <div class="w-1/3 p-6 rounded-lg shadow-2xl">

            <h1 class="text-color4 font-bold text-3xl pt-8">Join Us</h1>
            <h2 class="text-color4 font-bold text-base">Enter your information below</h2>

            <div class="pt-8">

                <InputField name="name" label="username" autocomplete="name" type="text" :errors="userErrors"
                    placeholder="Usename" @update:field="form.name = $event"/>
                
                <InputField name="email" label="email" autocomplete="email" type="email" :errors="userErrors"
                    placeholder="your@email.com" @update:field="form.email = $event"/>
                
                <InputField name="password" label="password" autocomplete="current-password" type="password" :errors="userErrors"
                    placeholder="Password" @update:field="form.password = $event"  />

                <InputField name="password-confirm" label="re-enter password" autocomplete="current-password" type="password" :errors="userErrors"
                    placeholder="Password" @update:field="form.password_confirm = $event"  />

                <div class="pt-6">
                    <button type="submit" class="w-full rounded py-2 px-3 uppercase text-left bg-color4 text-white font-bold hover:bg-color5"
                        @click="$store.dispatch('registerUser',form)">
                        Register
                    </button>
                </div>

                <div class="pt-8 flex justify-start text-white text-sm font-bold">
                    <router-link to="/login">
                        <div class="text-color4 hover:text-color5 select-none">Login</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import InputField from '../components/InputField';
    import { mapGetters } from 'vuex';

    export default {

        name: "Register",

        components: {
            InputField,
        },

        computed: {

            ...mapGetters({
                userErrors: 'userErrors',
            })

        },

        data: function () {
            return {
                form: {
                    'name': '',
                    'email': '',
                    'password': '',
                    'password_confirm': '',
                },
            }
        },

    }
</script>