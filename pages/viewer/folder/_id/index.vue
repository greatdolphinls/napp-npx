<template>
    <div>
        <b-container>
            <h1>Viewer - folder</h1>
        </b-container>

        <index-view
            :folders="folders"
            :publications="publications" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import IndexView from '@/components/viewer/IndexView'
export default {
    components: { IndexView },

    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },

    async fetch({ store, params }) {
        await store.dispatch("viewer/getFolders");
        await store.dispatch("viewer/getPublications", Number(params.id));
    },

    computed: {
        ...mapGetters({
            publications: 'viewer/publicationsInContext',
            folders: 'viewer/foldersInContext'
        })
    },

    mounted() {
        console.log(this.$router)
        console.log(this.$route)

    }
}
</script>

<style scoped>

</style>
