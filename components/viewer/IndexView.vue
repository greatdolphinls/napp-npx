<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col 
                    class="mb-4" 
                    v-for="folder in folders" 
                    :key="folder.id" 
                    cols="3">
                    <b-card>
                        <ratio-image
                            fallback-src="https://via.placeholder.com/360x468.png?text=Folder+placeholder"
                            :src="folder.image"
                            lazy-load
                            ratio="16/9">
                            <span>Loading...</span>
                        </ratio-image>

                        <p class="text-truncate m-0 mt-2">
                            <strong>{{ folder.title }}</strong>
                        </p>

                        <div class=mb-2>
                            <small><fa :icon="['far', 'folder']"/> Folder</small>
                        </div>

                        <nuxt-link :to="`/viewer/folder/${folder.id}`" >
                            <b-button block variant="primary">Open folder</b-button>
                        </nuxt-link>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid>
            <b-row>
                <b-col 
                    class="mb-4" 
                    v-for="publication in publications" 
                    :key="publication.id" 
                    cols="3">
                    <b-card>
                        <ratio-image
                            fallback-src="https://via.placeholder.com/360x468.png?text=Publication+placeholder"
                            :src="publication.image"
                            lazy-load
                            ratio="10/13">
                            <span>Loading...</span>
                        </ratio-image>
                        <p class="text-truncate m-0 mt-2">
                            <strong>{{ publication.title }}</strong>
                        </p>
                        
                        <div class=mb-2>
                            <small><fa :icon="['far', 'file-pdf']"/> Publication</small>
                        </div>

                        <nuxt-link :to="`/viewer/publications/${publication.id}`" >
                            <b-button block variant="secondary">Open publication</b-button>
                        </nuxt-link>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import RatioImage from '@/components/common/RatioImage'
export default {
    components: { RatioImage },
    props: {
        folders: { type: Array, default: () => []},
        publications: { type: Array, default: () => []},
    }
}
</script>