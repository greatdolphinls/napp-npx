<template>
    <div>
        <b-container>
            <h1>View Publication</h1>

            {{ publication }}
        </b-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    //components: { RatioImage },  

    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },

    fetch({ store, params }) {
        store.dispatch("viewer/getPublication", Number(params.id));
    },

    computed: {
        ...mapGetters({
            publication: 'viewer/publication',
        })
    }
}
</script>

<style scoped>

</style>