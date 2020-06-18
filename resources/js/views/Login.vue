<template>

    <div class="mx-auto min-h-screen flex justify-center items-center">
        <div class="w-1/3 rounded-lg shadow-2xl p-6">

            <h1 class="text-color4 text-3xl pt-8 font-bold">Welcome Back</h1>
            <h2 class="text-color4 font-bold">Enter your credentials below</h2>

            <div class="pt-8">

                <InputField name="email" label="email" autocomplete="email" type="email" :errors="userErrors"
                    placeholder="your@email.com" @update:field="form.email = $event"/>
                
                <InputField name="password" label="password" autocomplete="current-password" type="password" :errors="userErrors"
                    placeholder="Password" @update:field="form.password = $event"  />

                <div class="pt-2">
                    <input class="" type="checkbox" v-model="form.remember" name="remember" id="remember" checked>

                    <label class="text-color4 hover:text-color5 select-none font-bold" for="remember">Remember Me</label>
                </div>

                <div class="pt-8">
                    <button class="w-full bg-color4 py-2 px-3 text-left uppercase rounded text-white font-bold hover:bg-color5"
                        @click="$store.dispatch('loginUser',form)">
                        Login
                    </button>
                </div>

                <div class="flex justify-start pt-8 text-white text-sm font-bold">
                    <router-link to="/register">
                        <div class="text-color4 hover:text-color5 select-none">Register</div>
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

        name: "Login",

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
                    'email': '',
                    'password': '',
                    'remember': true,
                },
            }
        },

    }
</script>