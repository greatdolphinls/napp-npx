<template>
    <div>
        <b-container>
            <h1>Viewer</h1>
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
    async fetch({ store, params }) {
        await store.dispatch("viewer/getFolders");
        await store.dispatch("viewer/getPublications");
    },

    computed: {
        ...mapGetters({
            publications: 'viewer/publicationsInContext',
            folders: 'viewer/foldersInContext'
        })
    }
}
</script>

<style scoped>

</style>