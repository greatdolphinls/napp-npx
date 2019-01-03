<template>
    <div>
        <b-container>
            <h1>Forms</h1>
        </b-container>

        <b-container fluid>
            <b-row>
                <b-col 
                    cols="3"
                    v-for="form in list" 
                    :key="form.id">
                    <b-card 
                        :sub-title="form.name"
                        :img-src="form.image || 'https://via.placeholder.com/2440x746.png?text=Form+placeholder'"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2 w-100">
                        <nuxt-link :to="`/forms/${form.id}/fill`" >
                            <b-button variant="primary">Open form</b-button>
                        </nuxt-link>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    async fetch({ store, params }) {
        await store.dispatch("forms/get");
    },

    computed: {
        ...mapState({
            list: state => state.forms.list
        })
    },
}
</script>

<style scoped>

</style>