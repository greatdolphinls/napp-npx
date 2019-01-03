<template>
    <div>
        <navigation />
        <nuxt/>
    </div>
</template>

<script>
import Navigation from './../components/Navigation.vue'
import { mapGetters } from 'vuex'

export default {
    middleware: 'auth',
    components: {Navigation},

    async created() {
        await this.$store.dispatch("config/getConfig")
    },
    
    head () {
        return {
            title: this.$store.getters['config/title'] || 'Napp'
        }
    },

}
</script>
