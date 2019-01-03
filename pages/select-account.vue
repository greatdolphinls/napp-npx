<template>
    <div>
        <b-container>
            <h3>Hello, {{ loggedInUser.first_name }} {{ loggedInUser.last_name }}</h3>

            <p>Please select your account to continue.</p>

             <b-list-group>
                <b-list-group-item
                    v-for="(item, index) in availableAccounts"
                    :key="index"
                    @click.prevent="selectAccount(item)"
                    :active="item.title === currentAccount.title">
                    <div class="d-flex w-100 align-items-center">
                        <div class="mr-3">
                            <b-img v-if="item.icon" rounded="circle" width="75" height="75" fluid :src="item.icon" />
                            <b-img blank blank-color="#777" v-else rounded="circle" width="75" height="75" fluid />
                        </div>
                        <div>
                            <h5 class="mb-1">{{ item.title }}</h5>
                        </div>
                    </div>
                </b-list-group-item>
            </b-list-group>

        </b-container>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    layout: 'auth',

    computed: {
        ...mapState({
            currentAccount: state => state.auth.currentAccount
        }),
        ...mapGetters('auth', [
            'availableAccounts',
            'loggedInUser'
        ])
    },

    created() {
        if (this.availableAccounts.length < 1) {
            this.$router.push('/')
        }

    },
    methods: {
        async selectAccount(account) {
            await this.$store.dispatch('auth/selectAccount', account)
            this.$router.push('/')
        },
    },
}
</script>

<style scoped>

</style>
