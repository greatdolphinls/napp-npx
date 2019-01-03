<template>
    <div>
        <b-container>
            <b-form @submit.prevent="onSubmit">
                <b-form-group
                    label="Email"
                    label-for="email">
                    <b-form-input id="email" v-model.trim="form.email"></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Password"
                    label-for="password">
                    <b-form-input type="password" id="password" v-model.trim="form.password"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>

export default {
    layout: 'auth',
    middleware: 'guest',
    data() {
        return {
            form: {
                email: 'upwork@user.com',
                password: 'upwork',
            }
        }
    },

    methods: {
        async onSubmit() {
            const auth = await this.$store.dispatch("auth/login", this.form);

            if (auth.accounts.length > 1) {
                return this.$router.push('/select-account')
            }

            await this.$store.dispatch("auth/selectAccount", auth.accounts[0]);
            this.$router.push('/')

        },
    },
}
</script>

<style scoped>

</style>
