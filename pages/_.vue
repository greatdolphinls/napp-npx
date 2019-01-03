<template>
    <div>
        <b-container class="mt-5">
            <code>{{ $route.fullPath }}</code>
            <h1>404 - Page not found</h1>
        </b-container>

    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route)
        
    }
}
</script>

<style scoped>

</style>