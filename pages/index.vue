<template>
	<section class="container">
		<div>
			<h1>HOME</h1>

            <div v-for="(item, index) in components" :key="index">
                {{ item.text.title || 'NO TITLE' }}
            </div>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {

    async fetch({ store, params }) {
        await store.dispatch("home/getComponents");
    },

    computed: {
        ...mapState({
            components: state => state.home.components
        })
    },
}
</script>

<style scoped>
</style>
